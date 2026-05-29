import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { colors } from '../../theme/colors';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

export default function FetalCalculator({ navigation }) {
  const [bpd, setBpd] = useState('');
  const [hc, setHc] = useState('');
  const [ac, setAc] = useState('');
  const [fl, setFl] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const acValue = parseFloat(ac);
    const flValue = parseFloat(fl);
    const bpdValue = parseFloat(bpd) || 0;
    
    // CA e CF são obrigatórios de acordo com o padrão do app legado
    if (isNaN(acValue) || acValue <= 0 || isNaN(flValue) || flValue <= 0) {
      Alert.alert(
        'Campos Obrigatórios',
        'Circunferência Abdominal (CA) e Comprimento do Fêmur (CF) são obrigatórios para estimar o peso.'
      );
      return;
    }

    // Unidade de medida fornecida em mm, convertendo para cm
    const acCm = acValue / 10;
    const flCm = flValue / 10;
    const bpdCm = bpdValue / 10;

    // Fórmula de Hadlock clássica (3 parâmetros se DBP estiver preenchido, senão simplifica)
    let log10EFW;
    let formulaName = '';

    if (bpdCm > 0) {
      // Hadlock (BPD, AC, FL) - Fórmula oficial do aplicativo legado:
      // Log10 EFW = 1.335 + 0.0316*BPD + 0.0457*AC + 0.1623*FL - 0.0034*AC*FL
      log10EFW = 1.335 + (0.0316 * bpdCm) + (0.0457 * acCm) + (0.1623 * flCm) - (0.0034 * acCm * flCm);
      formulaName = 'Hadlock (DBP, CA, CF)';
    } else {
      // Hadlock (AC, FL) - Fórmula de 2 parâmetros:
      // Log10 EFW = 1.30 + 0.0753*AC + 0.161*FL - 0.0034*AC*FL
      log10EFW = 1.30 + (0.0753 * acCm) + (0.161 * flCm) - (0.0034 * acCm * flCm);
      formulaName = 'Hadlock (CA, CF)';
    }

    const efw = Math.pow(10, log10EFW);

    setResult({
      efw: Math.round(efw),
      formulaName,
      acCm,
      flCm,
      bpdCm
    });
  };

  const handleReset = () => {
    setBpd('');
    setHc('');
    setAc('');
    setFl('');
    setResult(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Premium 1:1 Legado */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtnWrapper} onPress={() => navigation.goBack()}>
          <Image 
            source={require('../../../assets/arrow-left.png')} 
            style={styles.backIcon} 
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Calculadora Fetal</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.instructions}>
          Insira os parâmetros de biometria fetal obtidos na ultrassonografia (em milímetros) para calcular a Estimativa de Peso Fetal (EFW) via fórmula de Hadlock.
        </Text>

        <View style={styles.form}>
          <Text style={styles.formTitle}>Biometria Fetal (mm)</Text>
          
          <CustomInput 
            label="DBP (Diâmetro Biparietal)"
            placeholder="Ex: 85"
            value={bpd}
            onChangeText={setBpd}
            keyboardType="numeric"
          />

          <CustomInput 
            label="CC (Circunferência Cefálica) - Opcional"
            placeholder="Ex: 310"
            value={hc}
            onChangeText={setHc}
            keyboardType="numeric"
          />

          <CustomInput 
            label="CA (Circunferência Abdominal) *"
            placeholder="Ex: 300"
            value={ac}
            onChangeText={setAc}
            keyboardType="numeric"
          />

          <CustomInput 
            label="CF (Comprimento do Fêmur) *"
            placeholder="Ex: 65"
            value={fl}
            onChangeText={setFl}
            keyboardType="numeric"
          />

          <CustomButton 
            title="Calcular Peso Fetal" 
            onPress={calculate}
            style={styles.calcBtn}
          />
        </View>

        {result && (
          <View style={styles.resultBox}>
            <Text style={styles.resultLabel}>Estimativa de Peso Fetal (EFW)</Text>
            <Text style={styles.resultValue}>{result.efw} <Text style={styles.resultUnit}>gramas</Text></Text>
            
            <View style={styles.divider} />
            
            <Text style={styles.formulaTitle}>Método Aplicado:</Text>
            <Text style={styles.formulaText}>{result.formulaName}</Text>
            
            <View style={styles.detailRows}>
              {result.bpdCm > 0 && (
                <Text style={styles.detailText}>• DBP: {(result.bpdCm * 10).toFixed(1)} mm ({(result.bpdCm).toFixed(2)} cm)</Text>
              )}
              <Text style={styles.detailText}>• CA: {(result.acCm * 10).toFixed(1)} mm ({(result.acCm).toFixed(2)} cm)</Text>
              <Text style={styles.detailText}>• CF: {(result.flCm * 10).toFixed(1)} mm ({(result.flCm).toFixed(2)} cm)</Text>
            </View>

            <TouchableOpacity style={styles.resetButton} onPress={handleReset} activeOpacity={0.7}>
              <Text style={styles.resetButtonText}>Limpar Tudo</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
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
  scroll: {
    padding: 20,
    paddingBottom: 40,
  },
  instructions: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 24,
  },
  form: {
    width: '100%',
  },
  formTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 18,
    color: '#1F2937',
    marginBottom: 16,
  },
  calcBtn: {
    marginTop: 10,
    backgroundColor: '#35B48B',
  },
  resultBox: {
    marginTop: 32,
    padding: 20,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
  },
  resultLabel: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 8,
  },
  resultValue: {
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: '800',
    color: '#35B48B',
  },
  resultUnit: {
    fontSize: 18,
    fontWeight: '500',
    color: '#4B5563',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 16,
  },
  formulaTitle: {
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: '600',
    color: '#4B5563',
    marginBottom: 4,
    alignSelf: 'flex-start',
  },
  formulaText: {
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '700',
    color: '#1F2937',
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  detailRows: {
    width: '100%',
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  detailText: {
    fontFamily: 'Inter',
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 18,
    marginBottom: 4,
  },
  resetButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  resetButtonText: {
    fontFamily: 'Inter',
    color: '#D92D20',
    fontWeight: '700',
    fontSize: 14,
  },
});
