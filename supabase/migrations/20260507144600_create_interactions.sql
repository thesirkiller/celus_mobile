-- Favoritos
CREATE TABLE public.saved_articles (
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  article_id UUID NOT NULL,
  article_type TEXT NOT NULL,
  is_favorite BOOLEAN DEFAULT false,
  saved_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, article_id, article_type)
);

-- Histórico Recente
CREATE TABLE public.reading_history (
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  article_id UUID NOT NULL,
  article_type TEXT NOT NULL,
  read_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, article_id, article_type)
);

-- Comentários
CREATE TABLE public.comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  resource_id UUID NOT NULL,
  resource_type TEXT NOT NULL,
  comment TEXT,
  rating INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Planos e Assinaturas (Preparado para RevenueCat / In-App Purchases)
CREATE TABLE public.plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10,2) NOT NULL,
  interval TEXT NOT NULL,
  active BOOLEAN DEFAULT true,
  revenuecat_entitlement_id TEXT -- Identificador do pacote no RevenueCat
);

CREATE TABLE public.subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  plan_id UUID REFERENCES public.plans(id),
  status TEXT NOT NULL,
  current_period_end TIMESTAMPTZ,
  provider_subscription_id TEXT, -- ID na loja (App Store / Play Store)
  store TEXT, -- 'app_store' ou 'play_store'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE public.saved_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reading_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

-- Políticas Básicas (Usuário gerencia seus próprios dados)
CREATE POLICY "Users manage own saved articles" ON public.saved_articles FOR ALL USING ((select auth.uid()) = user_id);
CREATE POLICY "Users manage own reading history" ON public.reading_history FOR ALL USING ((select auth.uid()) = user_id);
CREATE POLICY "Users manage own comments" ON public.comments FOR ALL USING ((select auth.uid()) = user_id);

-- Planos são públicos para leitura
CREATE POLICY "Anyone can view active plans" ON public.plans FOR SELECT USING (active = true);

-- Assinaturas só visíveis ao dono
CREATE POLICY "Users can view own subscriptions" ON public.subscriptions FOR SELECT USING ((select auth.uid()) = user_id);
