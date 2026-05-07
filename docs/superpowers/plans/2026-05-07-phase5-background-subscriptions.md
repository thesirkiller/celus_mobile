# Fase 5: Assinaturas, Background e Notificações (Implementation Plan)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) to implement this plan task-by-task.

**Goal:** Implementar a lógica de assinaturas via RevenueCat, configurar a sincronização de ações offline em segundo plano (background fetch) e preparar o app para receber notificações push via Expo.

**Architecture:** 
- **RevenueCat:** Uso de `react-native-purchases` na tela `PlansScreen`.
- **Background Sync:** Fila offline baseada em AsyncStorage, verificada periodicamente pelo `expo-background-fetch` registrado no `App.js`.
- **Notifications:** Setup básico do `expo-notifications` para solicitar permissão e pegar o token do dispositivo.

**Tech Stack:** React Native, Expo, `react-native-purchases`, `expo-task-manager`, `expo-background-fetch`, `expo-notifications`, `@react-native-netinfo/netinfo`.

---

### Task 1: Instalar e Configurar Dependências Nativas

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Instalar bibliotecas Expo e RevenueCat**

Run: `npx expo install expo-task-manager expo-background-fetch expo-notifications @react-native-netinfo/netinfo react-native-purchases`
Expected: Instalação das bibliotecas no `package.json`.

### Task 2: Configurar Background Fetch e Fila Offline

**Files:**
- Create: `src/services/syncQueue.js`
- Modify: `App.js`

- [ ] **Step 1: Criar o helper da Fila de Sincronização (syncQueue.js)**

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from './supabase';
import NetInfo from '@react-native-netinfo/netinfo';

const QUEUE_KEY = '@offline_action_queue';

export const addToQueue = async (action) => {
  const currentQueue = JSON.parse(await AsyncStorage.getItem(QUEUE_KEY)) || [];
  currentQueue.push(action);
  await AsyncStorage.setItem(QUEUE_KEY, JSON.stringify(currentQueue));
};

export const processQueue = async () => {
  const state = await NetInfo.fetch();
  if (!state.isConnected) return false;

  const currentQueue = JSON.parse(await AsyncStorage.getItem(QUEUE_KEY)) || [];
  if (currentQueue.length === 0) return true;

  const remainingQueue = [];

  for (const action of currentQueue) {
    try {
      if (action.type === 'FAVORITE_ADD') {
        await supabase.from('saved_articles').insert(action.payload);
      } else if (action.type === 'FAVORITE_REMOVE') {
        await supabase.from('saved_articles')
          .delete()
          .eq('user_id', action.payload.user_id)
          .eq('article_id', action.payload.article_id);
      }
      // Outras ações (ex: comentários) podem ser processadas aqui
    } catch (error) {
      console.error('Erro ao processar ação offline:', error);
      remainingQueue.push(action); // Devolve para a fila se falhar
    }
  }

  await AsyncStorage.setItem(QUEUE_KEY, JSON.stringify(remainingQueue));
  return true;
};
```

- [ ] **Step 2: Configurar TaskManager no App.js**

Adicione este código no início do `App.js` (fora do componente):

```javascript
import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import { processQueue } from './src/services/syncQueue';
import * as Notifications from 'expo-notifications';

const BACKGROUND_SYNC_TASK = 'background-sync-task';

TaskManager.defineTask(BACKGROUND_SYNC_TASK, async () => {
  try {
    const success = await processQueue();
    return success ? BackgroundFetch.BackgroundFetchResult.NewData : BackgroundFetch.BackgroundFetchResult.NoData;
  } catch (error) {
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
```

E adicione o registro dentro do componente `App`:

```javascript
  import { useEffect } from 'react';

  // Dentro do function App()
  useEffect(() => {
    async function registerTasks() {
      await BackgroundFetch.registerTaskAsync(BACKGROUND_SYNC_TASK, {
        minimumInterval: 15 * 60, // 15 minutos
        stopOnTerminate: false, // Mantém rodando mesmo se o app for fechado
        startOnBoot: true,
      });
      // Solicitar permissão de notificação no primeiro boot
      await Notifications.requestPermissionsAsync();
    }
    registerTasks();
  }, []);
```

### Task 3: Atualizar Favorite Logic para usar a Fila Offline

**Files:**
- Modify: `src/screens/ArticleDetailScreen.js`

- [ ] **Step 1: Atualizar toggleFavorite para considerar modo offline**

```javascript
import { addToQueue, processQueue } from '../services/syncQueue';
import NetInfo from '@react-native-netinfo/netinfo';

// Substitua a função toggleFavorite por esta:
  const toggleFavorite = async () => {
    setIsFavorite(!isFavorite);
    
    const { data: userData } = await supabase.auth.getUser();
    if (!userData?.user) return;
    
    const payload = {
      user_id: userData.user.id,
      article_id: item.id,
      article_type: type,
      is_favorite: true
    };

    const state = await NetInfo.fetch();
    
    if (state.isConnected) {
      // Tenta online
      if (!isFavorite) {
        await supabase.from('saved_articles').insert(payload);
      } else {
        await supabase.from('saved_articles').delete().eq('user_id', userData.user.id).eq('article_id', item.id);
      }
    } else {
      // Salva na fila offline
      await addToQueue({
        type: !isFavorite ? 'FAVORITE_ADD' : 'FAVORITE_REMOVE',
        payload
      });
    }
  };
```

### Task 4: Criar Tela de Planos (RevenueCat)

**Files:**
- Create: `src/screens/PlansScreen.js`
- Modify: `src/navigation/AppNavigator.js`

- [ ] **Step 1: Implementar PlansScreen.js**

```javascript
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Alert, Platform } from 'react-native';
import { colors } from '../theme/colors';
import Purchases from 'react-native-purchases';
import CustomButton from '../components/CustomButton';

export default function PlansScreen({ navigation }) {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setupRevenueCat = async () => {
      // Chaves placeholders. Em produção, use as chaves reais do RevenueCat (RC_API_KEY)
      const API_KEY = Platform.OS === 'ios' ? 'appl_apiKeyHere' : 'goog_apiKeyHere';
      
      try {
        if (Platform.OS === 'ios' || Platform.OS === 'android') {
          Purchases.configure({ apiKey: API_KEY });
          const offerings = await Purchases.getOfferings();
          if (offerings.current !== null) {
            setPackages(offerings.current.availablePackages);
          }
        }
      } catch (e) {
        console.error("Erro RevenueCat", e);
      } finally {
        setLoading(false);
      }
    };
    setupRevenueCat();
  }, []);

  const handlePurchase = async (pkg) => {
    try {
      setLoading(true);
      const { purchaserInfo } = await Purchases.purchasePackage(pkg);
      if (typeof purchaserInfo.entitlements.active['pro'] !== "undefined") {
        Alert.alert("Sucesso!", "Sua assinatura foi ativada.");
        navigation.goBack();
      }
    } catch (e) {
      if (!e.userCancelled) {
        Alert.alert("Erro na compra", e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>Voltar</Text></TouchableOpacity>
        <Text style={styles.title}>Assinaturas</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.subtitle}>Desbloqueie acesso completo aos LaudUS e ProtocolUS.</Text>
        
        {loading ? (
          <Text style={styles.loading}>Carregando planos...</Text>
        ) : packages.length === 0 ? (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>Os planos (mock) estão sendo configurados no RevenueCat.</Text>
            <CustomButton title="Comprar Plano Fictício (Dev)" onPress={() => Alert.alert('Aviso', 'Apenas para testar layout')} />
          </View>
        ) : (
          packages.map((pkg) => (
            <View key={pkg.identifier} style={styles.planCard}>
              <Text style={styles.planTitle}>{pkg.product.title}</Text>
              <Text style={styles.planDesc}>{pkg.product.description}</Text>
              <Text style={styles.planPrice}>{pkg.product.priceString}</Text>
              <CustomButton title="Assinar Agora" onPress={() => handlePurchase(pkg)} style={styles.btn} />
            </View>
          ))
        )}
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
  subtitle: { fontSize: 16, color: colors.secondaryText, marginBottom: 24 },
  loading: { textAlign: 'center', marginTop: 24, color: colors.secondaryText },
  emptyBox: { backgroundColor: '#FFF', padding: 24, borderRadius: 12, alignItems: 'center' },
  emptyText: { color: colors.secondaryText, textAlign: 'center', marginBottom: 16 },
  planCard: { backgroundColor: '#FFF', padding: 24, borderRadius: 16, marginBottom: 16, borderWidth: 1, borderColor: colors.primaryColor },
  planTitle: { fontSize: 20, fontWeight: 'bold', color: colors.primaryText, marginBottom: 8 },
  planDesc: { fontSize: 14, color: colors.secondaryText, marginBottom: 16 },
  planPrice: { fontSize: 24, fontWeight: 'bold', color: colors.primaryColor, marginBottom: 16 },
  btn: { marginTop: 8 }
});
```

- [ ] **Step 2: Atualizar AppNavigator.js**
Adicione a tela `PlansScreen` no Stack Navigator.
