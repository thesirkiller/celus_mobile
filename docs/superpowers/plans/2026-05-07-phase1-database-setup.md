# Fase 1: Database First (Supabase) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Inicializar o projeto Supabase localmente e criar as tabelas de banco de dados (schema) mapeadas no documento de design, preparando o terreno para a migração do React Native.

**Architecture:** Utilizaremos o Supabase CLI para gerenciar as migrações localmente. Criaremos arquivos SQL estruturados para Profiles, Conteúdo (Laudus, Protocolus, Resumus), Interações e Assinaturas, habilitando RLS em todas as tabelas públicas.

**Tech Stack:** Supabase CLI, PostgreSQL.

---

### Task 1: Inicializar o Supabase no Projeto

**Files:**
- Create: `supabase/config.toml` (gerado automaticamente)

- [ ] **Step 1: Inicializar o Supabase CLI**

Run: `npx supabase init`
Expected: Pasta `supabase/` e arquivo `supabase/config.toml` gerados com sucesso.

### Task 2: Migração de Profiles e Auth

**Files:**
- Create: `supabase/migrations/XXXXXXXXXXXXXX_create_profiles.sql` (nome gerado dinamicamente)

- [ ] **Step 1: Criar arquivo de migração vazio**

Run: `npx supabase migration new create_profiles`
Expected: Arquivo criado na pasta `supabase/migrations/`.

- [ ] **Step 2: Escrever SQL para a tabela profiles**
Edite o arquivo criado no passo anterior com o seguinte conteúdo:

```sql
-- Criar a tabela profiles que estende auth.users
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  name TEXT,
  cpf TEXT,
  phone TEXT,
  education_level TEXT,
  nationality TEXT,
  country_of_operation TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Política: Usuário pode ler o próprio perfil
CREATE POLICY "Users can view own profile" 
ON public.profiles FOR SELECT 
USING (auth.uid() = id);

-- Política: Usuário pode atualizar o próprio perfil
CREATE POLICY "Users can update own profile" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = id);

-- Function e Trigger para criar perfil automaticamente ao criar usuário (opcional, recomendado)
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id)
  VALUES (new.id);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
```

### Task 3: Migração de Conteúdo (Laudus, Protocolus, Resumus)

**Files:**
- Create: `supabase/migrations/XXXXXXXXXXXXXX_create_content_tables.sql`

- [ ] **Step 1: Criar arquivo de migração vazio**

Run: `npx supabase migration new create_content_tables`
Expected: Arquivo criado.

- [ ] **Step 2: Escrever SQL para as tabelas de conteúdo**
Edite o arquivo criado com o seguinte conteúdo:

```sql
CREATE TABLE public.laudus (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  specialty TEXT,
  content JSONB,
  conclusion TEXT,
  images TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.protocolus (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  specialty TEXT,
  content JSONB,
  conclusion TEXT,
  bibliographic_references TEXT,
  tags TEXT[] DEFAULT '{}',
  images TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.resumus (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  specialty TEXT,
  content JSONB,
  conclusion TEXT,
  bibliographic_references TEXT,
  tags TEXT[] DEFAULT '{}',
  images TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE public.laudus ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.protocolus ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resumus ENABLE ROW LEVEL SECURITY;

-- Políticas: Leitura para usuários autenticados (ou anon dependendo da regra de negócio)
CREATE POLICY "Authenticated users can read laudus" ON public.laudus FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can read protocolus" ON public.protocolus FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can read resumus" ON public.resumus FOR SELECT TO authenticated USING (true);
```

### Task 4: Migração de Interações e Assinaturas

**Files:**
- Create: `supabase/migrations/XXXXXXXXXXXXXX_create_interactions.sql`

- [ ] **Step 1: Criar arquivo de migração**

Run: `npx supabase migration new create_interactions`
Expected: Arquivo criado.

- [ ] **Step 2: Escrever SQL para interações e planos**
Edite o arquivo criado com o seguinte conteúdo:

```sql
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
CREATE POLICY "Users manage own saved articles" ON public.saved_articles FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own reading history" ON public.reading_history FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own comments" ON public.comments FOR ALL USING (auth.uid() = user_id);

-- Planos são públicos para leitura
CREATE POLICY "Anyone can view active plans" ON public.plans FOR SELECT USING (active = true);

-- Assinaturas só visíveis ao dono
CREATE POLICY "Users can view own subscriptions" ON public.subscriptions FOR SELECT USING (auth.uid() = user_id);
```

### Task 5: Validar Localmente

- [ ] **Step 1: Iniciar os containers locais do Supabase**

Run: `npx supabase start`
Expected: Containers iniciados sem erros, aplicando as 3 migrações criadas automaticamente.

- [ ] **Step 2: Gerar os Tipos do TypeScript**

Run: `npx supabase gen types typescript --local > src/types/supabase.ts` (ou similar)
*Nota: Crie a pasta `src/types` antes, se necessário: `mkdir -p src/types`*
Expected: Arquivo `src/types/supabase.ts` criado com as definições TypeScript espelhando o banco.
