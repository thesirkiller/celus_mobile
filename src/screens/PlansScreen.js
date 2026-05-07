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
