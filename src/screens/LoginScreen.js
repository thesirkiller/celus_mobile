import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { supabase } from '../services/supabase';
import { colors } from '../theme/colors';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      alert(error.message);
    } else {
      navigation.replace('Home');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.inner}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/230x0w.webp')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.title}>Celus</Text>
          <Text style={styles.subtitle}>Faça login para continuar</Text>
        </View>

        <View style={styles.form}>
          <CustomInput 
            label="E-mail" 
            placeholder="Seu e-mail" 
            value={email} 
            onChangeText={setEmail} 
            autoCapitalize="none" 
            keyboardType="email-address" 
          />
          <CustomInput 
            label="Senha" 
            placeholder="Sua senha" 
            value={password} 
            onChangeText={setPassword} 
            secureTextEntry 
          />
          
          <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <CustomButton title="Entrar" onPress={handleLogin} loading={loading} />
          
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Não tem uma conta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerLink}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.primaryBackground },
  inner: { flex: 1, padding: 24, justifyContent: 'center' },
  logoContainer: { alignItems: 'center', marginBottom: 48 },
  logo: { width: 100, height: 100, marginBottom: 16 },
  title: { fontSize: 32, fontWeight: 'bold', color: colors.primaryText },
  subtitle: { fontSize: 16, color: colors.secondaryText, marginTop: 8 },
  form: { width: '100%' },
  forgotPassword: { alignSelf: 'flex-end', marginBottom: 24 },
  forgotText: { color: colors.primaryColor, fontWeight: '500' },
  registerContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 24 },
  registerText: { color: colors.secondaryText },
  registerLink: { color: colors.primaryColor, fontWeight: 'bold' }
});
