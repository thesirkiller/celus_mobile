import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../theme/colors';

export default function MedUltraScreen({ navigation }) {
  const calculators = [
    { id: 'tirads', title: 'TI-RADS (Tireoide)', route: 'TiRadsCalculator' },
    { id: 'gestational', title: 'Idade Gestacional (MSD)', route: 'GestationalCalculator' },
    { id: 'iota', title: 'IOTA ADNEX', route: 'IotaCalculator' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>Voltar</Text></TouchableOpacity>
        <Text style={styles.title}>MedUltra</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.subtitle}>Selecione a ferramenta de cálculo:</Text>
        <View style={styles.grid}>
          {calculators.map(calc => (
            <TouchableOpacity 
              key={calc.id} 
              style={styles.card}
              onPress={() => navigation.navigate(calc.route)}
            >
              <Text style={styles.cardTitle}>{calc.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.inputBackground },
  header: { padding: 24, flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderBottomWidth: 1, borderColor: colors.alternate },
  back: { color: colors.primaryColor, fontWeight: 'bold', marginRight: 16 },
  title: { fontSize: 20, fontWeight: 'bold', color: colors.primaryText },
  scroll: { padding: 24 },
  subtitle: { fontSize: 16, color: colors.secondaryText, marginBottom: 16 },
  grid: { gap: 12 },
  card: { backgroundColor: '#FFF', padding: 20, borderRadius: 12, borderWidth: 1, borderColor: colors.alternate },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: colors.primaryText }
});