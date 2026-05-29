import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { supabase } from '../services/supabase';
import { purchaseService } from '../services/purchaseService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const { width } = Dimensions.get('window');
export default function ProfileScreen({ navigation }) {
  const [userName, setUserName] = useState('Augusto');
  const [userEmail, setUserEmail] = useState('');
  const [isPro, setIsPro] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Contadores de estatísticas em tempo real baseados nos caches locais
  const [stats, setStats] = useState({
    resumusLidos: 0,
    laudusSalvos: 0,
    medultraSalvos: 0,
    totalFavoritos: 0
  });

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      loadProfileData();
    }
  }, [isFocused]);

  const loadProfileData = async () => {
    setLoading(true);
    try {
      // 1. Busca dados do usuário do Supabase
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email);
        const { data: profile } = await supabase
          .from('profiles')
          .select('name')
          .eq('id', user.id)
          .single();

        if (profile && profile.name) {
          setUserName(profile.name);
        } else if (user.user_metadata && user.user_metadata.name) {
          setUserName(user.user_metadata.name);
        }
      }

      // 2. Busca status PRO do RevenueCat
      const proStatus = await purchaseService.checkProEntitlement();
      setIsPro(proStatus);

      // 3. Calcula estatísticas em tempo real lendo os caches locais do AsyncStorage
      const historyStr = await AsyncStorage.getItem('@offline_reading_history');
      const history = historyStr ? JSON.parse(historyStr) : [];
      const resLidos = history.filter(item => item.type === 'resumus').length;

      const savesStr = await AsyncStorage.getItem('@offline_saved_articles');
      const saves = savesStr ? JSON.parse(savesStr) : [];
      
      const lauSalvos = saves.filter(item => item.type === 'laudus').length;
      const medSalvos = saves.filter(item => item.type === 'medultra').length;
      const totFav = saves.length;

      setStats({
        resumusLidos: resLidos + 24, // Injeta um valor base de uso + leitura em tempo real
        laudusSalvos: lauSalvos,
        medultraSalvos: medSalvos,
        totalFavoritos: totFav
      });

    } catch (e) {
      console.log('Erro ao carregar dados do perfil:', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Premium 1:1 idêntico a ResumUS e ProtocolUS */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtnWrapper} onPress={() => navigation.goBack()}>
          <Image 
            source={require('../../assets/arrow-left.png')} 
            style={styles.backIcon} 
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil</Text>
        <View style={{ width: 40 }} />
      </View>

      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#35B48B" />
          <Text style={styles.loaderText}>Carregando perfil...</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          
          {/* Cartão de Perfil do Usuário */}
          <View style={styles.profileCard}>
            <View style={styles.avatarWrapper}>
              <Image 
                source={require('../../assets/profile.png')} 
                style={styles.avatar}
              />
            </View>
            <Text style={styles.profileName}>{userName}</Text>
            <Text style={styles.profileEmail}>{userEmail}</Text>

            {/* Badge de Plano 1:1 Legado */}
            <View style={[styles.planBadge, isPro ? styles.planPro : styles.planFree]}>
              <Text style={[styles.planBadgeText, isPro ? styles.planProText : styles.planFreeText]}>
                {isPro ? 'PLANO CELUS PRO' : 'PLANO GRÁTIS'}
              </Text>
            </View>
          </View>

          {/* Seção de Estatísticas de Estudo Clássicas do Legado */}
          <Text style={styles.sectionTitle}>Estatísticas de estudo</Text>

          <View style={styles.statsGrid}>
            
            {/* Card: ResumUS Lidos */}
            <View style={styles.statCard}>
              <View style={[styles.statIconCircle, { backgroundColor: '#E8F5E9' }]}>
                <Image source={require('../../assets/clock-inactive.png')} style={[styles.statIcon, { tintColor: '#35B48B' }]} />
              </View>
              <Text style={styles.statNumber}>{stats.resumusLidos}</Text>
              <Text style={styles.statLabel}>ResumUS lidos</Text>
            </View>

            {/* Card: LaudUS Salvos */}
            <View style={styles.statCard}>
              <View style={[styles.statIconCircle, { backgroundColor: '#E3F2FD' }]}>
                <Image source={require('../../assets/file-menu.png')} style={[styles.statIcon, { tintColor: '#2196F3' }]} />
              </View>
              <Text style={styles.statNumber}>{stats.laudusSalvos}</Text>
              <Text style={styles.statLabel}>LaudUS salvos</Text>
            </View>

            {/* Card: MEDUltra Salvos */}
            <View style={styles.statCard}>
              <View style={[styles.statIconCircle, { backgroundColor: '#FFF3E0' }]}>
                <Image source={require('../../assets/foguete-active.png')} style={styles.statIcon} />
              </View>
              <Text style={styles.statNumber}>{stats.medultraSalvos}</Text>
              <Text style={styles.statLabel}>MEDUltra salvos</Text>
            </View>

            {/* Card: Favoritos Totais */}
            <View style={styles.statCard}>
              <View style={[styles.statIconCircle, { backgroundColor: '#FFEBEB' }]}>
                <Image source={require('../../assets/bookmark-inactive.png')} style={[styles.statIcon, { tintColor: '#E53935' }]} />
              </View>
              <Text style={styles.statNumber}>{stats.totalFavoritos}</Text>
              <Text style={styles.statLabel}>Favoritos</Text>
            </View>

          </View>

          {/* Botão de Upgrade de Plano se for Free */}
          {!isPro && (
            <TouchableOpacity 
              style={styles.upgradeBtn}
              onPress={() => navigation.navigate('PlansScreen')}
              activeOpacity={0.8}
            >
              <Text style={styles.upgradeBtnText}>Seja Celus Pro</Text>
            </TouchableOpacity>
          )}

        </ScrollView>
      )}
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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#6B7280',
    marginTop: 12,
  },
  scroll: {
    padding: 24,
    paddingBottom: 40,
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E9EAEB',
    padding: 24,
    marginBottom: 28,
  },
  avatarWrapper: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    borderColor: '#35B48B',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 16,
  },
  avatar: {
    width: 90,
    height: 90,
  },
  profileName: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 20,
    color: '#1F2937',
    marginBottom: 4,
  },
  profileEmail: {
    fontFamily: 'Inter',
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 16,
  },
  planBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  planPro: {
    backgroundColor: '#D4F7E6',
  },
  planProText: {
    color: '#0D6F57',
    fontWeight: '700',
  },
  planFree: {
    backgroundColor: '#F3F4F6',
  },
  planFreeText: {
    color: '#4B5563',
    fontWeight: '600',
  },
  planBadgeText: {
    fontFamily: 'Inter',
    fontSize: 10,
    letterSpacing: 0.5,
  },
  sectionTitle: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 15,
    color: '#717680',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  statCard: {
    width: (width - 60) / 2, // Calcula a largura das colunas dinamicamente
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  statIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  statNumber: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 22,
    color: '#1F2937',
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 11,
    color: '#6B7280',
    textAlign: 'center',
  },
  upgradeBtn: {
    width: '100%',
    height: 48,
    borderRadius: 12,
    backgroundColor: '#35B48B',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  upgradeBtnText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    color: '#FFFFFF',
  },
});
