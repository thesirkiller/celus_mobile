import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/colors';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

export default function IotaCalculator({ navigation }) {
  const [age, setAge] = useState('');
  const [maxDiameter, setMaxDiameter] = useState('');
  const [maxDiameterSolid, setMaxDiameterSolid] = useState('');
  const [ascites, setAscites] = useState(false);
  const [papillary, setPapillary] = useState(false);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const ageVal = parseFloat(age);
    const maxDiamVal = parseFloat(maxDiameter);
    const maxDiamSolidVal = parseFloat(maxDiameterSolid);

    if (isNaN(ageVal) || ageVal <= 0) {
      alert('Por favor, informe uma idade válida.');
      return;
    }
    if (isNaN(maxDiamVal) || maxDiamVal <= 0) {
      alert('Por favor, informe o maior diâmetro da lesão.');
      return;
    }
    if (isNaN(maxDiamSolidVal) || maxDiamSolidVal < 0) {
      alert('Por favor, informe o maior diâmetro da parte sólida (ou 0 se não houver).');
      return;
    }

    let score = 0;
    if (ageVal > 50) score += 10;
    if (maxDiamVal > 50) score += 15;
    if (maxDiamSolidVal > 0) score += 20;
    if (ascites) score += 30;
    if (papillary) score += 15;

    const riskLevel = score > 40 ? 'Alto Risco' : 'Baixo Risco';
    const recommendation = score > 40
      ? 'Encaminhar para centro especializado em oncologia ginecológica.'
      : 'Seguimento conservador ou cirurgia benigna pode ser considerada.';
    const resultColor = score > 40 ? '#EF4444' : '#10B981';

    setResult({
      score,
      riskLevel,
      recommendation,
      resultColor
    });
  };

  const handleReset = () => {
    setAge('');
    setMaxDiameter('');
    setMaxDiameterSolid('');
    setAscites(false);
    setPapillary(false);
    setResult(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>IOTA ADNEX</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.instructions}>
          Modelo preditivo IOTA ADNEX simplificado para estimar o risco de malignidade em massas anexiais (ovário).
        </Text>

        <CustomInput 
          label="Idade da Paciente (anos)" 
          value={age} 
          onChangeText={setAge} 
          keyboardType="numeric"
          placeholder="Ex: 45"
        />

        <CustomInput 
          label="Maior Diâmetro da Lesão (mm)" 
          value={maxDiameter} 
          onChangeText={setMaxDiameter} 
          keyboardType="numeric"
          placeholder="Ex: 60"
        />

        <CustomInput 
          label="Maior Diâmetro da Parte Sólida (mm)" 
          value={maxDiameterSolid} 
          onChangeText={setMaxDiameterSolid} 
          keyboardType="numeric"
          placeholder="Ex: 12 (digite 0 se não houver)"
        />

        {/* Toggles Customizados */}
        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>Presença de Ascite?</Text>
          <View style={styles.optionsRow}>
            <TouchableOpacity 
              style={[styles.optionBtn, ascites && styles.optionBtnActive]} 
              onPress={() => setAscites(true)}
            >
              <Text style={[styles.optionBtnText, ascites && styles.optionBtnTextActive]}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.optionBtn, !ascites && styles.optionBtnActive]} 
              onPress={() => setAscites(false)}
            >
              <Text style={[styles.optionBtnText, !ascites && styles.optionBtnTextActive]}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>Projeções Papilares?</Text>
          <View style={styles.optionsRow}>
            <TouchableOpacity 
              style={[styles.optionBtn, papillary && styles.optionBtnActive]} 
              onPress={() => setPapillary(true)}
            >
              <Text style={[styles.optionBtnText, papillary && styles.optionBtnTextActive]}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.optionBtn, !papillary && styles.optionBtnActive]} 
              onPress={() => setPapillary(false)}
            >
              <Text style={[styles.optionBtnText, !papillary && styles.optionBtnTextActive]}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>

        <CustomButton title="Calcular Risco" onPress={calculate} style={styles.calcBtn} />

        {result && (
          <View style={styles.resultBox}>
            <Text style={styles.resultTitle}>Classificação de Risco:</Text>
            
            <View style={[styles.badge, { backgroundColor: result.resultColor }]}>
              <Text style={styles.badgeText}>{result.riskLevel}</Text>
            </View>

            <Text style={styles.resultPoints}>Pontuação Calculada: {result.score} pts</Text>
            
            <View style={styles.divider} />
            
            <Text style={styles.recommendationTitle}>Conduta Recomendada:</Text>
            <Text style={styles.recommendationText}>{result.recommendation}</Text>

            <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
              <Text style={styles.resetButtonText}>Limpar Formuário</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.primaryBackground },
  header: { padding: 24, flexDirection: 'row', alignItems: 'center', backgroundColor: colors.secondaryBackground, borderBottomWidth: 1, borderColor: colors.alternate },
  back: { color: colors.primaryColor, fontWeight: 'bold', marginRight: 16, fontSize: 16 },
  title: { fontSize: 20, fontWeight: 'bold', color: colors.primaryText },
  scroll: { padding: 24, paddingBottom: 48 },
  instructions: { fontSize: 14, color: colors.secondaryText, marginBottom: 24, lineHeight: 20 },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: colors.secondaryBackground,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.alternate,
  },
  toggleLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primaryText,
  },
  optionsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  optionBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.alternate,
    backgroundColor: colors.primaryBackground,
  },
  optionBtnActive: {
    backgroundColor: colors.primaryColor,
    borderColor: colors.primaryColor,
  },
  optionBtnText: {
    color: colors.secondaryText,
    fontWeight: '600',
  },
  optionBtnTextActive: {
    color: '#FFF',
  },
  calcBtn: {
    marginTop: 16,
  },
  resultBox: { 
    marginTop: 24, 
    padding: 24, 
    backgroundColor: colors.secondaryBackground, 
    borderRadius: 16, 
    borderWidth: 1, 
    borderColor: colors.alternate,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  resultTitle: { fontSize: 14, fontWeight: '600', color: colors.secondaryText, marginBottom: 12 },
  badge: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginBottom: 12,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultPoints: { fontSize: 18, fontWeight: 'bold', color: colors.primaryText },
  divider: { width: '100%', height: 1, backgroundColor: colors.alternate, marginVertical: 16 },
  recommendationTitle: { fontSize: 14, fontWeight: '600', color: colors.secondaryText, marginBottom: 8 },
  recommendationText: { fontSize: 16, color: colors.primaryText, textAlign: 'center', fontWeight: '500', lineHeight: 22 },
  resetButton: {
    marginTop: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  resetButtonText: {
    color: colors.primaryColor,
    fontWeight: 'bold',
    fontSize: 14,
  }
});
