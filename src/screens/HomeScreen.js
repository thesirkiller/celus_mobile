import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../theme/colors';
import { supabase } from '../services/supabase';

export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigation.replace('Login'); 
  };

  const modules = [
    { id: 'laudus', title: 'LaudUS', route: 'Laudus', desc: 'Modelos de laudos' },
    { id: 'protocolus', title: 'ProtocolUS', route: 'Protocolus', desc: 'Protocolos atualizados' },
    { id: 'resumus', title: 'ResumUS', route: 'Resumus', desc: 'Resumos práticos' },
    { id: 'medultra', title: 'MedUltra', route: 'MedUltra', desc: 'Ferramentas e cálculos' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Olá, Doutor(a)</Text>
          <Text style={styles.subtitle}>O que você deseja acessar hoje?</Text>
        </View>

        <View style={styles.grid}>
          {modules.map((mod) => (
            <TouchableOpacity 
              key={mod.id} 
              style={styles.moduleCard}
              onPress={() => navigation.navigate(mod.route)}
            >
              <Text style={styles.moduleTitle}>{mod.title}</Text>
              <Text style={styles.moduleDesc}>{mod.desc}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.inputBackground },
  scroll: { padding: 24 },
  header: { marginBottom: 32 },
  greeting: { fontSize: 28, fontWeight: 'bold', color: colors.primaryText },
  subtitle: { fontSize: 16, color: colors.secondaryText, marginTop: 4 },
  grid: { gap: 16 },
  moduleCard: {
    backgroundColor: '#FFF',
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.alternate,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  moduleTitle: { fontSize: 20, fontWeight: 'bold', color: colors.primaryColor, marginBottom: 8 },
  moduleDesc: { fontSize: 14, color: colors.secondaryText },
  logoutButton: { marginTop: 48, alignItems: 'center', padding: 16 },
  logoutText: { color: colors.error, fontWeight: 'bold', fontSize: 16 },
});