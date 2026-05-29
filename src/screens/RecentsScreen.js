import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '../services/supabase';
import { colors } from '../theme/colors';
import ArticleCard from '../components/ArticleCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import FloatingNavbar from '../components/FloatingNavbar';

// Mocks estáticos idênticos aos cadastrados no banco Supabase para povoar o app offline imediatamente
const STATIC_RESUMUS = [
  {
    id: 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d',
    title: 'Doppler das Artérias Uterinas no 2º Trimestre',
    specialty: 'Obstetrícia',
    content: 'A avaliação do Doppler das artérias uterinas (AUt) no segundo trimestre (20 a 24 semanas) constitui o padrão-ouro no rastreamento de insuficiência placentária crônica, pré-eclâmpsia (PE) de início tardio e restrição de crescimento fetal (RCF). A persistência da incisura protodiastólica bilateral nesta idade gestacional, ou um índice de pulsatilidade (IP) médio acima do percentil 95, reflete uma falha na segunda onda de invasão trofoblástica das artérias espiraladas musculares.',
    conclusion: 'A identificação de Doppler alterado de artérias uterinas no segundo trimestre exige vigilância clínica redobrada com aferição frequente da pressão arterial materna e monitoramento seriado do crescimento fetal via ultrassom a cada 3 a 4 semanas.',
    bibliographic_references: '1. Nicolaides KH, et al. Screening for pre-eclampsia in the second trimester. Fetal Diagn Ther 2021.\n2. Burton GJ, et al. Uterine artery Doppler and placental development. Placenta 2020.',
    tags: ['Doppler', 'Obstetrícia', 'Artérias Uterinas', 'Pré-eclâmpsia'],
    images: ['https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=400'],
    status: 'published',
    created_at: new Date().toISOString()
  },
  {
    id: 'b2c3d4e5-f67a-8b9c-0d1e-2f3a4b5c6d7e',
    title: 'Ultrassonografia Pélvica na Dor Aguda',
    specialty: 'Ginecologia',
    content: 'A dor pélvica aguda em mulheres em idade fértil representa um desafio propedêutico comum no pronto-atendimento. O ultrassom pélvico (transvaginal e suprapúbico) é a modalidade de escolha para diferenciar causas ginecológicas urgentes de afecções não ginecológicas. As principais etiologias incluem gravidez ectópica, torção anexial, doença inflamatória pélvica (DIP) com abscesso tubo-ovariano e ruptura de cisto ovariano hemorrágico.',
    conclusion: 'O ultrassom pélvico é indispensável na triagem de emergências ginecológicas. A ausência de fluxo ao Doppler colorido no ovário suspeito, associada a aumento de volume e estroma hiperecogênico, possui alta especificidade para o diagnóstico de torção anexial.',
    bibliographic_references: '1. Levine D, et al. Gynecologic imaging in the emergency department. Radiology 2020.\n2. Patel MD, et al. Ultrasound evaluation of acute pelvic pain in women. Ultrasound Quarterly 2019.',
    tags: ['Urgência', 'Ginecologia', 'Dor Pélvica', 'Torção Anexial'],
    images: ['https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400'],
    status: 'published',
    created_at: new Date().toISOString()
  }
];

const STATIC_PROTOCOLUS = [
  {
    id: 'e5f67a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b',
    title: 'Varredura FAST / e-FAST no Paciente Politraumatizado',
    specialty: 'Emergência',
    content: 'O protocolo e-FAST (Extended Focused Assessment with Sonography for Trauma) visa a triagem imediata à beira-leito de sangramento intraperitoneal oculto (hemoperitônio), hemotórax e pneumotórax no paciente vítima de trauma grave contuso ou penetrante. A varredura é conduzida de forma síncrona com a ressuscitação inicial (ABCDE do trauma) e consiste na avaliação rápida de 6 pontos fundamentais:\n\n1. **Subxifoide (Saco Pericárdico):** Exclusão de tamponamento cardíaco (derrame pericárdico com colapso de câmaras direitas).\n2. **Quadrante Superior Direito (Espaço de Morrison):** Janela hepatorrenal. Avaliação de líquido livre entre o fígado e o rim direito, e no recesso pleural direito.\n3. **Quadrante Superior Esquerdo (Espaço Esplenorrenal):** Janela esplenorrenal. Avaliação de líquido livre peri-esplênico, no recesso esplenorrenal e no recesso pleural esquerdo.\n4. **Suprapúbico (Pélvico):** Avaliação de líquido livre no recesso retovesical (homens) ou no saco de Douglas (mulheres).\n5. e 6. **Janelas Pulmonares Anteriores (D/E):** Avaliação de deslizamento pleural (lung sliding) e linhas A para exclusão de pneumotórax.',
    conclusion: 'O e-FAST positivo associado à instabilidade hemodinâmica em trauma abdominal contuso dita a indicação cirúrgica imediata (laparotomia exploradora). Em pacientes estáveis, o FAST positivo indica a necessidade de angiotomografia computadorizada de abdome e pelve.',
    bibliographic_references: '1. Kirkpatrick AW, et al. Focused assessment with sonography for trauma (FAST): Emergency medicine applications. J Trauma Acute Care Surg 2018.\n2. Richards JR, et al. The e-FAST protocol: a clinical review. Emergency Radiology 2020.',
    tags: ['FAST', 'Trauma', 'Urgência', 'e-FAST'],
    images: ['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400'],
    status: 'published',
    created_at: new Date().toISOString()
  }
];

export default function RecentsScreen({ navigation }) {
  const [historyItems, setHistoryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchReadingHistory();
    }
  }, [isFocused]);

  /**
   * Povoa o histórico local no AsyncStorage com dados simulados
   */
  const generateSandboxHistory = async () => {
    setLoading(true);
    try {
      const offlineHistory = [
        { ...STATIC_RESUMUS[0], type: 'resumus', read_at: new Date(Date.now() - 5 * 60000).toISOString() }, // 5 min atrás
        { ...STATIC_PROTOCOLUS[0], type: 'protocolus', read_at: new Date(Date.now() - 30 * 60000).toISOString() }, // 30 min atrás
        { ...STATIC_RESUMUS[1], type: 'resumus', read_at: new Date(Date.now() - 120 * 60000).toISOString() } // 2h atrás
      ];

      await AsyncStorage.setItem('@offline_reading_history', JSON.stringify(offlineHistory));

      // Sincroniza online se houver internet e usuário logado
      const state = await NetInfo.fetch();
      let syncSuccess = false;

      if (state.isConnected) {
        const { data: userData } = await supabase.auth.getUser();
        if (userData?.user) {
          const payloads = offlineHistory.map(item => ({
            user_id: userData.user.id,
            article_id: item.id,
            article_type: item.type,
            read_at: item.read_at
          }));
          await supabase.from('reading_history').upsert(payloads);
          syncSuccess = true;
        }
      }

      Alert.alert(
        'Histórico Gerado!',
        syncSuccess 
          ? 'Histórico de leitura de teste injetado no aparelho e sincronizado na nuvem!' 
          : 'Histórico de leitura de teste injetado localmente! Pronto para testar offline!',
        [{ text: 'Ótimo!', onPress: () => fetchReadingHistory() }]
      );
    } catch (e) {
      console.log('Erro ao gerar sandbox histórico:', e);
      Alert.alert('Erro', 'Falha ao injetar histórico de teste.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Carrega o histórico de leitura do cache local e sincroniza em segundo plano com o Supabase
   */
  const fetchReadingHistory = async () => {
    setLoading(true);
    try {
      // 1. Carrega imediatamente o histórico local (Offline-First)
      const localHistoryStr = await AsyncStorage.getItem('@offline_reading_history');
      let localHistory = localHistoryStr ? JSON.parse(localHistoryStr) : [];
      setHistoryItems(localHistory);

      if (localHistory.length > 0) {
        setLoading(false);
      }

      // 2. Busca e sincroniza do Supabase se houver internet
      const state = await NetInfo.fetch();
      if (state.isConnected) {
        const { data: userData } = await supabase.auth.getUser();
        if (userData?.user) {
          const { data: historyRefs, error } = await supabase
            .from('reading_history')
            .select('article_id, article_type, read_at')
            .eq('user_id', userData.user.id)
            .order('read_at', { ascending: false });

          if (!error && historyRefs) {
            // Lê os caches locais das tabelas clínicas
            const cacheResumus = JSON.parse(await AsyncStorage.getItem('@cache_resumus') || '[]');
            const cacheLaudus = JSON.parse(await AsyncStorage.getItem('@cache_laudus') || '[]');
            const cacheProtocolus = JSON.parse(await AsyncStorage.getItem('@cache_protocolus') || '[]');

            const allArticlesMap = {};
            [...cacheResumus, ...cacheLaudus, ...cacheProtocolus].forEach(item => {
              allArticlesMap[item.id] = item;
            });

            const compiledItems = [];

            for (const ref of historyRefs) {
              let articleDetail = allArticlesMap[ref.article_id];

              if (!articleDetail) {
                // Sincronia resiliente: busca o artigo ausente no banco
                try {
                  const { data: fetched } = await supabase
                    .from(ref.article_type)
                    .select('*')
                    .eq('id', ref.article_id)
                    .maybeSingle();

                  if (fetched) {
                    articleDetail = fetched;
                    // Salva no cache correspondente
                    if (ref.article_type === 'resumus') {
                      cacheResumus.push(fetched);
                      await AsyncStorage.setItem('@cache_resumus', JSON.stringify(cacheResumus));
                    } else if (ref.article_type === 'protocolus') {
                      cacheProtocolus.push(fetched);
                      await AsyncStorage.setItem('@cache_protocolus', JSON.stringify(cacheProtocolus));
                    } else if (ref.article_type === 'laudus') {
                      cacheLaudus.push(fetched);
                      await AsyncStorage.setItem('@cache_laudus', JSON.stringify(cacheLaudus));
                    }
                  }
                } catch (e) {
                  console.log('Erro ao recuperar artigo do histórico no Supabase:', e);
                }
              }

              if (articleDetail) {
                compiledItems.push({
                  ...articleDetail,
                  type: ref.article_type,
                  read_at: ref.read_at
                });
              }
            }

            setHistoryItems(compiledItems);
            // Sincroniza o cache local de histórico
            await AsyncStorage.setItem('@offline_reading_history', JSON.stringify(compiledItems));
          }
        }
      }
    } catch (e) {
      console.log('Erro ao carregar histórico de leitura:', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Premium 1:1 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtnWrapper} onPress={() => navigation.navigate('Home')}>
          <Image 
            source={require('../../assets/arrow-left.png')} 
            style={styles.backIcon} 
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Recentes</Text>
        <View style={{ width: 40 }} />
      </View>

      {loading && historyItems.length === 0 ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#35B48B" />
          <Text style={styles.loaderText}>Carregando seu histórico...</Text>
        </View>
      ) : (
        <FlatList
          data={historyItems}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <ArticleCard 
              item={item} 
              onPress={() => navigation.navigate('ArticleDetail', { item, type: item.type })} 
            />
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyIcon}>⏱</Text>
              <Text style={styles.emptyTitle}>Sem histórico de leitura</Text>
              <Text style={styles.emptySub}>
                Os laudos, resumos e protocolos que você visualizar recentemente serão exibidos aqui para acesso rápido.
              </Text>
              <TouchableOpacity style={styles.sandboxBtn} onPress={generateSandboxHistory}>
                <Text style={styles.sandboxBtnText}>Gerar Histórico de Teste (Sandbox)</Text>
              </TouchableOpacity>
            </View>
          }
        />
      )}

      <FloatingNavbar navigation={navigation} activeTab="recents" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    width: '100%',
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
    marginTop: 8,
  },
  backBtnWrapper: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  headerTitle: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 20,
    color: '#1F2937',
  },
  list: {
    padding: 16,
    paddingBottom: 110,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  loaderText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    color: '#6B7280',
    marginTop: 12,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: 32,
  },
  emptyIcon: {
    fontSize: 48,
    color: '#D1D5DB',
    marginBottom: 16,
  },
  emptyTitle: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 18,
    color: '#374151',
    marginBottom: 8,
  },
  emptySub: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 13,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 16,
  },

  sandboxBtn: {
    marginTop: 20,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#35B48B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  sandboxBtnText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 13,
    color: '#35B48B',
  },
});
