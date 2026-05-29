import { Platform } from 'react-native';
import Purchases from 'react-native-purchases';

// API Key fornecida pelo usuário
const REVENUECAT_API_KEY = 'test_bUdOzTLVrQQRmwrHzQMGCczyPcm';

// Nome exato do Entitlement solicitado pelo usuário
export const ENTITLEMENT_ID = 'Celus Pro';

class PurchaseService {
  constructor() {
    this.configured = false;
  }

  /**
   * Inicializa e configura o SDK da RevenueCat.
   */
  async configure() {
    if (this.configured) return;

    try {
      // Habilita logs de depuração em desenvolvimento para facilitar testes em sandbox
      if (__DEV__) {
        Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);
      }

      // Configura o SDK de forma global e direta com a chave do usuário
      Purchases.configure({ apiKey: REVENUECAT_API_KEY });
      this.configured = true;
      console.log('[RevenueCat] SDK configurado com sucesso.');
    } catch (error) {
      console.error('[RevenueCat] Falha ao configurar SDK:', error);
    }
  }

  /**
   * Verifica se o usuário logado possui o entitlement ativo de acesso premium ("Celus Pro").
   * @returns {Promise<boolean>} true se for Pro, false caso contrário.
   */
  async checkProEntitlement() {
    await this.ensureConfigured();
    try {
      const customerInfo = await Purchases.getCustomerInfo();
      const isPro = typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== 'undefined';
      console.log(`[RevenueCat] Entitlement "${ENTITLEMENT_ID}" status ativo:`, isPro);
      
      // Sincroniza o status do plano silenciosamente no Supabase
      this.syncWithSupabase(isPro);
      
      return isPro;
    } catch (error) {
      console.error('[RevenueCat] Erro ao verificar entitlement:', error);
      return false;
    }
  }

  /**
   * Sincroniza o status Pro do usuário no banco de dados do Supabase.
   */
  async syncWithSupabase(isPro) {
    try {
      const { supabase } = require('./supabase'); // Importação tardia para evitar dependência circular
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase
          .from('profiles')
          .update({ is_pro: isPro })
          .eq('id', user.id);
        console.log('[Supabase] Assinatura sincronizada no perfil com is_pro =', isPro);
      }
    } catch (err) {
      console.log('[Supabase] Falha ao sincronizar assinatura:', err);
    }
  }

  /**
   * Obtém as ofertas configuradas no painel da RevenueCat.
   * @returns {Promise<Object|null>} A oferta ativa e seus pacotes, ou null.
   */
  async getOfferings() {
    await this.ensureConfigured();
    try {
      const offerings = await Purchases.getOfferings();
      if (offerings.current !== null && offerings.current.availablePackages.length > 0) {
        console.log('[RevenueCat] Ofertas obtidas com sucesso:', offerings.current.availablePackages.length, 'pacotes.');
        return offerings.current;
      }
      console.log('[RevenueCat] Nenhuma oferta ativa encontrada no painel.');
      return null;
    } catch (error) {
      console.error('[RevenueCat] Erro ao obter ofertas:', error);
      return null;
    }
  }

  /**
   * Executa a compra de um pacote selecionado (Mensal, Anual, Vitalício).
   * @param {Object} rcPackage O pacote obtido das ofertas da RevenueCat.
   * @returns {Promise<{success: boolean, customerInfo: Object|null, error: string|null}>}
   */
  async purchasePackage(rcPackage) {
    await this.ensureConfigured();
    try {
      const { customerInfo } = await Purchases.purchasePackage(rcPackage);
      const isPro = typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== 'undefined';
      return {
        success: isPro,
        customerInfo,
        error: null,
      };
    } catch (error) {
      if (error.userCancelled) {
        console.log('[RevenueCat] Compra cancelada pelo usuário.');
        return { success: false, customerInfo: null, error: 'Cancelled' };
      }
      console.error('[RevenueCat] Erro ao realizar compra:', error);
      return {
        success: false,
        customerInfo: null,
        error: error.message || 'Falha ao processar pagamento.',
      };
    }
  }

  /**
   * Restaura compras anteriores efetuadas pelo usuário na respectiva loja de aplicativos.
   * @returns {Promise<boolean>} true se reativar o entitlement, false caso contrário.
   */
  async restorePurchases() {
    await this.ensureConfigured();
    try {
      const customerInfo = await Purchases.restorePurchases();
      const isPro = typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== 'undefined';
      console.log('[RevenueCat] Restauração concluída. Status Pro:', isPro);
      return isPro;
    } catch (error) {
      console.error('[RevenueCat] Erro ao restaurar compras:', error);
      return false;
    }
  }

  /**
   * Recupera o perfil e histórico de compras atual do cliente.
   * @returns {Promise<Object|null>}
   */
  async getCustomerInfo() {
    await this.ensureConfigured();
    try {
      return await Purchases.getCustomerInfo();
    } catch (error) {
      console.error('[RevenueCat] Erro ao buscar dados do cliente:', error);
      return null;
    }
  }

  /**
   * Método interno para garantir que as requisições aguardem a configuração prévia do SDK.
   */
  async ensureConfigured() {
    if (!this.configured) {
      await this.configure();
    }
  }
}

export const purchaseService = new PurchaseService();
