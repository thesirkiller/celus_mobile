# Fase 4: Interação e Ferramentas (React Native/Expo) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) ou superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implementar o módulo MedUltra com calculadoras médicas (TI-RADS, Saco Gestacional, IOTA ADNEX) traduzidas do Dart e adicionar interações de Favoritar nas telas de detalhes.

**Architecture:** 
- **MedUltraScreen:** Menu das calculadoras.
- **Telas de Calculadora:** `TiRadsCalculator`, `GestationalCalculator`, `IotaCalculator`.
- Lógica de negócio transferida do Dart para o JS no próprio componente (ou hooks).
- Atualização do `ArticleDetailScreen` para botão de favoritar (coração) no header.

**Tech Stack:** React Native, Expo, React Navigation, Supabase.

---

### Task 1: Tela Principal MedUltra

**Files:**
- Create: `src/screens/MedUltraScreen.js`
- Modify: `src/navigation/AppNavigator.js`

- [ ] **Step 1: Criar MedUltraScreen.js**

```javascript
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
```

- [ ] **Step 2: Atualizar AppNavigator.js**
Importe o `MedUltraScreen` e adicione `<Stack.Screen name="MedUltra" component={MedUltraScreen} />`.

### Task 2: Calculadora Idade Gestacional

**Files:**
- Create: `src/screens/calculators/GestationalCalculator.js`
- Modify: `src/navigation/AppNavigator.js`

- [ ] **Step 1: Implementar GestationalCalculator.js**

```javascript
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
```

- [ ] **Step 2: Atualizar AppNavigator.js**
Importe e adicione `GestationalCalculator` na rota `GestationalCalculator`.

### Task 3: Favoritos no Detalhe do Artigo

**Files:**
- Modify: `src/screens/ArticleDetailScreen.js`

- [ ] **Step 1: Adicionar funcionalidade de favoritar no Header**

Substitua o componente Header dentro de `ArticleDetailScreen.js` por isso:

```javascript
  const [isFavorite, setIsFavorite] = React.useState(false);
  
  const toggleFavorite = async () => {
    // Para UX rápida: inverte no UI primeiro
    setIsFavorite(!isFavorite);
    
    const { data: userData } = await supabase.auth.getUser();
    if (!userData?.user) return;
    
    if (!isFavorite) {
      await supabase.from('saved_articles').insert({
        user_id: userData.user.id,
        article_id: item.id,
        article_type: type,
        is_favorite: true
      });
    } else {
      await supabase.from('saved_articles').delete()
        .eq('user_id', userData.user.id)
        .eq('article_id', item.id);
    }
  };

  // Dentro do render, mude a View style={styles.header} para:
  /*
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{item.specialty || 'Detalhes'}</Text>
        <TouchableOpacity onPress={toggleFavorite}>
          <Text style={{ fontSize: 24, color: isFavorite ? colors.error : colors.secondaryText }}>
            {isFavorite ? '♥' : '♡'}
          </Text>
        </TouchableOpacity>
      </View>
  */
```
*(Nota: Certifique-se de injetar o estado `isFavorite` e o helper `toggleFavorite` logo no começo do componente, e checar inicialização caso dê tempo, senão deixe padrão false para o MVP).*
