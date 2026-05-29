import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '../services/supabase';
import { colors } from '../theme/colors';
import MedUltraCard from '../components/MedUltraCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const localMedUltraItems = [
  {
    id: 'sg',
    title: 'Saco Gestacional',
    specialty: 'Fetal',
    tags: ['Primeiro Trimestre', 'Fetal'],
    content: 'Tabela de referência e calculadora interativa para Diâmetro Médio do Saco Gestacional (DMSG) e estimativa de idade gestacional.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'vv',
    title: 'Vesícula Vitelínica',
    specialty: 'Fetal',
    tags: ['Primeiro Trimestre', 'Fetal'],
    content: 'Normalidade do diâmetro da vesícula vitelínica em relação à idade gestacional e avaliação de prognóstico de perdas.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'ccn',
    title: 'Comprimento Cabeça-Nádega (CCN)',
    specialty: 'Fetal',
    tags: ['Primeiro Trimestre', 'Fetal'],
    content: 'Tabela de datação por CCN e calculadora com verificações críticas de viabilidade do embrião.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'fce',
    title: 'Frequência Cardíaca (FCE)',
    specialty: 'Fetal',
    tags: ['Primeiro Trimestre', 'Fetal'],
    content: 'Curva de percentis normativos de FCE por CCN e diagnóstico imediato de bradicardia e taquicardia fetal.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'tn',
    title: 'Translucência Nucal (TN)',
    specialty: 'Fetal',
    tags: ['Primeiro Trimestre', 'Fetal'],
    content: 'Avaliação da espessura do espaço anecogênico da TN versus o CCN para rastreio de aneuploidias.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'dbp_cc',
    title: 'Diâmetro Biparietal (DBP) e CC',
    specialty: 'Fetal',
    tags: ['Segundo e Terceiro Trimestres', 'Fetal'],
    content: 'Datação gestacional e desvio padrão clínico por medição de Diâmetro Biparietal no plano do tálamo.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'ca',
    title: 'Circunferência Abdominal (CA)',
    specialty: 'Fetal',
    tags: ['Segundo e Terceiro Trimestres', 'Fetal'],
    content: 'Tabela de datação e avaliação nutricional fetal baseada na Circunferência Abdominal.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'cf',
    title: 'Comprimento do Fêmur (CF)',
    specialty: 'Fetal',
    tags: ['Segundo e Terceiro Trimestres', 'Fetal'],
    content: 'Datação ultrassonográfica baseada na diáfise femoral para avaliação de displasias esqueléticas.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'ila',
    title: 'Líquido Amniótico (ILA)',
    specialty: 'Fetal',
    tags: ['Segundo e Terceiro Trimestres', 'Fetal'],
    content: 'Avaliação do Índice de Líquido Amniótico (ILA) pelos 4 quadrantes uterinos na curva Moore.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'peso_fetal',
    title: 'Peso Fetal',
    specialty: 'Fetal',
    tags: ['Segundo e Terceiro Trimestres', 'Fetal'],
    content: 'Estimativa de peso fetal por biometria Hadlock e percentis de crescimento intrauterino.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'acm',
    title: 'Artéria Cerebral Média (ACM)',
    specialty: 'Fetal',
    tags: ['Segundo e Terceiro Trimestres', 'Fetal'],
    content: 'Doppler de ACM, IP e relação AU/ACM na curva de normalidade para rastreio de centralização.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'au',
    title: 'Artéria Umbilical (AU)',
    specialty: 'Fetal',
    tags: ['Segundo e Terceiro Trimestres', 'Fetal'],
    content: 'Doppler de Artéria Umbilical (AU) e análise de resistência placentária na curva de normalidade.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'umero',
    title: 'Comprimento do Úmero',
    specialty: 'Fetal',
    tags: ['Ossos Longos', 'Fetal'],
    content: 'Percentis de normalidade para o comprimento do úmero fetal por idade gestacional.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'radio',
    title: 'Comprimento do Rádio',
    specialty: 'Fetal',
    tags: ['Ossos Longos', 'Fetal'],
    content: 'Percentis de comprimento do rádio fetal por semana de idade gestacional.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'ulna',
    title: 'Comprimento da Ulna',
    specialty: 'Fetal',
    tags: ['Ossos Longos', 'Fetal'],
    content: 'Curvas e percentis normativos do comprimento da ulna fetal por semana.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'tibia',
    title: 'Comprimento da Tíbia',
    specialty: 'Fetal',
    tags: ['Ossos Longos', 'Fetal'],
    content: 'Percentis de normalidade para o comprimento da tíbia fetal por semana.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'fibula',
    title: 'Comprimento da Fíbula',
    specialty: 'Fetal',
    tags: ['Ossos Longos', 'Fetal'],
    content: 'Curvas de normalidade de comprimento da fíbula fetal para avaliação esquelética.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'vl',
    title: 'Ventrículos Laterais (VL)',
    specialty: 'Fetal',
    tags: ['Cabeça e Pescoço', 'Fetal'],
    content: 'Diâmetro do átrio ventricular lateral para rastreamento e diagnóstico de ventriculomegalia.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'dtc',
    title: 'Diâmetro Transcerebelar (DTC)',
    specialty: 'Fetal',
    tags: ['Cabeça e Pescoço', 'Fetal'],
    content: 'Datação gestacional e curvas normativas do Diâmetro Transcerebelar (DTC).',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'db',
    title: 'Distância Binocular (DB)',
    specialty: 'Fetal',
    tags: ['Cabeça e Pescoço', 'Fetal'],
    content: 'Curva de crescimento e estimativa de idade gestacional por medição da distância binocular.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'on',
    title: 'Osso Nasal (ON)',
    specialty: 'Fetal',
    tags: ['Ossos Longos', 'Fetal'],
    content: 'Percentis de normalidade para o comprimento do osso nasal fetal por semana de gestação.',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  },
  {
    id: 'pn',
    title: 'Prega Nucal (PN)',
    specialty: 'Fetal',
    tags: ['Cabeça e Pescoço', 'Fetal'],
    content: 'Valores normativos de espessura da prega nucal no segundo trimestre (16 a 24 semanas).',
    created_at: '2026-05-25T00:00:00.000Z',
    images: [require('../../assets/medultra_thumbnail.png')]
  }
];

export default function MedUltraScreen({ navigation }) {
  const [data, setData] = useState(localMedUltraItems);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Categorias de referências de ultrassom no app legado
  const categories = ['Todos', 'Primeiro Trimestre', 'Segundo e Terceiro Trimestres', 'Pediatria', 'Cabeça e Pescoço', 'Adulto', 'Fetal', 'Ossos Longos'];

  useEffect(() => {
    fetchData();
  }, []);

  /**
   * Busca as referências do MedUltra com estratégia offline-first
   */
  const fetchData = async () => {
    setLoading(true);
    try {
      const cached = await AsyncStorage.getItem('@cache_medultra');
      let combinedData = [...localMedUltraItems];
      
      if (cached) {
        const parsedCached = JSON.parse(cached);
        const cachedLaudus = parsedCached.filter(c => !localMedUltraItems.some(l => l.id === c.id));
        combinedData = [...localMedUltraItems, ...cachedLaudus];
        setData(combinedData);
      } else {
        setData(combinedData);
      }

      // MedUltra busca de laudus/medidas do Supabase
      const { data: serverData, error } = await supabase
        .from('laudus')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (!error && serverData) {
        const serverLaudus = serverData.filter(s => !localMedUltraItems.some(l => l.id === s.id));
        const finalData = [...localMedUltraItems, ...serverLaudus];
        setData(finalData);
        await AsyncStorage.setItem('@cache_medultra', JSON.stringify(finalData));
      }
    } catch (err) {
      console.log('Erro ao carregar dados do MedUltra:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Filtra as referências
   */
  const filteredData = data.filter(item => {
    const matchesSearch = 
      item.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.content?.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = 
      selectedCategory === 'Todos' || 
      item.specialty === selectedCategory ||
      (item.tags && item.tags.some(tag => tag.toLowerCase() === selectedCategory.toLowerCase()));

    return matchesSearch && matchesCategory;
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Premium 1:1 idêntico a ResumUS, ProtocolUS e LaudUS */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtnWrapper} onPress={() => navigation.goBack()}>
          <Image 
            source={require('../../assets/arrow-left.png')} 
            style={styles.backIcon} 
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>MedULTRA</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Barra de Pesquisa */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar referências..."
          placeholderTextColor="#9CA3AF"
          value={searchQuery}
          onChangeText={setSearchQuery}
          clearButtonMode="while-editing"
        />
      </View>

      {/* ChoiceChips (Filtro por Categorias Horizontal) */}
      <View style={styles.chipsContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipsScroll}
        >
          {categories.map(cat => {
            const isSelected = selectedCategory === cat;
            return (
              <TouchableOpacity
                key={cat}
                style={[styles.chip, isSelected && styles.chipSelected]}
                onPress={() => setSelectedCategory(cat)}
                activeOpacity={0.8}
              >
                <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Listagem do MedUltra */}
      {loading && data.length === 0 ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#35B48B" />
          <Text style={styles.loaderText}>Carregando tabelas de medidas...</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <MedUltraCard 
              item={item} 
              onPress={() => {
                const targetCalculators = [
                  'sg', 'vv', 'ccn', 'fce', 'tn', 'dbp_cc', 'ca', 'cf', 
                  'ila', 'peso_fetal', 'acm', 'au', 'umero', 'radio', 
                  'ulna', 'tibia', 'fibula', 'vl', 'dtc'
                ];
                if (targetCalculators.includes(item.id)) {
                  navigation.navigate('MedUltraOptions', { topicId: item.id });
                } else {
                  navigation.navigate('ArticleDetail', { item, type: 'laudus' });
                }
              }} 
            />
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyIcon}>🔍</Text>
              <Text style={styles.emptyText}>Nenhuma referência encontrada para os filtros selecionados.</Text>
            </View>
          }
        />
      )}
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
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    width: '100%',
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#1F2937',
  },
  chipsContainer: {
    height: 48,
    marginBottom: 8,
  },
  chipsScroll: {
    paddingHorizontal: 16,
    gap: 8,
    alignItems: 'center',
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  chipSelected: {
    backgroundColor: '#35B48B',
    borderColor: '#35B48B',
  },
  chipText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 13,
    color: '#4B5563',
  },
  chipTextSelected: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  list: {
    padding: 16,
    paddingBottom: 40,
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
    paddingVertical: 60,
    paddingHorizontal: 32,
  },
  emptyIcon: {
    fontSize: 32,
    color: '#9CA3AF',
    marginBottom: 12,
  },
  emptyText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
});