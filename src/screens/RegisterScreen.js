import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Alert, Image, Dimensions } from 'react-native';
import { supabase } from '../services/supabase';
import { colors } from '../theme/colors';
import CustomInput from '../components/CustomInput';
import CustomSelect from '../components/CustomSelect';
import CustomButton from '../components/CustomButton';

const { width } = Dimensions.get('window');

const NATIONALITIES = [
  'Brasileira',
  'Portuguesa',
  'Angolana',
  'Moçambicana',
  'Cabo-verdiana',
  'São-tomense',
  'Guineense',
  'Timorense',
  'Americana',
  'Argentina',
  'Chilena',
  'Colombiana',
  'Espanhola',
  'Italiana',
  'Outra'
];

const COUNTRIES = [
  'Brasil',
  'Portugal',
  'Angola',
  'Moçambique',
  'Cabo Verde',
  'São Tomé e Príncipe',
  'Guiné-Bissau',
  'Guiné Equatorial',
  'Timor-Leste',
  'Estados Unidos',
  'Argentina',
  'Chile',
  'Colômbia',
  'Espanha',
  'Itália',
  'Outro'
];

const EDUCATION_LEVELS = [
  'Estudante de Medicina',
  'Médico Generalista',
  'Médico Residente',
  'Médico Especialista',
  'Outro Profissional da Saúde',
  'Outro'
];

export default function RegisterScreen({ navigation }) {
  const [step, setStep] = useState(1); // Controla as 3 etapas 1:1 do legado
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: '', cpf: '', nationality: '', phone: '', country_of_operation: '', education_level: ''
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const maskCPF = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      .slice(0, 14);
  };

  const maskPhone = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15);
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        Alert.alert("Erro", "Preencha o Nome, E-mail, Senha e Confirmação.");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        Alert.alert("Erro", "As senhas não são iguais.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!formData.education_level || !formData.nationality || !formData.country_of_operation || !formData.phone) {
        Alert.alert("Erro", "Preencha o Grau de Formação, Nacionalidade, País de Atuação e Telefone.");
        return;
      }
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleRegister = async () => {
    if (!formData.cpf) {
      Alert.alert("Erro", "Informe o CPF.");
      return;
    }
    if (!termsAccepted) {
      Alert.alert("Aviso", "Você precisa aceitar os Termos de Uso e Política de Privacidade.");
      return;
    }

    setLoading(true);
    // Passo 1: Criar Auth User com metadados para salvar o perfil automaticamente
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          name: formData.name,
          cpf: formData.cpf,
          phone: formData.phone,
          education_level: formData.education_level,
          nationality: formData.nationality,
          country_of_operation: formData.country_of_operation,
        }
      }
    });

    if (authError) {
      Alert.alert("Erro", authError.message);
      setLoading(false);
      return;
    }

    // O Perfil é criado via Trigger no DB, a gente atualiza as informações adicionais
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
        Alert.alert("Aviso", "Erro ao salvar perfil, mas usuário criado.");
      } else {
        Alert.alert("Sucesso", "Conta criada com sucesso!", [
          { text: "Entrar", onPress: () => navigation.navigate('Login') }
        ]);
      }
    }
    setLoading(false);
  };

  const updateForm = (key, value) => setFormData(prev => ({ ...prev, [key]: value }));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        
        {/* Logo do Celus no Topo */}
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/logo-completo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Título de Cadastro Estático */}
        <Text style={styles.title}>Cadastro</Text>
        <Text style={styles.subtitle}>Etapa {step} de 3</Text>

        {step === 1 && (
          /* Etapa 1 de 3 */
          <View style={styles.formSection}>
            <View style={styles.inputSpacing}>
              <CustomInput 
                label="Nome completo" 
                placeholder="Digite seu nome completo"
                value={formData.name} 
                onChangeText={(v) => updateForm('name', v)} 
              />
            </View>

            <View style={styles.inputSpacing}>
              <CustomInput 
                label="E-mail" 
                placeholder="Entre com seu e-mail"
                value={formData.email} 
                onChangeText={(v) => updateForm('email', v)} 
                autoCapitalize="none" 
                keyboardType="email-address" 
              />
            </View>

            <View style={styles.inputSpacing}>
              <CustomInput 
                label="Senha" 
                placeholder="Informe sua senha"
                value={formData.password} 
                onChangeText={(v) => updateForm('password', v)} 
                secureTextEntry 
              />
            </View>

            <View style={styles.inputSpacing}>
              <CustomInput 
                label="Confirmar senha" 
                placeholder="Confirme sua senha"
                value={formData.confirmPassword} 
                onChangeText={(v) => updateForm('confirmPassword', v)} 
                secureTextEntry 
              />
            </View>

            <CustomButton title="Continuar" onPress={handleNextStep} style={styles.button} />
          </View>
        )}

        {step === 2 && (
          /* Etapa 2 de 3 */
          <View style={styles.formSection}>
            <View style={styles.inputSpacing}>
              <CustomSelect 
                label="Grau de formação" 
                selectedValue={formData.education_level} 
                onValueChange={(v) => updateForm('education_level', v)} 
                options={EDUCATION_LEVELS}
                placeholder="Selecione o grau"
              />
            </View>

            <View style={styles.inputSpacing}>
              <CustomSelect 
                label="Nacionalidade" 
                selectedValue={formData.nationality} 
                onValueChange={(v) => updateForm('nationality', v)} 
                options={NATIONALITIES}
                placeholder="Selecione sua nacionalidade"
              />
            </View>

            <View style={styles.inputSpacing}>
              <CustomSelect 
                label="País de atuação" 
                selectedValue={formData.country_of_operation} 
                onValueChange={(v) => updateForm('country_of_operation', v)} 
                options={COUNTRIES}
                placeholder="Selecione o país"
              />
            </View>

            <View style={styles.inputSpacing}>
              <CustomInput 
                label="Telefone" 
                placeholder="Informe seu número"
                value={formData.phone} 
                onChangeText={(v) => updateForm('phone', maskPhone(v))} 
                keyboardType="phone-pad"
                maxLength={15}
              />
            </View>

            <View style={styles.rowButtons}>
              <TouchableOpacity style={styles.backStepBtn} onPress={handlePrevStep}>
                <Text style={styles.backStepText}>Voltar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.nextStepBtn} onPress={handleNextStep}>
                <Text style={styles.nextStepText}>Continuar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {step === 3 && (
          /* Etapa 3 de 3 */
          <View style={styles.formSection}>
            <View style={styles.inputSpacing}>
              <CustomInput 
                label="CPF" 
                placeholder="000.000.000-00"
                value={formData.cpf} 
                onChangeText={(v) => updateForm('cpf', maskCPF(v))} 
                keyboardType="numeric"
                maxLength={14}
              />
            </View>

            {/* Checkbox de Concordância de Termos de Uso e Política 1:1 Legado */}
            <TouchableOpacity 
              style={styles.checkboxContainer} 
              activeOpacity={0.8}
              onPress={() => setTermsAccepted(!termsAccepted)}
            >
              <View style={[styles.checkbox, termsAccepted && styles.checkboxActive]}>
                {termsAccepted && <Text style={styles.checkChar}>✓</Text>}
              </View>
              <Text style={styles.checkboxLabel}>
                Li e estou de acordo com o <Text style={styles.linkText}>Termo de Uso</Text> e <Text style={styles.linkText}>Política de Privacidade</Text>.
              </Text>
            </TouchableOpacity>

            <CustomButton 
              title="Concluir cadastro" 
              onPress={handleRegister} 
              loading={loading} 
              style={styles.button} 
            />

            <TouchableOpacity style={styles.backStepBtnFull} onPress={handlePrevStep}>
              <Text style={styles.backStepText}>Voltar para etapa anterior</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.loginRow}>
          <Text style={styles.loginLabel}>Já tem uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginActionText}>Entrar agora</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    padding: 24,
    paddingBottom: 48,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 10,
  },
  logo: {
    width: 140,
    height: 40,
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 24,
    color: '#181D27',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 13,
    color: '#35B48B', // Verde marca
    textAlign: 'center',
    marginBottom: 24,
  },
  formSection: {
    width: '100%',
  },
  inputSpacing: {
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#35B48B',
    height: 48,
    borderRadius: 12,
    marginTop: 8,
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 16,
  },
  backStepBtn: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E3E7',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  backStepText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    color: '#717680',
  },
  nextStepBtn: {
    flex: 2,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#35B48B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextStepText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    color: '#FFFFFF',
  },
  backStepBtnFull: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 20,
    paddingHorizontal: 4,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#D5D7DA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 2,
  },
  checkboxActive: {
    backgroundColor: '#35B48B',
    borderColor: '#35B48B',
  },
  checkChar: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    flex: 1,
    fontFamily: 'Inter',
    fontSize: 13,
    lineHeight: 18,
    color: '#717680',
  },
  linkText: {
    color: '#35B48B',
    fontWeight: '600',
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  loginLabel: {
    fontFamily: 'Inter',
    fontSize: 13,
    color: '#717680',
  },
  loginActionText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 13,
    color: '#35B48B',
  },
});