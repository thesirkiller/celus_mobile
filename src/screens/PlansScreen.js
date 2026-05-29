import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { purchaseService, ENTITLEMENT_ID } from '../services/purchaseService';
import CustomButton from '../components/CustomButton';
import RevenueCatUI from 'react-native-purchases-ui';

export default function PlansScreen({ navigation }) {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showNativePaywall, setShowNativePaywall] = useState(false);

  useEffect(() => {
    loadSubscriptionPackages();
  }, []);

  /**
   * Carrega os pacotes disponíveis configurados ativamente no painel do RevenueCat.
   */
  const loadSubscriptionPackages = async () => {
    setLoading(true);
    try {
      const offerings = await purchaseService.getOfferings();
      if (offerings) {
        setPackages(offerings.availablePackages);
        // Seleciona o pacote Anual por padrão (melhor prática de marketing), ou o primeiro disponível
        const yearlyPkg = offerings.availablePackages.find(pkg => pkg.packageType === 'YEARLY' || pkg.identifier.includes('yearly'));
        setSelectedPackage(yearlyPkg || offerings.availablePackages[0]);
      }
    } catch (e) {
      console.error('Erro ao carregar pacotes da RevenueCat:', e);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Executa o fluxo de compra do pacote selecionado
   */
  const handlePurchase = async (pkgToBuy) => {
    if (!pkgToBuy) return;
    setPurchasing(true);
    try {
      const result = await purchaseService.purchasePackage(pkgToBuy);
      if (result.success) {
        Alert.alert(
          'Assinatura Ativada!',
          'Parabéns! Seu acesso completo ao Celus Pro está ativo agora.',
          [{ text: 'Excelente!', onPress: () => navigation.goBack() }]
        );
      } else if (result.error && result.error !== 'Cancelled') {
        Alert.alert('Falha na Compra', result.error);
      }
    } catch (e) {
      Alert.alert('Erro', 'Ocorreu uma inconsistência no checkout.');
    } finally {
      setPurchasing(false);
    }
  };

  /**
   * Restaura compras anteriores
   */
  const handleRestore = async () => {
    setPurchasing(true);
    try {
      const isPro = await purchaseService.restorePurchases();
      if (isPro) {
        Alert.alert(
          'Assinatura Restaurada!',
          'Identificamos sua compra anterior ativa. Seu acesso Pro foi reestabelecido.',
          [{ text: 'OK', onPress: () => navigation.goBack() }]
        );
      } else {
        Alert.alert('Nenhuma Compra Encontrada', 'Não localizamos assinaturas ativas para esta conta nas lojas de aplicativos.');
      }
    } catch (e) {
      Alert.alert('Erro', 'Falha ao restaurar compras anteriores.');
    } finally {
      setPurchasing(false);
    }
  };

  // Se o usuário optar pelo Paywall Nativo da RevenueCat (Configurado via painel remoto)
  if (showNativePaywall) {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.nativeHeader}>
          <TouchableOpacity 
            style={styles.backBtn}
            onPress={() => setShowNativePaywall(false)}
          >
            <Text style={styles.nativeBackText}>‹ Voltar ao Customizado</Text>
          </TouchableOpacity>
        </View>
        <RevenueCatUI.Paywall
          onPurchaseCompleted={({ customerInfo }) => {
            const isPro = typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== 'undefined';
            if (isPro) {
              Alert.alert('Sucesso!', 'Acesso Celus Pro ativado via Paywall nativo!', [
                { text: 'OK', onPress: () => navigation.goBack() }
              ]);
            }
          }}
          onPurchaseError={({ error }) => {
            if (!error.userCancelled) {
              Alert.alert('Falha', error.message || 'Erro ao processar compra.');
            }
          }}
          onRestoreCompleted={() => {
            Alert.alert('Restaurado!', 'Assinatura reestabelecida!', [
              { text: 'OK', onPress: () => navigation.goBack() }
            ]);
          }}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Premium */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Celus Pro</Text>
        <TouchableOpacity style={styles.restoreBtn} onPress={handleRestore} disabled={purchasing}>
          <Text style={styles.restoreBtnText}>Restaurar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Banner Ilustrado */}
        <View style={styles.bannerContainer}>
          <Image 
            source={require('../../assets/plano-pro.png')} 
            style={styles.bannerImage}
            resizeMode="cover"
          />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerTitle}>Acesse o Potencial Completo</Text>
            <Text style={styles.bannerSub}>Laudos clínicos, calculadoras e medidas sem limites</Text>
          </View>
        </View>

        {/* Lista de Vantagens Premium */}
        <View style={styles.benefitsContainer}>
          <Text style={styles.sectionTitle}>Sua assinatura Celus Pro inclui:</Text>
          
          <View style={styles.benefitRow}>
            <Text style={styles.benefitIcon}>✓</Text>
            <Text style={styles.benefitText}>Mais de 200 modelos de Laudos (LaudUS) editáveis</Text>
          </View>
          <View style={styles.benefitRow}>
            <Text style={styles.benefitIcon}>✓</Text>
            <Text style={styles.benefitText}>Milhares de Medidas Clínicas de referência (MedULTRA)</Text>
          </View>
          <View style={styles.benefitRow}>
            <Text style={styles.benefitIcon}>✓</Text>
            <Text style={styles.benefitText}>Calculadoras reativas baseadas em regras oficiais (CalculUS)</Text>
          </View>
          <View style={styles.benefitRow}>
            <Text style={styles.benefitIcon}>✓</Text>
            <Text style={styles.benefitText}>Protocolos interativos com ilustrações exclusivas</Text>
          </View>
        </View>

        {/* Seletor Dinâmico de Planos */}
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#35B48B" />
            <Text style={styles.loadingText}>Carregando planos do RevenueCat...</Text>
          </View>
        ) : packages.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Não conseguimos recuperar as ofertas de assinatura ativas.</Text>
            <TouchableOpacity style={styles.retryBtn} onPress={loadSubscriptionPackages}>
              <Text style={styles.retryBtnText}>Tentar Novamente</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.plansContainer}>
            <Text style={styles.sectionTitle}>Escolha o seu plano:</Text>
            {packages.map((pkg) => {
              const isSelected = selectedPackage?.identifier === pkg.identifier;
              
              // Mapeia títulos mais amigáveis com base no packageType
              let planLabel = pkg.product.title;
              if (pkg.packageType === 'MONTHLY') planLabel = 'Plano Mensal';
              if (pkg.packageType === 'YEARLY') planLabel = 'Plano Anual';
              if (pkg.packageType === 'LIFETIME') planLabel = 'Plano Vitalício';

              return (
                <TouchableOpacity
                  key={pkg.identifier}
                  style={[styles.planCard, isSelected && styles.planCardSelected]}
                  onPress={() => setSelectedPackage(pkg)}
                  activeOpacity={0.8}
                >
                  <View style={styles.planCardLeft}>
                    <View style={[styles.radioButton, isSelected && styles.radioButtonSelected]}>
                      {isSelected && <View style={styles.radioButtonInner} />}
                    </View>
                    <View style={styles.planInfo}>
                      <Text style={[styles.planTitle, isSelected && styles.planTitleSelected]}>
                        {planLabel}
                      </Text>
                      <Text style={styles.planDesc} numberOfLines={1}>
                        {pkg.product.description || 'Acesso total aos conteúdos clínicos'}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.planPriceContainer}>
                    <Text style={[styles.planPrice, isSelected && styles.planPriceSelected]}>
                      {pkg.product.priceString}
                    </Text>
                    {pkg.packageType === 'YEARLY' && (
                      <View style={styles.bestValueBadge}>
                        <Text style={styles.bestValueText}>Melhor Preço</Text>
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}

            {/* Botão de Compra de Alta Performance */}
            <View style={styles.buyBtnContainer}>
              <CustomButton
                title={purchasing ? 'Processando Checkout...' : `Assinar - ${selectedPackage?.product.priceString}`}
                onPress={() => handlePurchase(selectedPackage)}
                disabled={purchasing || !selectedPackage}
                style={styles.buyBtn}
              />
              {purchasing && <ActivityIndicator style={styles.purchaseLoader} color="#FFFFFF" />}
            </View>

            {/* Alternar para o Paywall Remoto do RevenueCat */}
            <TouchableOpacity 
              style={styles.nativeToggle}
              onPress={() => setShowNativePaywall(true)}
            >
              <Text style={styles.nativeToggleText}>Visualizar Paywall Remoto ↗</Text>
            </TouchableOpacity>
          </View>
        )}

        <Text style={styles.termsText}>
          Ao assinar, você concorda com nossos Termos de Uso e Política de Privacidade. A assinatura pode ser gerenciada diretamente no menu de configurações da sua conta de loja.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    fontSize: 32,
    color: '#35B48B',
    fontWeight: '300',
  },
  headerTitle: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 18,
    color: '#1F2937',
  },
  restoreBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  restoreBtnText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    color: '#35B48B',
  },
  nativeHeader: {
    height: 56,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },
  backBtn: {
    paddingVertical: 8,
  },
  nativeBackText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#35B48B',
  },
  scroll: {
    padding: 16,
    paddingBottom: 40,
  },
  bannerContainer: {
    width: '100%',
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 24,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    position: 'absolute',
    left: 16,
    bottom: 16,
    right: 16,
  },
  bannerTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 20,
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  bannerSub: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 4,
    opacity: 0.95,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  benefitsContainer: {
    width: '100%',
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  sectionTitle: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 15,
    color: '#1F2937',
    marginBottom: 16,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  benefitIcon: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#35B48B',
    marginRight: 10,
  },
  benefitText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 13,
    color: '#4B5563',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  loadingText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    color: '#6B7280',
    marginTop: 12,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
  },
  emptyText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 16,
  },
  retryBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#35B48B',
    borderRadius: 10,
  },
  retryBtnText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    color: '#FFFFFF',
  },
  plansContainer: {
    width: '100%',
    marginBottom: 16,
  },
  planCard: {
    width: '100%',
    height: 64,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  planCardSelected: {
    borderColor: '#35B48B',
    backgroundColor: '#F0FDF4',
  },
  planCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  radioButtonSelected: {
    borderColor: '#35B48B',
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#35B48B',
  },
  planInfo: {
    flex: 1,
  },
  planTitle: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    color: '#374151',
  },
  planTitleSelected: {
    color: '#15803D',
  },
  planDesc: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: 2,
  },
  planPriceContainer: {
    alignItems: 'flex-end',
  },
  planPrice: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 16,
    color: '#374151',
  },
  planPriceSelected: {
    color: '#15803D',
  },
  bestValueBadge: {
    backgroundColor: '#35B48B',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 4,
  },
  bestValueText: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 8,
    color: '#FFFFFF',
  },
  buyBtnContainer: {
    position: 'relative',
    marginTop: 16,
    width: '100%',
  },
  buyBtn: {
    width: '100%',
  },
  purchaseLoader: {
    position: 'absolute',
    right: 24,
    top: 16,
  },
  nativeToggle: {
    alignItems: 'center',
    paddingVertical: 12,
    marginTop: 8,
  },
  nativeToggleText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 13,
    color: '#35B48B',
    textDecorationLine: 'underline',
  },
  termsText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 11,
    color: '#9CA3AF',
    lineHeight: 15,
    textAlign: 'center',
    marginTop: 24,
  },
});
