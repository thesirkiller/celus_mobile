import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { supabase } from '../services/supabase';
import { purchaseService } from '../services/purchaseService';
import { useIsFocused } from '@react-navigation/native';
import RevenueCatUI from 'react-native-purchases-ui';
import FloatingNavbar from '../components/FloatingNavbar';

export default function MenuScreen({ navigation }) {
  const [userName, setUserName] = useState('Augusto');
  const [isPro, setIsPro] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchUserProfile();
      checkSubscriptionStatus();
    }
  }, [isFocused]);

  const checkSubscriptionStatus = async () => {
    try {
      const proStatus = await purchaseService.checkProEntitlement();
      setIsPro(proStatus);
    } catch (e) {
      console.log('Erro ao buscar status pro no menu:', e);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
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
    } catch (err) {
      console.log('Error fetching user profile:', err);
    }
  };

  const handleLogout = async () => {
    Alert.alert(
      "Confirmar Saída",
      "Deseja realmente sair da sua conta?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Sair", 
          style: "destructive",
          onPress: async () => {
            await supabase.auth.signOut();
            navigation.replace('Login'); 
          }
        }
      ]
    );
  };

  const handleManageSubscription = async () => {
    if (isPro) {
      try {
        // Abre o Customer Center oficial do RevenueCatUI
        await RevenueCatUI.presentCustomerCenter();
      } catch (e) {
        Alert.alert(
          'Gerenciar Assinatura',
          'Sua assinatura Celus Pro está ativa! Para gerenciar faturas ou cancelamentos, acesse as configurações de conta do seu dispositivo (App Store / Google Play).'
        );
      }
    } else {
      // Se não for Pro, leva para a tela de planos
      navigation.navigate('PlansScreen');
    }
  };

  // Menu items config mapping the FlutterFlow original design
  const menuItems = [
    { id: 'profile', label: 'Perfil', icon: require('../../assets/profile.png'), action: () => navigation.navigate('Profile') },
    { id: 'faq', label: 'Dúvidas Frequentes', icon: require('../../assets/help-menu.png'), action: () => Alert.alert('Suporte', 'Dúvidas Frequentes estarão disponíveis em breve!') },
    { id: 'subscription', label: 'Gerenciar Assinatura', icon: require('../../assets/card-menu.png'), action: handleManageSubscription },
    { id: 'feedback', label: 'Envie um feedback', icon: require('../../assets/share-menu.png'), action: () => Alert.alert('Feedback', 'Obrigado por nos ajudar a melhorar o Celus!') },
    { id: 'bug', label: 'Reporte um bug', icon: require('../../assets/bug-menu.png'), action: () => Alert.alert('Suporte', 'Link para reporte de instabilidades.') },
    { id: 'about', label: 'Sobre nós', icon: require('../../assets/building-menu.png'), action: () => Alert.alert('Sobre nós', 'Celus - Seu assistente médico de bolso.') },
    { id: 'terms', label: 'Termos de Uso', icon: require('../../assets/file-menu.png'), action: () => Alert.alert('Termos', 'Contrato de Termos de Uso.') },
    { id: 'privacy', label: 'Política de Privacidade', icon: require('../../assets/file1-menu.png'), action: () => Alert.alert('Privacidade', 'Termos de Segurança e Privacidade.') },
    { id: 'logout', label: 'Deslogar', icon: require('../../assets/logout-menu.png'), action: handleLogout },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        
        {/* Header Block matching Figma Menu */}
        <View style={styles.header}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.headerTitle}>Menu</Text>
            {isPro && (
              <View style={styles.proBadge}>
                <Text style={styles.proBadgeText}>PRO</Text>
              </View>
            )}
          </View>
        </View>

        {/* Pro Plan Promotion Banner Card */}
        <TouchableOpacity 
          style={styles.proBanner} 
          activeOpacity={0.9}
          onPress={() => navigation.navigate('PlansScreen')}
        >
          <Image 
            source={require('../../assets/plano-pro.png')} 
            style={styles.proImage} 
            resizeMode="cover"
          />
          <View style={styles.proOverlay}>
            <Text style={styles.proTitle}>
              {isPro ? 'Celus Pro Ativo!' : 'Desbloqueie seu potencial'}
            </Text>
            <Text style={styles.proSubtitle}>
              {isPro ? 'Você possui acesso ilimitado a todos os recursos clínicos.' : 'Assine o plano para obter acesso completo'}
            </Text>
          </View>
        </TouchableOpacity>

        {/* Menu Items List */}
        <View style={styles.listContainer}>
          {menuItems.map(item => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.menuItem} 
              onPress={item.action}
              activeOpacity={0.7}
            >
              <View style={styles.menuItemLeft}>
                <View style={styles.iconWrapper}>
                  <Image source={item.icon} style={styles.menuIcon} resizeMode="contain" />
                </View>
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              <Text style={styles.arrowIcon}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

      <FloatingNavbar navigation={navigation} activeTab="menu" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    padding: 16,
    paddingTop: 10,
    paddingBottom: 110, // Margin to avoid covering menu elements with the floating navbar
  },
  // Header matching Figma Menu
  header: {
    width: '100%',
    height: 72,
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  headerTitle: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 24,
    color: '#1F2937',
  },
  // Pro Banner matching FlutterFlow design
  proBanner: {
    width: '100%',
    height: 309,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 24,
  },
  proImage: {
    width: '100%',
    height: 309,
  },
  proOverlay: {
    position: 'absolute',
    left: 16,
    bottom: 24,
    right: 16,
  },
  proTitle: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 18,
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  proSubtitle: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 4,
    opacity: 0.95,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  // Menu items layout
  listContainer: {
    width: '100%',
    gap: 8,
  },
  menuItem: {
    width: '100%',
    height: 56, // Compact height for a lighter and premium feel
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItem: {
    width: '100%',
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  menuLabel: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 24, // 24px matches original FlutterFlow font spec
    color: '#1F2937',
    marginLeft: 12,
  },
  arrowIcon: {
    fontSize: 28,
    color: '#9CA3AF',
  },

  proBadge: {
    backgroundColor: '#35B48B',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    marginLeft: 8,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  proBadgeText: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 9,
    color: '#FFFFFF',
  },
});
