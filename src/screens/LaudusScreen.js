import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { supabase } from '../services/supabase';
import { colors } from '../theme/colors';
import ArticleCard from '../components/ArticleCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LaudusScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    // Estratégia Offline: Tentar cache primeiro
    const cached = await AsyncStorage.getItem('@cache_laudus');
    if (cached) setData(JSON.parse(cached));

    const { data: serverData, error } = await supabase
      .from('laudus')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false });

    if (!error && serverData) {
      setData(serverData);
      await AsyncStorage.setItem('@cache_laudus', JSON.stringify(serverData));
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>Voltar</Text></TouchableOpacity>
        <Text style={styles.title}>LaudUS</Text>
      </View>
      {loading && data.length === 0 ? (
        <ActivityIndicator style={{ marginTop: 50 }} color={colors.primaryColor} />
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ArticleCard 
              item={item} 
              onPress={() => navigation.navigate('ArticleDetail', { item, type: 'laudus' })} 
            />
          )}
          ListEmptyComponent={<Text style={styles.empty}>Nenhum conteúdo encontrado.</Text>}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.inputBackground },
  header: { padding: 24, flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderBottomWidth: 1, borderColor: colors.alternate },
  back: { color: colors.primaryColor, fontWeight: 'bold', marginRight: 16 },
  title: { fontSize: 20, fontWeight: 'bold', color: colors.primaryText },
  list: { padding: 16 },
  empty: { textAlign: 'center', color: colors.secondaryText, marginTop: 24 }
});