import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../services/supabase';
import { colors } from '../theme/colors';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function RegisterScreen({ navigation }) {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', cpf: '', nationality: '', phone: '', country_of_operation: '', education_level: ''
  });
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    // Passo 1: Criar Auth User
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (authError) {
      Alert.alert("Erro", authError.message);
      setLoading(false);
      return;
    }

    // O Perfil é criado via Trigger no DB, a gente poderia atualizar aqui ou esperar o trigger e dar update
    if (authData.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          name: formData.name,
          cpf: formData.cpf,
          nationality: formData.nationality,
          phone: formData.phone,
          country_of_operation: formData.country_of_operation,
          education_level: formData.education_level,
        })
        .eq('id', authData.user.id);

      if (profileError) {
        console.error(profileError);
      } else {
        Alert.alert("Sucesso", "Conta criada com sucesso!");
        navigation.navigate('Login');
      }
    }
    setLoading(false);
  };

  const updateForm = (key, value) => setFormData(prev => ({ ...prev, [key]: value }));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Criar Conta</Text>
        <Text style={styles.subtitle}>Preencha seus dados para começar</Text>

        <CustomInput label="Nome Completo" value={formData.name} onChangeText={(v) => updateForm('name', v)} />
        <CustomInput label="E-mail" value={formData.email} onChangeText={(v) => updateForm('email', v)} autoCapitalize="none" keyboardType="email-address" />
        <CustomInput label="Senha" value={formData.password} onChangeText={(v) => updateForm('password', v)} secureTextEntry />
        <CustomInput label="CPF" value={formData.cpf} onChangeText={(v) => updateForm('cpf', v)} />
        <CustomInput label="Nacionalidade" value={formData.nationality} onChangeText={(v) => updateForm('nationality', v)} />
        <CustomInput label="Telefone" value={formData.phone} onChangeText={(v) => updateForm('phone', v)} keyboardType="phone-pad" />
        <CustomInput label="País de Atuação" value={formData.country_of_operation} onChangeText={(v) => updateForm('country_of_operation', v)} />
        <CustomInput label="Grau de Formação" value={formData.education_level} onChangeText={(v) => updateForm('education_level', v)} />

        <CustomButton title="Cadastrar" onPress={handleRegister} loading={loading} style={styles.button} />

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>Voltar para o Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.primaryBackground },
  scroll: { padding: 24, paddingBottom: 48 },
  title: { fontSize: 28, fontWeight: 'bold', color: colors.primaryText, marginBottom: 8 },
  subtitle: { fontSize: 16, color: colors.secondaryText, marginBottom: 32 },
  button: { marginTop: 16 },
  backButton: { marginTop: 24, alignItems: 'center' },
  backText: { color: colors.primaryColor, fontWeight: '600' }
});