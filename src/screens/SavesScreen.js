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
  },
  {
    id: 'c3d4e5f6-7a8b-9c0d-1e2f-3a4b5c6d7e8f',
    title: 'Colecistite Aguda e Coledocolitíase: Avaliação Ecográfica',
    specialty: 'Medicina Interna',
    content: 'O ultrassom de abdome superior constitui o primeiro exame de imagem na suspeita de afecções biliares agudas devido à sua alta sensibilidade (superior a 90 por cento) e ausência de radiação. Os critérios ecográficos fundamentais para o diagnóstico de colecistite aguda incluem: 1. Presença de cálculos impactados no colo vesicular ou ducto cístico; 2. Espessamento da parede vesicular superior a 3 mm (na ausência de hepatopatia ou insuficiência cardíaca); 3. Sinal de Murphy ultrassonográfico positivo; 4. Líquido pericolecístico; 5. Distensão vesicular (diâmetro transverso > 4 cm).',
    conclusion: 'A constatação de espessamento parietal vesicular associado ao Murphy sonográfico positivo apresenta valor preditivo positivo superior a 92 por cento para colecistite calculosa aguda. A dilatação do colédoco acima de 6 mm em pacientes não colecistectomizados exige investigação para coledocolitíase.',
    bibliographic_references: '1. Yokoe M, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholecystitis. J Hepatobiliary Pancreat Sci 2018.\n2. Radunovic M, et al. Ultrasound in the diagnosis of acute cholecystitis. Med Arh 2020.',
    tags: ['Abdome', 'Medicina Interna', 'Colecistite', 'Via Biliar'],
    images: ['https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=400'],
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
  },
  {
    id: 'f67a8b9c-0d1e-2f3a-4b5c-6d7e8f9a0b1c',
    title: 'Acesso Venoso Central Guiado por Ultrassom',
    specialty: 'Emergência',
    content: 'A cateterização venosa central guiada por ultrassom (USG) é o padrão-ouro de segurança recomendado pelas diretrizes internacionais, reduzindo drasticamente a taxa de complicações mecânicas (punção arterial acidental, pneumotórax, hematomas) para menos de 1 por cento. A veia jugular interna (VJI) e a veia femoral são os sítios preferenciais de varredura.\n\n### Passo a Passo do Procedimento:\n1. **Preparação Estéril:** Higienização, uso de capote, luvas e colocação da capa estéril protetora do transdutor com gel estéril interno.\n2. **Posicionamento e Varredura Prévia:** Paciente em Trendelenburg (para VJI). Posicionar o transdutor linear transversalmente para identificar a VJI (compressível, de parede fina e com fluxo pulsátil ausente ou fásico) em relação à artéria carótida (pulsátil, de parede espessa e não colapsável).\n3. **Técnica de Punção (Eixo Curto / Fora de Plano):** Introduzir a agulha no ponto médio do transdutor com angulação de 45 graus, acompanhando o deslocamento da ponta da agulha até a compressão e transfixação da parede anterior da veia.\n4. **Técnica de Punção (Eixo Longo / No Plano):** Rotacionar o transdutor 90 graus sobre a veia jugular para visibilizar toda a extensão da agulha penetrando o vaso.\n5. **Progressão do Fio Guia:** Introdução do fio guia sob visão dinâmica em tempo real no eixo longitudinal para certificar o posicionamento intravascular correto.',
    conclusion: 'O uso sistemático do ultrassom na punção venosa central elimina a técnica às cegas por marcos anatômicos, conferindo maior segurança jurídica e clínica. A confirmação dinâmica da progressão do fio guia no interior do vaso previne a canulação carotídea inadvertida.',
    bibliographic_references: '1. Lamperti M, et al. International evidence-based recommendations on ultrasound-guided vascular access. Intensive Care Med 2012.\n2. Saugel B, et al. Ultrasound-guided central venous catheterization: a review of the current evidence. J Critical Care 2018.',
    tags: ['Punção', 'Veia Jugular', 'Acesso Central', 'Segurança'],
    images: ['https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=400'],
    status: 'published',
    created_at: new Date().toISOString()
  }
];

export default function SavesScreen({ navigation }) {
  const [savedItems, setSavedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchSavedArticles();
    }
  }, [isFocused]);

  /**
   * Super Sandbox: Povoa os favoritos locais e os caches clínicos gerais para funcionamento offline instantâneo
   */
  const generateSandboxData = async () => {
    setLoading(true);
    try {
      // 1. Povoa os caches locais de artigos gerais para ResumUS e ProtocolUS
      const existingResumus = JSON.parse(await AsyncStorage.getItem('@cache_resumus') || '[]');
      const existingProtocolus = JSON.parse(await AsyncStorage.getItem('@cache_protocolus') || '[]');

      // Junta sem duplicar IDs
      const newResumus = [...STATIC_RESUMUS];
      existingResumus.forEach(item => {
        if (!newResumus.some(r => r.id === item.id)) newResumus.push(item);
      });
      const newProtocolus = [...STATIC_PROTOCOLUS];
      existingProtocolus.forEach(item => {
        if (!newProtocolus.some(p => p.id === item.id)) newProtocolus.push(item);
      });

      await AsyncStorage.setItem('@cache_resumus', JSON.stringify(newResumus));
      await AsyncStorage.setItem('@cache_protocolus', JSON.stringify(newProtocolus));

      // 2. Povoa a lista local de favoritos (Saves)
      const offlineSaves = [
        { ...STATIC_RESUMUS[0], type: 'resumus' },
        { ...STATIC_RESUMUS[1], type: 'resumus' },
        { ...STATIC_PROTOCOLUS[0], type: 'protocolus' }
      ];

      await AsyncStorage.setItem('@offline_saved_articles', JSON.stringify(offlineSaves));

      // 3. Tenta sincronizar online se houver usuário e internet
      const state = await NetInfo.fetch();
      let syncSuccess = false;
      
      if (state.isConnected) {
        const { data: userData } = await supabase.auth.getUser();
        if (userData?.user) {
          const payloads = offlineSaves.map(item => ({
            user_id: userData.user.id,
            article_id: item.id,
            article_type: item.type,
            is_favorite: true
          }));
          await supabase.from('saved_articles').upsert(payloads);
          syncSuccess = true;
        }
      }

      Alert.alert(
        'Sandbox Gerado!',
        syncSuccess 
          ? 'Artigos de teste marcados como salvos no aparelho (offline-ready) e sincronizados no Supabase!' 
          : 'Artigos de teste marcados como salvos no aparelho! Pronto para testar em modo 100% offline!',
        [{ text: 'Ótimo!', onPress: () => fetchSavedArticles() }]
      );
    } catch (e) {
      console.log('Erro ao gerar sandbox favoritos:', e);
      Alert.alert('Erro', 'Falha ao injetar itens de teste.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Busca os artigos favoritados com estratégia offline-first e resiliência online
   */
  const fetchSavedArticles = async () => {
    setLoading(true);
    try {
      // 1. Carrega imediatamente o cache local para visualização offline ultra rápida e sem rede
      const localSavedStr = await AsyncStorage.getItem('@offline_saved_articles');
      let localItems = localSavedStr ? JSON.parse(localSavedStr) : [];
      setSavedItems(localItems);
      
      // Se tivermos itens locais, desliga o loading para dar resposta visual instantânea (<50ms)
      if (localItems.length > 0) {
        setLoading(false);
      }

      // 2. Busca e sincroniza com os favoritos no Supabase em segundo plano se houver conexão
      const state = await NetInfo.fetch();
      if (state.isConnected) {
        const { data: userData } = await supabase.auth.getUser();
        if (userData?.user) {
          const { data: savedRefs, error } = await supabase
            .from('saved_articles')
            .select('article_id, article_type')
            .eq('user_id', userData.user.id);

          if (!error && savedRefs) {
            // Lê os caches gerais das tabelas clínicas
            const cacheResumus = JSON.parse(await AsyncStorage.getItem('@cache_resumus') || '[]');
            const cacheLaudus = JSON.parse(await AsyncStorage.getItem('@cache_laudus') || '[]');
            const cacheProtocolus = JSON.parse(await AsyncStorage.getItem('@cache_protocolus') || '[]');

            const allArticlesMap = {};
            [...cacheResumus, ...cacheLaudus, ...cacheProtocolus].forEach(item => {
              allArticlesMap[item.id] = item;
            });

            // Reconstrói a lista. Se o artigo ausentar no cache local, faremos busca no Supabase
            const compiledItems = [];

            for (const ref of savedRefs) {
              let articleDetail = allArticlesMap[ref.article_id];
              
              if (!articleDetail) {
                // Sincronia resiliente: se não estiver no cache local, busca no Supabase
                try {
                  const { data: fetched } = await supabase
                    .from(ref.article_type)
                    .select('*')
                    .eq('id', ref.article_id)
                    .maybeSingle();
                  
                  if (fetched) {
                    articleDetail = fetched;
                    // Adiciona no cache correspondente
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
                  console.log('Erro ao recuperar artigo individual do Supabase:', e);
                }
              }

              if (articleDetail) {
                compiledItems.push({
                  ...articleDetail,
                  type: ref.article_type,
                });
              }
            }

            setSavedItems(compiledItems);
            // Sincroniza o cache offline local com o Supabase
            await AsyncStorage.setItem('@offline_saved_articles', JSON.stringify(compiledItems));
          }
        }
      }
    } catch (e) {
      console.log('Erro ao carregar favoritos:', e);
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
        <Text style={styles.headerTitle}>Itens Salvos</Text>
        <View style={{ width: 40 }} />
      </View>

      {loading && savedItems.length === 0 ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#35B48B" />
          <Text style={styles.loaderText}>Buscando seus itens salvos...</Text>
        </View>
      ) : (
        <FlatList
          data={savedItems}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <ArticleCard 
              item={item} 
              onPress={() => navigation.navigate('ArticleDetail', { item, type: item.type })} 
            />
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyIcon}>★</Text>
              <Text style={styles.emptyTitle}>Sua biblioteca está vazia</Text>
              <Text style={styles.emptySub}>
                Favorite laudos, resumos e protocolos clínicos para visualizá-los offline a qualquer momento.
              </Text>
              <TouchableOpacity style={styles.sandboxBtn} onPress={generateSandboxData}>
                <Text style={styles.sandboxBtnText}>Gerar Favoritos de Teste (Sandbox)</Text>
              </TouchableOpacity>
            </View>
          }
        />
      )}

      <FloatingNavbar navigation={navigation} activeTab="saves" />
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
