import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../services/supabase';
import { colors } from '../theme/colors';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      Alert.alert("Erro", error.message);
    } else {
      Alert.alert("Sucesso", "Instruções enviadas para seu e-mail.");
      navigation.goBack();
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Esqueci minha senha</Text>
        <Text style={styles.subtitle}>Enviaremos um link de recuperação para o seu e-mail.</Text>

        <CustomInput 
          label="E-mail" 
          placeholder="Seu e-mail cadastrado" 
          value={email} 
          onChangeText={setEmail} 
          autoCapitalize="none" 
          keyboardType="email-address" 
        />

        <CustomButton title="Enviar Instruções" onPress={handleReset} loading={loading} style={styles.button} />

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.primaryBackground },
  inner: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: colors.primaryText, marginBottom: 8 },
  subtitle: { fontSize: 16, color: colors.secondaryText, marginBottom: 32 },
  button: { marginTop: 16 },
  backButton: { marginTop: 24, alignItems: 'center' },
  backText: { color: colors.primaryColor, fontWeight: '600' }
});