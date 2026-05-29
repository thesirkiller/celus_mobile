import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';

export default function CalculusScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Categorias de calculadoras no app anterior
  const categories = ['Todos', 'Primeiro Trimestre', 'Tireoide', 'Ovários', 'Crescimento e bem-estar'];

  // Lista de calculadoras mapeada a partir do legado
  const calculators = [
    {
      id: 'gestational_sac',
      title: 'Saco Gestacional (SG)',
      desc: 'Calculadora fetal para estimativa de idade gestacional através da medida do saco gestacional no primeiro trimestre.',
      category: 'Primeiro Trimestre',
      route: 'GestationalCalculator',
      tags: ['Primeiro Trimestre', 'Crescimento e bem-estar']
    },
    {
      id: 'acr_ti_rads',
      title: 'ACR TI-RADS',
      desc: 'Sistema de classificação de risco para nódulos tireoidianos baseado em características ecográficas.',
      category: 'Tireoide',
      route: 'TiRadsCalculator',
      tags: ['Tireoide']
    },
    {
      id: 'iota_adnex',
      title: 'IOTA ADNEX',
      desc: 'Modelo preditivo para diferenciar tumores ovarianos benignos e malignos com base em critérios morfológicos e Doppler.',
      category: 'Ovários',
      route: 'IotaCalculator',
      tags: ['Ovários']
    },
    {
      id: 'fetal_calc',
      title: 'Calculadora Fetal (Hadlock)',
      desc: 'Estimativa de peso fetal (EFW) baseada em parâmetros biométricos (DBP, CC, CA, CF) utilizando a fórmula oficial de Hadlock.',
      category: 'Crescimento e bem-estar',
      route: 'FetalCalculator',
      tags: ['Crescimento e bem-estar', 'Fetal']
    }
  ];

  // Filtra as calculadoras
  const filteredCalculators = calculators.filter(item => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = 
      selectedCategory === 'Todos' || 
      item.category === selectedCategory ||
      item.tags.includes(selectedCategory);

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
        <Text style={styles.headerTitle}>CalculUS</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Barra de Pesquisa */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar calculadora..."
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

      {/* Listagem de Calculadoras */}
      <FlatList
        contentContainerStyle={styles.list}
        data={filteredCalculators}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate(item.route)}
            activeOpacity={0.9}
          >
            <View style={styles.cardHeader}>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>{item.category.toUpperCase()}</Text>
              </View>
              <Text style={styles.arrowIcon}>↗</Text>
            </View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.desc}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🔍</Text>
            <Text style={styles.emptyText}>Nenhuma calculadora encontrada para os filtros selecionados.</Text>
          </View>
        }
      />
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
    gap: 12,
    paddingBottom: 40,
  },
  card: {
    width: '100%',
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  categoryText: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 9,
    color: '#35B48B',
    letterSpacing: 0.5,
  },
  arrowIcon: {
    fontSize: 18,
    color: '#35B48B',
    fontWeight: '600',
  },
  cardTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 18,
    color: '#1F2937',
    marginBottom: 6,
  },
  cardDesc: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    color: '#6B7280',
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
