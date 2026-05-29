import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, Image, Dimensions } from 'react-native';
import { supabase } from '../services/supabase';
import { colors } from '../theme/colors';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const { width } = Dimensions.get('window');

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [timer, setTimer] = useState(28); // 28 segundos baseados na string legada 00:28

  // Efeito de temporizador para reenvio de e-mail de recuperação
  useEffect(() => {
    let interval = null;
    if (emailSent && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [emailSent, timer]);

  const handleReset = async () => {
    if (!email) {
      Alert.alert("Erro", "Por favor, digite o e-mail cadastrado.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      Alert.alert("Erro", error.message);
    } else {
      setEmailSent(true);
      setTimer(28);
    }
    setLoading(false);
  };

  const handleResend = async () => {
    if (timer > 0) return;
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      Alert.alert("Erro", error.message);
    } else {
      setTimer(28);
      Alert.alert("Sucesso", "Novo link enviado.");
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        {/* Logo do Celus no Topo como o legado do no_authenticate */}
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/logo-completo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {!emailSent ? (
          /* Estado 1: Pedir o e-mail de recuperação */
          <View style={styles.formContainer}>
            <Text style={styles.title}>Esqueci a senha</Text>
            <Text style={styles.subtitle}>Estamos aqui para te ajudar</Text>

            <View style={styles.inputSpacing}>
              <CustomInput 
                label="Digite o e-mail cadastrado" 
                placeholder="E-mail" 
                value={email} 
                onChangeText={setEmail} 
                autoCapitalize="none" 
                keyboardType="email-address" 
              />
            </View>

            <CustomButton 
              title="Enviar" 
              onPress={handleReset} 
              loading={loading} 
              style={styles.submitBtn} 
            />

            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        ) : (
          /* Estado 2: Confirmação de e-mail enviado com contador 1:1 Legado */
          <View style={styles.formContainer}>
            <Text style={styles.title}>Confirme seu e-mail</Text>
            
            <View style={styles.successBox}>
              <Text style={styles.successText}>
                Enviamos um e-mail para <Text style={styles.boldText}>{email}</Text>.
              </Text>
              <Text style={styles.spamWarning}>
                Confira também a sua caixa de spam.
              </Text>
            </View>

            {timer > 0 ? (
              <View style={styles.timerRow}>
                <Text style={styles.timerLabel}>Reenviar e-mail em: </Text>
                <Text style={styles.timerCount}>00:{timer < 10 ? `0${timer}` : timer}</Text>
              </View>
            ) : (
              <TouchableOpacity style={styles.resendBtn} onPress={handleResend}>
                <Text style={styles.resendText}>Reenviar e-mail</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Text style={styles.backText}>Voltar ao Login</Text>
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
    backgroundColor: '#FFFFFF', // Fundo branco igual o original do FlutterFlow no_auth
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  logo: {
    width: 200,
    height: 57,
  },
  formContainer: {
    width: '100%',
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 24,
    color: '#181D27', // cores.primaryText
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    color: '#717680', // cores.secondaryText
    textAlign: 'center',
    marginBottom: 32,
  },
  inputSpacing: {
    marginBottom: 20,
  },
  submitBtn: {
    backgroundColor: '#35B48B', // Verde marca
    height: 48,
    borderRadius: 12,
    marginTop: 10,
  },
  backButton: {
    marginTop: 24,
    alignItems: 'center',
  },
  backText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    color: '#35B48B',
  },
  successBox: {
    backgroundColor: '#F6FEFB',
    borderWidth: 1,
    borderColor: '#D4F7E6',
    borderRadius: 12,
    padding: 16,
    marginVertical: 20,
  },
  successText: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#0D6F57',
    textAlign: 'center',
    lineHeight: 20,
  },
  boldText: {
    fontWeight: '700',
  },
  spamWarning: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: '#717680',
    textAlign: 'center',
    marginTop: 10,
  },
  timerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  timerLabel: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#717680',
  },
  timerCount: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 14,
    color: '#35B48B',
  },
  resendBtn: {
    backgroundColor: '#F6FEFB',
    borderWidth: 1,
    borderColor: '#35B48B',
    borderRadius: 12,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  resendText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    color: '#35B48B',
  },
});