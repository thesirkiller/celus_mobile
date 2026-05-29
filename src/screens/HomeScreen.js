import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { supabase } from '../services/supabase';
import { purchaseService } from '../services/purchaseService';
import { useIsFocused } from '@react-navigation/native';
import FloatingNavbar from '../components/FloatingNavbar';

export default function HomeScreen({ navigation }) {
  const [userName, setUserName] = useState('Augusto');
  const [activeSpecialty, setActiveSpecialty] = useState('Todos');
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
      console.log('Erro ao buscar status pro na home:', e);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Query database profile
        const { data: profile, error } = await supabase
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

  // List of specialties matching FlutterFlow widget and home-aprovacao.png
  const specialties = [
    { id: 'todos', name: 'Todos' },
    { id: 'cervical', name: 'Cervical' },
    { id: 'dermatologia', name: 'Dermatologia' },
    { id: 'emergencia', name: 'Emergência' },
    { id: 'fisica', name: 'Física' },
    { id: 'ginecologia', name: 'Ginecologia' },
    { id: 'mama', name: 'Mama' },
  ];

  // List of modules matching the application, with exact copy from the home-aprovacao.png screenshot
  const allModules = [
    {
      id: 'medultra',
      title: 'MedULTRA',
      desc: 'Acesse milhares de referências de medidas normais em exames de ultrassonografia. Escolha por órgão ou estrutura, em contextos de medicina fetal, pediatria ou medicina interna.',
      actionText: '48 Medidas \u2197', // Unicode North East Arrow ↗
      illustration: require('../../assets/imagem-home1.png'),
      route: 'MedUltra',
      specialties: ['Todos', 'Cervical', 'Ginecologia', 'Mama']
    },
    {
      id: 'calculus',
      title: 'CalculUS',
      desc: 'Calculadoras inteligentes baseadas em sistemas de risco reconhecidos internacionalmente',
      actionText: '12 CalculUS \u2197',
      illustration: require('../../assets/home2.png'),
      route: 'Calculus',
      specialties: ['Todos', 'Ginecologia', 'Mama', 'Emergência']
    },
    {
      id: 'laudus',
      title: 'LaudUS',
      desc: 'Mais de 200 modelos prontos de laudos de ultrassonografia. Organizados por especialidade, órgão e patologia.',
      actionText: '64 LaudUS \u2197',
      illustration: require('../../assets/home3.png'),
      route: 'Laudus',
      specialties: ['Todos', 'Cervical', 'Ginecologia', 'Dermatologia']
    },
    {
      id: 'resumus',
      title: 'ResumUS',
      desc: 'Biblioteca com os principais temas da ultrassonografia clínica',
      actionText: '1.684 ResumUS \u2197',
      illustration: require('../../assets/home4.png'),
      route: 'Resumus',
      specialties: ['Todos', 'Mama', 'Cervical', 'Física']
    },
    {
      id: 'protocolus',
      title: 'ProtocolUS',
      desc: 'Protocolos de ultrassom ilustrados, interativos e práticos. Navegue por carrosséis, acesse via sumário e salve seus favoritos. Tudo com curadoria especializada, sempre à mão.',
      actionText: '9 ProtocolUS \u2197',
      illustration: require('../../assets/home5.png'),
      route: 'Protocolus',
      specialties: ['Todos', 'Emergência', 'Dermatologia', 'Física']
    }
  ];

  // Filter modules based on selected specialty
  const filteredModules = allModules.filter(mod => mod.specialties.includes(activeSpecialty));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        
        {/* Top Centered Brand Logo */}
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/logo-completo.png')} 
            style={styles.brandLogo}
            resizeMode="contain"
          />
        </View>

        {/* Profile Header Block */}
        <View style={styles.profileBar}>
          <View style={styles.profileInfo}>
            <View style={styles.avatarContainer}>
              <Image 
                source={require('../../assets/profile.png')} 
                style={styles.avatar} 
              />
            </View>
            <View style={styles.nameContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.greetingText}>Olá, {userName}!</Text>
                {isPro && (
                  <View style={styles.proBadge}>
                    <Text style={styles.proBadgeText}>PRO</Text>
                  </View>
                )}
              </View>
              <Text style={styles.welcomeText}>Bem vindo ao Celus</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.bellButton} activeOpacity={0.7}>
            <Image 
              source={require('../../assets/bell.png')} 
              style={styles.bellIcon} 
            />
          </TouchableOpacity>
        </View>

        {/* Featured Hero Banner */}
        <View style={styles.heroBanner}>
          <Text style={styles.heroTitle}>Banner</Text>
        </View>

        {/* Specialty Section */}
        <View style={styles.specialtyContainer}>
          <Text style={styles.sectionTitle}>Encontre o que deseja por especialidade</Text>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.specialtyScroll}
          >
            {specialties.map(spec => {
              const isActive = activeSpecialty === spec.name;
              return (
                <TouchableOpacity 
                  key={spec.id}
                  style={styles.specialtyItem}
                  onPress={() => setActiveSpecialty(spec.name)}
                  activeOpacity={0.8}
                >
                  <View style={styles.specialtyIconContainer}>
                    <Image 
                      source={isActive ? require('../../assets/foguete-active.png') : require('../../assets/foguete-inactive.png')} 
                      style={styles.specialtyIcon}
                    />
                  </View>
                  <Text style={[
                    styles.specialtyText, 
                    isActive ? styles.specialtyTextActive : styles.specialtyTextInactive
                  ]}>
                    {spec.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Results Info */}
        <Text style={styles.resultsTitle}>
          Resultados para: <Text style={styles.resultsTitleActive}>{activeSpecialty}</Text>
        </Text>

        {/* Modules Grid / List */}
        <View style={styles.modulesList}>
          {filteredModules.map(mod => (
            <TouchableOpacity 
              key={mod.id} 
              style={styles.moduleCard}
              onPress={() => {
                if (isPro) {
                  navigation.navigate(mod.route);
                } else {
                  Alert.alert(
                    'Celus Pro Necessário',
                    `O módulo ${mod.title} é exclusivo para assinantes Celus Pro. Deseja conhecer nossos planos para ter acesso ilimitado?`,
                    [
                      { text: 'Agora não', style: 'cancel' },
                      { text: 'Ver Planos', onPress: () => navigation.navigate('PlansScreen') }
                    ]
                  );
                }
              }}
              activeOpacity={0.9}
            >
              {/* Left Side: Metadata and action button */}
              <View style={styles.cardLeft}>
                <View>
                  <Text style={styles.cardTitle}>{mod.title}</Text>
                  <Text style={styles.cardDesc} numberOfLines={5}>{mod.desc}</Text>
                </View>
                
                <Text style={styles.cardActionText}>{mod.actionText}</Text>
              </View>

              {/* Right Side: Illustration */}
              <View style={styles.cardRight}>
                <Image 
                  source={mod.illustration} 
                  style={styles.cardIllustration}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Elegant Logout Footer */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout} activeOpacity={0.7}>
          <Text style={styles.logoutText}>Sair da Conta</Text>
        </TouchableOpacity>

      </ScrollView>

      <FloatingNavbar navigation={navigation} activeTab="home" />

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
    paddingBottom: 110, // Incremented bottom padding to clear the floating tab capsule
  },
  // Top centered brand logo styling
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  brandLogo: {
    width: 120,
    height: 34,
  },
  // Profile Bar matching Figma home-aprovacao.png
  profileBar: {
    width: '100%',
    height: 64,
    backgroundColor: '#F1F1F1',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 32.9,
    height: 32.9,
    borderRadius: 16.45,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatar: {
    width: 32.9,
    height: 32.9,
    borderRadius: 16.45,
  },
  nameContainer: {
    marginLeft: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  greetingText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 12,
    color: '#7C7C83',
  },
  welcomeText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 10,
    color: '#7C7C83',
    marginTop: 2,
  },
  bellButton: {
    width: 32.9,
    height: 32.9,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.645,
    borderColor: '#F1F1F1',
    borderRadius: 16.45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIcon: {
    width: 13.16,
    height: 13.16,
    tintColor: '#7C7C83',
    transform: [{ scaleX: -1 }], // Matrix mirror transform from figma
  },
  // Green Hero Banner matching Figma Frame 13
  heroBanner: {
    width: '100%',
    height: 142,
    backgroundColor: '#35B48B',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  heroTitle: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 24,
    color: '#FFFFFF',
  },
  // Specialty filter list matching Figma Frame 35
  specialtyContainer: {
    width: '100%',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    color: '#7C7C83',
    marginBottom: 12,
  },
  specialtyScroll: {
    paddingRight: 16,
  },
  specialtyItem: {
    width: 56,
    alignItems: 'center',
    marginRight: 10,
  },
  specialtyIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 6.4,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  specialtyIcon: {
    width: 24,
    height: 24,
  },
  specialtyText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 8,
    lineHeight: 10,
    textAlign: 'center',
    marginTop: 4,
  },
  specialtyTextActive: {
    color: '#35B48B',
  },
  specialtyTextInactive: {
    color: '#7C7C83',
  },
  // Results Title matching home-aprovacao.png
  resultsTitle: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    color: '#7C7C83',
    marginBottom: 12,
    marginTop: 8,
  },
  resultsTitleActive: {
    color: '#35B48B',
  },
  // Modules Cards matching Figma Frame 55, 26, 16
  modulesList: {
    width: '100%',
    gap: 12,
  },
  moduleCard: {
    width: '100%',
    height: 155, // Increased height to match description scale beautifully
    backgroundColor: '#F1F1F1',
    borderRadius: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    position: 'relative',
  },
  cardLeft: {
    width: '58%',
    padding: 16,
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 26,
    color: '#1F2937',
    marginBottom: 4,
  },
  cardDesc: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 14,
    color: '#6B7280',
  },
  cardActionText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    color: '#35B48B',
    marginTop: 6,
  },
  cardRight: {
    width: '42%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cardIllustration: {
    width: 110,
    height: 110,
  },
  // Logout Button
  logoutButton: {
    width: '100%',
    height: 52,
    borderRadius: 16,
    backgroundColor: '#FFF',
    borderWidth: 1.5,
    borderColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  logoutText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    color: '#D92D20',
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