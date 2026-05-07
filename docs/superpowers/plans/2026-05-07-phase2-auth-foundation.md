# Fase 2: Fundação e Autenticação (React Native/Expo) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Configurar a navegação base do aplicativo e implementar as telas de autenticação (Login, Cadastro, Esqueci a Senha) reproduzindo visualmente 1:1 o Material Design do Flutter original.

**Architecture:** Utilizaremos React Navigation (`@react-navigation/native-stack`) para o roteamento. Criaremos componentes de UI reutilizáveis (Input, Button) para garantir consistência visual nas telas de Auth.

**Tech Stack:** React Native, Expo, React Navigation, Supabase Auth.

---

### Task 1: Configurar React Navigation

**Files:**
- Create: `src/navigation/AppNavigator.js`
- Modify: `App.js`

- [ ] **Step 1: Instalar dependências de navegação**

Run: `npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context`
Expected: Instalação concluída com sucesso.

- [ ] **Step 2: Criar AppNavigator.js**

```javascript
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
// Telas que serão criadas nas próximas tasks
// import RegisterScreen from '../screens/RegisterScreen';
// import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
      {/* <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> */}
    </Stack.Navigator>
  );
}
```

- [ ] **Step 3: Integrar no App.js**

```javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
```

### Task 2: Componentes Core de UI (Theme, Input, Button)

**Files:**
- Modify: `src/theme/colors.js`
- Create: `src/components/CustomInput.js`
- Create: `src/components/CustomButton.js`

- [ ] **Step 1: Definir as cores principais (colors.js)**

```javascript
export const colors = {
  primaryBackground: '#FFFFFF',
  primaryText: '#101213',
  secondaryText: '#57636C',
  primaryColor: '#4B39EF',
  secondaryColor: '#39D2C0',
  tertiaryColor: '#EE8B60',
  alternate: '#E0E3E7',
  error: '#FF5963',
  inputBackground: '#F1F4F8',
  inputBorder: '#E0E3E7',
};
```

- [ ] **Step 2: Criar CustomInput.js (Estilo Material Design do Flutter)**

```javascript
import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';

export default function CustomInput({ label, error, ...props }) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.inputError]}
        placeholderTextColor={colors.secondaryText}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: colors.secondaryText,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: colors.primaryText,
  },
  inputError: {
    borderColor: colors.error,
  },
  errorText: {
    color: colors.error,
    fontSize: 12,
    marginTop: 4,
  },
});
```

- [ ] **Step 3: Criar CustomButton.js**

```javascript
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../theme/colors';

export default function CustomButton({ title, onPress, loading, type = 'primary', style }) {
  const isPrimary = type === 'primary';
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        isPrimary ? styles.primary : styles.secondary,
        style
      ]} 
      onPress={onPress} 
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color={isPrimary ? '#FFF' : colors.primaryColor} />
      ) : (
        <Text style={[styles.text, isPrimary ? styles.textPrimary : styles.textSecondary]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  primary: {
    backgroundColor: colors.primaryColor,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primaryColor,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  textPrimary: {
    color: '#FFFFFF',
  },
  textSecondary: {
    color: colors.primaryColor,
  },
});
```

### Task 3: Refatorar LoginScreen.js

**Files:**
- Modify: `src/screens/LoginScreen.js`

- [ ] **Step 1: Atualizar LoginScreen usando os novos componentes**

```javascript
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
    if (error) alert(error.message);
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.inner}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/icon.png')} style={styles.logo} />
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
```

### Task 4: Criar RegisterScreen.js

**Files:**
- Create: `src/screens/RegisterScreen.js`
- Modify: `src/navigation/AppNavigator.js` (descomentar rota)

- [ ] **Step 1: Implementar RegisterScreen**

```javascript
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
```

- [ ] **Step 2: Descomentar Rota em AppNavigator.js**

Descomente o `import` e o componente `<Stack.Screen name="Register" component={RegisterScreen} />` no arquivo `src/navigation/AppNavigator.js`.

### Task 5: Criar ForgotPasswordScreen.js

**Files:**
- Create: `src/screens/ForgotPasswordScreen.js`
- Modify: `src/navigation/AppNavigator.js` (descomentar rota)

- [ ] **Step 1: Implementar ForgotPasswordScreen**

```javascript
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
```

- [ ] **Step 2: Descomentar Rota em AppNavigator.js**

Descomente o `import` e o componente `<Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />` no arquivo `src/navigation/AppNavigator.js`.
