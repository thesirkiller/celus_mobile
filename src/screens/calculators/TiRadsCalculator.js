import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/colors';
import CustomSelect from '../../components/CustomSelect';

const COMPOSITION_OPTIONS = [
  { label: 'Cístico ou quase completamente cístico (0 pts)', value: 'cistico', points: 0 },
  { label: 'Esponjiforme (0 pts)', value: 'esponjiforme', points: 0 },
  { label: 'Misto sólido-cístico (1 pt)', value: 'misto', points: 1 },
  { label: 'Sólido ou quase completamente sólido (2 pts)', value: 'solido', points: 2 },
];

const ECHOGENICITY_OPTIONS = [
  { label: 'Anacóico (0 pts)', value: 'anacoico', points: 0 },
  { label: 'Hiperecogênico ou isoecogênico (1 pt)', value: 'hiperecogenico', points: 1 },
  { label: 'Hipoecogênico (2 pts)', value: 'hipoecogenico', points: 2 },
  { label: 'Acentuadamente hipoecogênico (3 pts)', value: 'acentuado', points: 3 },
];

const SHAPE_OPTIONS = [
  { label: 'Mais largo que alto (0 pts)', value: 'largo', points: 0 },
  { label: 'Mais alto que largo (3 pts)', value: 'alto', points: 3 },
];

const MARGIN_OPTIONS = [
  { label: 'Lisa ou mal definida (0 pts)', value: 'lisa', points: 0 },
  { label: 'Lobulada ou irregular (2 pts)', value: 'lobulada', points: 2 },
  { label: 'Extensão extratireoidiana (3 pts)', value: 'extensao', points: 3 },
];

const FOCI_OPTIONS = [
  { label: 'Nenhum ou artefatos em cauda de cometa (0 pts)', value: 'nenhum', points: 0 },
  { label: 'Macrocalcificações (1 pt)', value: 'macro', points: 1 },
  { label: 'Calcificações periféricas em casca (2 pts)', value: 'perifericas', points: 2 },
  { label: 'Focos ecogênicos pontuados / microcalcificações (3 pts)', value: 'pontuados', points: 3 },
];

export default function TiRadsCalculator({ navigation }) {
  const [composition, setComposition] = useState('');
  const [echogenicity, setEchogenicity] = useState('');
  const [shape, setShape] = useState('');
  const [margin, setMargin] = useState('');
  const [foci, setFoci] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (composition && echogenicity && shape && margin && foci) {
      calculateScore();
    } else {
      setResult(null);
    }
  }, [composition, echogenicity, shape, margin, foci]);

  const calculateScore = () => {
    const p1 = COMPOSITION_OPTIONS.find(o => o.value === composition)?.points || 0;
    const p2 = ECHOGENICITY_OPTIONS.find(o => o.value === echogenicity)?.points || 0;
    const p3 = SHAPE_OPTIONS.find(o => o.value === shape)?.points || 0;
    const p4 = MARGIN_OPTIONS.find(o => o.value === margin)?.points || 0;
    const p5 = FOCI_OPTIONS.find(o => o.value === foci)?.points || 0;

    const totalPoints = p1 + p2 + p3 + p4 + p5;

    let category = '';
    let recommendation = '';
    let categoryColor = '#475467'; // Default gray

    if (totalPoints === 0) {
      category = 'TR1 (Benigno)';
      recommendation = 'Nenhuma PAAF necessária.';
      categoryColor = '#10B981'; // Green
    } else if (totalPoints <= 2) {
      category = 'TR2 (Não suspeito)';
      recommendation = 'Nenhuma PAAF necessária.';
      categoryColor = '#10B981'; // Green
    } else if (totalPoints === 3) {
      category = 'TR3 (Levemente suspeito)';
      recommendation = 'PAAF se >= 2.5 cm; seguimento se >= 1.5 cm.';
      categoryColor = '#3B82F6'; // Blue
    } else if (totalPoints <= 6) {
      category = 'TR4 (Moderadamente suspeito)';
      recommendation = 'PAAF se >= 1.5 cm; seguimento se >= 1.0 cm.';
      categoryColor = '#F59E0B'; // Orange
    } else {
      category = 'TR5 (Altamente suspeito)';
      recommendation = 'PAAF se >= 1.0 cm; seguimento se >= 0.5 cm.';
      categoryColor = '#EF4444'; // Red
    }

    setResult({
      points: totalPoints,
      category,
      recommendation,
      categoryColor
    });
  };

  const handleReset = () => {
    setComposition('');
    setEchogenicity('');
    setShape('');
    setMargin('');
    setFoci('');
    setResult(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Calculadora TI-RADS</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.instructions}>
          Selecione as características ecográficas do nódulo de tireoide para calcular a pontuação e classificação ACR TI-RADS.
        </Text>

        <CustomSelect 
          label="Composição"
          selectedValue={composition}
          onValueChange={setComposition}
          options={COMPOSITION_OPTIONS}
          placeholder="Selecione a composição..."
        />

        <CustomSelect 
          label="Ecogenicidade"
          selectedValue={echogenicity}
          onValueChange={setEchogenicity}
          options={ECHOGENICITY_OPTIONS}
          placeholder="Selecione a ecogenicidade..."
        />

        <CustomSelect 
          label="Formato"
          selectedValue={shape}
          onValueChange={setShape}
          options={SHAPE_OPTIONS}
          placeholder="Selecione o formato..."
        />

        <CustomSelect 
          label="Margem"
          selectedValue={margin}
          onValueChange={setMargin}
          options={MARGIN_OPTIONS}
          placeholder="Selecione a margem..."
        />

        <CustomSelect 
          label="Focos Ecogênicos"
          selectedValue={foci}
          onValueChange={setFoci}
          options={FOCI_OPTIONS}
          placeholder="Selecione os focos ecogênicos..."
        />

        {result && (
          <View style={styles.resultBox}>
            <Text style={styles.resultTitle}>Resultado ACR TI-RADS:</Text>
            
            <View style={[styles.badge, { backgroundColor: result.categoryColor }]}>
              <Text style={styles.badgeText}>{result.category}</Text>
            </View>

            <Text style={styles.resultPoints}>Pontuação: {result.points} pontos</Text>
            
            <View style={styles.divider} />
            
            <Text style={styles.recommendationTitle}>Recomendação Clínica:</Text>
            <Text style={styles.recommendationText}>{result.recommendation}</Text>

            <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
              <Text style={styles.resetButtonText}>Limpar Tudo</Text>
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
