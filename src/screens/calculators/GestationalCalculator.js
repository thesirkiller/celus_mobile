import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/colors';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

export default function GestationalCalculator({ navigation }) {
  const [msd, setMsd] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const msdValue = parseFloat(msd);
    if (isNaN(msdValue) || msdValue <= 0) {
      setResult({ error: 'Diâmetro inválido' });
      return;
    }
    const totalDays = Math.round(msdValue + 30);
    const weeks = Math.floor(totalDays / 7);
    const days = totalDays % 7;
    setResult({ weeks, days, totalDays });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>Voltar</Text></TouchableOpacity>
        <Text style={styles.title}>Idade Gestacional</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.instructions}>Fórmula de Hellman: IG (dias) = MSD (mm) + 30</Text>
        <CustomInput 
          label="Saco Gestacional (MSD) em mm" 
          value={msd} 
          onChangeText={setMsd} 
          keyboardType="numeric" 
        />
        <CustomButton title="Calcular" onPress={calculate} />

        {result && (
          <View style={styles.resultBox}>
            {result.error ? (
              <Text style={styles.errorText}>{result.error}</Text>
            ) : (
              <>
                <Text style={styles.resultTitle}>Idade Gestacional:</Text>
                <Text style={styles.resultValue}>{result.weeks} semanas e {result.days} dias</Text>
                <Text style={styles.resultSub}>Total: {result.totalDays} dias</Text>
              </>
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.primaryBackground },
  header: { padding: 24, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.alternate },
  back: { color: colors.primaryColor, fontWeight: 'bold', marginRight: 16 },
  title: { fontSize: 20, fontWeight: 'bold', color: colors.primaryText },
  content: { padding: 24 },
  instructions: { fontSize: 14, color: colors.secondaryText, marginBottom: 24 },
  resultBox: { marginTop: 32, padding: 24, backgroundColor: colors.inputBackground, borderRadius: 12, alignItems: 'center' },
  errorText: { color: colors.error, fontWeight: 'bold', fontSize: 16 },
  resultTitle: { fontSize: 16, color: colors.secondaryText, marginBottom: 8 },
  resultValue: { fontSize: 24, fontWeight: 'bold', color: colors.primaryColor },
  resultSub: { fontSize: 14, color: colors.secondaryText, marginTop: 8 }
});
