# Fase 3: Telas Core e Conteúdo (React Native/Expo) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar a Home (Dashboard principal) e as telas de listagem e detalhe de conteúdo (LaudUS, ProtocolUS, ResumUS), conectando a leitura de dados diretamente ao Supabase e implementando a base do cache offline com AsyncStorage.

**Architecture:** 
- **HomeScreen:** Dashboard com navegação para as áreas principais.
- **ArticleCard:** Componente reutilizável para a listagem dos itens.
- **Telas de Listagem:** Telas específicas (`LaudusScreen`, `ProtocolusScreen`, `ResumusScreen`) que buscam dados do Supabase.
- **Tela de Detalhes:** `ArticleDetailScreen` genérica para renderizar o conteúdo.

**Tech Stack:** React Native, Expo, React Navigation, Supabase, AsyncStorage.

---

### Task 1: Componente ArticleCard (Reutilizável)

**Files:**
- Create: `src/components/ArticleCard.js`

- [ ] **Step 1: Criar ArticleCard.js**

```javascript
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../theme/colors';

export default function ArticleCard({ item, onPress }) {
  // Assume que item tem: title, specialty, created_at, images[]
  const imageUrl = item.images && item.images.length > 0 ? item.images[0] : null;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      ) : (
        <View style={styles.placeholderImage}>
          <Text style={styles.placeholderText}>Sem Imagem</Text>
        </View>
      )}
      <View style={styles.content}>
        <Text style={styles.specialty}>{item.specialty || 'Geral'}</Text>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.date}>
          {new Date(item.created_at).toLocaleDateString('pt-BR')}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.alternate,
  },
  image: {
    width: 100,
    height: 100,
  },
  placeholderImage: {
    width: 100,
    height: 100,
    backgroundColor: colors.alternate,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    color: colors.secondaryText,
    fontSize: 10,
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  specialty: {
    fontSize: 12,
    color: colors.primaryColor,
    fontWeight: '600',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primaryText,
  },
  date: {
    fontSize: 12,
    color: colors.secondaryText,
    marginTop: 8,
  },
});
```

### Task 2: Implementar HomeScreen

**Files:**
- Create: `src/screens/HomeScreen.js`

- [ ] **Step 1: Criar HomeScreen.js com botões para os módulos**

```javascript
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../theme/colors';
import { supabase } from '../services/supabase';

export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    // A navegação de volta pro Login normalmente é gerida por um listener de auth no App.js, 
    // mas vamos forçar aqui se a rota existir na stack atual.
    navigation.replace('Login'); 
  };

  const modules = [
    { id: 'laudus', title: 'LaudUS', route: 'Laudus', desc: 'Modelos de laudos' },
    { id: 'protocolus', title: 'ProtocolUS', route: 'Protocolus', desc: 'Protocolos atualizados' },
    { id: 'resumus', title: 'ResumUS', route: 'Resumus', desc: 'Resumos práticos' },
    { id: 'medultra', title: 'MedUltra', route: 'MedUltra', desc: 'Ferramentas e cálculos' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Olá, Doutor(a)</Text>
          <Text style={styles.subtitle}>O que você deseja acessar hoje?</Text>
        </View>

        <View style={styles.grid}>
          {modules.map((mod) => (
            <TouchableOpacity 
              key={mod.id} 
              style={styles.moduleCard}
              onPress={() => navigation.navigate(mod.route)}
            >
              <Text style={styles.moduleTitle}>{mod.title}</Text>
              <Text style={styles.moduleDesc}>{mod.desc}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.inputBackground },
  scroll: { padding: 24 },
  header: { marginBottom: 32 },
  greeting: { fontSize: 28, fontWeight: 'bold', color: colors.primaryText },
  subtitle: { fontSize: 16, color: colors.secondaryText, marginTop: 4 },
  grid: { gap: 16 },
  moduleCard: {
    backgroundColor: '#FFF',
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.alternate,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  moduleTitle: { fontSize: 20, fontWeight: 'bold', color: colors.primaryColor, marginBottom: 8 },
  moduleDesc: { fontSize: 14, color: colors.secondaryText },
  logoutButton: { marginTop: 48, alignItems: 'center', padding: 16 },
  logoutText: { color: colors.error, fontWeight: 'bold', fontSize: 16 },
});
```

### Task 3: Criar Telas de Listagem (Laudus, Protocolus, Resumus)

**Files:**
- Create: `src/screens/LaudusScreen.js`
- Create: `src/screens/ProtocolusScreen.js`
- Create: `src/screens/ResumusScreen.js`

- [ ] **Step 1: Criar Helper de Fetch e as 3 telas**
(Para simplificar a task, faremos as 3 com estrutura parecida, mudando apenas a tabela).

**LaudusScreen.js:**
```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { supabase } from '../services/supabase';
import { colors } from '../theme/colors';
import ArticleCard from '../components/ArticleCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LaudusScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    // Estratégia Offline: Tentar cache primeiro
    const cached = await AsyncStorage.getItem('@cache_laudus');
    if (cached) setData(JSON.parse(cached));

    const { data: serverData, error } = await supabase
      .from('laudus')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false });

    if (!error && serverData) {
      setData(serverData);
      await AsyncStorage.setItem('@cache_laudus', JSON.stringify(serverData));
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>Voltar</Text></TouchableOpacity>
        <Text style={styles.title}>LaudUS</Text>
      </View>
      {loading && data.length === 0 ? (
        <ActivityIndicator style={{ marginTop: 50 }} color={colors.primaryColor} />
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ArticleCard 
              item={item} 
              onPress={() => navigation.navigate('ArticleDetail', { item, type: 'laudus' })} 
            />
          )}
          ListEmptyComponent={<Text style={styles.empty}>Nenhum conteúdo encontrado.</Text>}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.inputBackground },
  header: { padding: 24, flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderBottomWidth: 1, borderColor: colors.alternate },
  back: { color: colors.primaryColor, fontWeight: 'bold', marginRight: 16 },
  title: { fontSize: 20, fontWeight: 'bold', color: colors.primaryText },
  list: { padding: 16 },
  empty: { textAlign: 'center', color: colors.secondaryText, marginTop: 24 }
});
```

**ProtocolusScreen.js:**
*(Exatamente igual ao Laudus, mas trocando 'laudus' por 'protocolus', 'LaudUS' por 'ProtocolUS', e '@cache_laudus' por '@cache_protocolus')*

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { supabase } from '../services/supabase';
import { colors } from '../theme/colors';
import ArticleCard from '../components/ArticleCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProtocolusScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    setLoading(true);
    const cached = await AsyncStorage.getItem('@cache_protocolus');
    if (cached) setData(JSON.parse(cached));
    const { data: serverData, error } = await supabase.from('protocolus').select('*').eq('status', 'published').order('created_at', { ascending: false });
    if (!error && serverData) { setData(serverData); await AsyncStorage.setItem('@cache_protocolus', JSON.stringify(serverData)); }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>Voltar</Text></TouchableOpacity>
        <Text style={styles.title}>ProtocolUS</Text>
      </View>
      {loading && data.length === 0 ? <ActivityIndicator style={{ marginTop: 50 }} color={colors.primaryColor} /> : (
        <FlatList contentContainerStyle={styles.list} data={data} keyExtractor={item => item.id} renderItem={({ item }) => <ArticleCard item={item} onPress={() => navigation.navigate('ArticleDetail', { item, type: 'protocolus' })} />} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.inputBackground },
  header: { padding: 24, flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderBottomWidth: 1, borderColor: colors.alternate },
  back: { color: colors.primaryColor, fontWeight: 'bold', marginRight: 16 },
  title: { fontSize: 20, fontWeight: 'bold', color: colors.primaryText },
  list: { padding: 16 }
});
```

**ResumusScreen.js:**
*(Idem, para Resumus)*

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { supabase } from '../services/supabase';
import { colors } from '../theme/colors';
import ArticleCard from '../components/ArticleCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ResumusScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    setLoading(true);
    const cached = await AsyncStorage.getItem('@cache_resumus');
    if (cached) setData(JSON.parse(cached));
    const { data: serverData, error } = await supabase.from('resumus').select('*').eq('status', 'published').order('created_at', { ascending: false });
    if (!error && serverData) { setData(serverData); await AsyncStorage.setItem('@cache_resumus', JSON.stringify(serverData)); }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>Voltar</Text></TouchableOpacity>
        <Text style={styles.title}>ResumUS</Text>
      </View>
      {loading && data.length === 0 ? <ActivityIndicator style={{ marginTop: 50 }} color={colors.primaryColor} /> : (
        <FlatList contentContainerStyle={styles.list} data={data} keyExtractor={item => item.id} renderItem={({ item }) => <ArticleCard item={item} onPress={() => navigation.navigate('ArticleDetail', { item, type: 'resumus' })} />} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.inputBackground },
  header: { padding: 24, flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderBottomWidth: 1, borderColor: colors.alternate },
  back: { color: colors.primaryColor, fontWeight: 'bold', marginRight: 16 },
  title: { fontSize: 20, fontWeight: 'bold', color: colors.primaryText },
  list: { padding: 16 }
});
```

### Task 4: Criar Tela de Detalhes (ArticleDetailScreen)

**Files:**
- Create: `src/screens/ArticleDetailScreen.js`

- [ ] **Step 1: Implementar ArticleDetailScreen.js**

```javascript
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';

export default function ArticleDetailScreen({ route, navigation }) {
  const { item, type } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{item.specialty || 'Detalhes'}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        {item.images && item.images.length > 0 && (
          <Image source={{ uri: item.images[0] }} style={styles.coverImage} />
        )}
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>
            Publicado em {new Date(item.created_at).toLocaleDateString('pt-BR')}
          </Text>
          
          <View style={styles.divider} />
          
          {/* Para simplificar neste MVP, renderizamos como texto puro se for string. Em prod, JSONB precisará de um parser específico (como react-native-render-html se for rico) */}
          <Text style={styles.bodyText}>
            {typeof item.content === 'string' ? item.content : JSON.stringify(item.content)}
          </Text>

          {item.conclusion && (
            <View style={styles.conclusionBox}>
              <Text style={styles.conclusionTitle}>Conclusão</Text>
              <Text style={styles.conclusionText}>{item.conclusion}</Text>
            </View>
          )}

          {item.bibliographic_references && (
            <View style={styles.referencesBox}>
              <Text style={styles.referencesTitle}>Referências Bibliográficas</Text>
              <Text style={styles.referencesText}>{item.bibliographic_references}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { padding: 16, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.alternate },
  back: { color: colors.primaryColor, fontWeight: 'bold', marginRight: 16, width: 60 },
  headerTitle: { flex: 1, fontSize: 16, fontWeight: '600', color: colors.primaryText },
  scroll: { paddingBottom: 48 },
  coverImage: { width: '100%', height: 200, backgroundColor: colors.alternate },
  content: { padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', color: colors.primaryText, marginBottom: 8 },
  date: { fontSize: 14, color: colors.secondaryText, marginBottom: 16 },
  divider: { height: 1, backgroundColor: colors.alternate, marginVertical: 16 },
  bodyText: { fontSize: 16, lineHeight: 24, color: '#333' },
  conclusionBox: { backgroundColor: '#F0FDF4', padding: 16, borderRadius: 8, marginTop: 24, borderWidth: 1, borderColor: '#BBF7D0' },
  conclusionTitle: { fontSize: 18, fontWeight: 'bold', color: '#166534', marginBottom: 8 },
  conclusionText: { fontSize: 16, lineHeight: 24, color: '#14532D' },
  referencesBox: { marginTop: 32, paddingTop: 16, borderTopWidth: 1, borderColor: colors.alternate },
  referencesTitle: { fontSize: 14, fontWeight: 'bold', color: colors.secondaryText, marginBottom: 8 },
  referencesText: { fontSize: 14, color: colors.secondaryText, lineHeight: 20 },
});
```

### Task 5: Atualizar AppNavigator.js

**Files:**
- Modify: `src/navigation/AppNavigator.js`

- [ ] **Step 1: Registrar novas rotas no Stack Navigator**

```javascript
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
// Novas Telas (Fase 3)
import HomeScreen from '../screens/HomeScreen';
import LaudusScreen from '../screens/LaudusScreen';
import ProtocolusScreen from '../screens/ProtocolusScreen';
import ResumusScreen from '../screens/ResumusScreen';
import ArticleDetailScreen from '../screens/ArticleDetailScreen';
// Placeholder para MedUltra que será feito na Fase 4
// import MedUltraScreen from '../screens/MedUltraScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Aqui a ordem importa. Em um app real usaríamos estado global de auth, 
          mas por enquanto vamos adicionar as rotas para testes fáceis */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Laudus" component={LaudusScreen} />
      <Stack.Screen name="Protocolus" component={ProtocolusScreen} />
      <Stack.Screen name="Resumus" component={ResumusScreen} />
      <Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} />
    </Stack.Navigator>
  );
}
```

- [ ] **Step 2: Atualizar LoginScreen.js para ir para a Home**
No arquivo `src/screens/LoginScreen.js`, após o login bem sucedido (remover os alerts e redirecionar):

Edite a função `handleLogin`:
```javascript
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
```
