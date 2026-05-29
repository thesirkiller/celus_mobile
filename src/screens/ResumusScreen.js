import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '../services/supabase';
import { colors } from '../theme/colors';
import ArticleCard from '../components/ArticleCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ResumusScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Categorias ChoiceChips idênticas ao fluxo do app original
  const categories = ['Todos', 'Ginecologia', 'Obstetrícia', 'Medicina Interna', 'Pediatria', 'Física'];

  useEffect(() => {
    fetchData();
  }, []);

  /**
   * Busca os resumos do Supabase (com estratégia offline primeiro)
   */
  const fetchData = async () => {
    setLoading(true);
    try {
      const cached = await AsyncStorage.getItem('@cache_resumus');
      if (cached) {
        setData(JSON.parse(cached));
      }

      const { data: serverData, error } = await supabase
        .from('resumus')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (!error && serverData) {
        setData(serverData);
        await AsyncStorage.setItem('@cache_resumus', JSON.stringify(serverData));
      }
    } catch (err) {
      console.log('Erro ao carregar dados do Resumus:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Filtra os resumos localmente com base na busca e na categoria selecionada (ChoiceChips)
   */
  const filteredData = data.filter(item => {
    const matchesSearch = 
      item.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content?.toLowerCase().includes(searchQuery.toLowerCase());
      
    // Verifica compatibilidade de categoria/especialidade
    const matchesCategory = 
      selectedCategory === 'Todos' || 
      item.category === selectedCategory || 
      (item.specialties && item.specialties.includes(selectedCategory)) ||
      (item.specialty && item.specialty === selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Premium 1:1 com Caixinha de Voltar */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtnWrapper} onPress={() => navigation.goBack()}>
          <Image 
            source={require('../../assets/arrow-left.png')} 
            style={styles.backIcon} 
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ResumUS</Text>
        <View style={{ width: 40 }} /> {/* Equilíbrio horizontal */}
      </View>

      {/* Barra de Pesquisa Premium */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar resumo..."
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

      {/* Listagem de Resumos */}
      {loading && data.length === 0 ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#35B48B" />
          <Text style={styles.loaderText}>Carregando biblioteca clínica...</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ArticleCard 
              item={item} 
              onPress={() => navigation.navigate('ArticleDetail', { item, type: 'resumus' })} 
            />
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyIcon}>🔍</Text>
              <Text style={styles.emptyText}>Nenhum resumo encontrado para os filtros selecionados.</Text>
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