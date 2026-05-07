# Celus Mobile - Migração Flutter para React Native (Expo)

## Visão Geral e Objetivo
O objetivo deste projeto é traduzir ("migrar") o aplicativo original **Celus**, construído em Flutter (Material Design) com backend hospedado no Railway, para uma nova base de código em **React Native utilizando Expo**. O backend será integralmente migrado para o ecossistema **Supabase**. 

A premissa principal do projeto é a **fidelidade visual absoluta (1:1)** em relação ao projeto original no Figma e no Flutter. Nenhuma alteração no design da interface deve ser feita em prol de componentes "nativos"; o app deve manter a estética e fluxos exatos definidos pelo cliente. O aplicativo também deve suportar notificações e funcionar adequadamente em segundo plano (background) utilizando o Expo.

## Arquitetura do Sistema

*   **Frontend:** React Native (Expo). Utilização de componentes customizados para emular exatamente o Material Design do Flutter original.
*   **Backend:** Supabase. Utilizaremos os serviços de Auth, Database (PostgreSQL) com Row Level Security (RLS) e possivelmente Edge Functions, caso haja lógica pesada (como as calculadoras) que não deva residir apenas no cliente.
*   **Pagamentos (In-App Purchases):** Integração com as lojas da Apple (App Store) e Google (Play Store) utilizando RevenueCat (`react-native-purchases`) para gerenciar as assinaturas de forma centralizada e cross-platform.
*   **Notificações & Background:** Expo Notifications e Expo TaskManager/BackgroundFetch para processamento em segundo plano.

## Suporte Offline e Sincronização
Para garantir que o aplicativo funcione sem conexão com a internet:
1.  **Cache Local (Leitura):** Utilização de `AsyncStorage` (ou `expo-sqlite`) para salvar localmente artigos, protocolos, resumos abertos e a lista de favoritos. Ao iniciar sem rede, o app carrega os dados locais.
2.  **Fila de Ações (Escrita):** Interações feitas offline (como favoritar um artigo ou comentar) são salvas em uma fila local.
3.  **Sincronização em Background:** Utilização de `expo-network` para detectar o retorno da conexão e `expo-task-manager` / `expo-background-fetch` para sincronizar a fila de ações com o Supabase de forma transparente.
4.  **Sessão Persistente:** O token do Supabase Auth já é persistido localmente, permitindo acesso imediato ao app mesmo sem internet.

## Escopo e Componentes

O aplicativo é composto pelas seguintes áreas principais, que serão reproduzidas visualmente 1:1:

1.  **Autenticação (`/auth`):**
    *   Login (Email/Senha, Google Sign-In)
    *   Cadastro (Nome, Email, Senha, CPF, Nacionalidade, Telefone, País de Atuação, Grau de Formação)
    *   Recuperação de Senha
2.  **Dashboard/Home (`/home`):**
    *   Acesso rápido aos serviços principais.
3.  **Conteúdo Médico (`/pages`):**
    *   **LaudUS:** Listagem e leitura detalhada.
    *   **ProtocolUS:** Listagem e leitura detalhada.
    *   **ResumUS:** Listagem e leitura detalhada.
    *   **MedUltra:** Ferramentas/Cálculos.
4.  **Ferramentas e Calculadoras Médicas (`calcul_u_s`):**
    *   Calculadora Fetal, Saco Gestacional, IOTA, etc.
5.  **Gestão e Interação do Usuário (`/menu`, `/favorites`, `/saves`, `/recents`):**
    *   Favoritos / Artigos Salvos.
    *   Histórico de leitura (Recentes).
    *   Comentários e Avaliações (Ratings) nos conteúdos.
    *   Perfil do Usuário.
    *   Planos e Assinaturas.

## Modelagem de Dados (Supabase)

A modelagem de dados espelhará a estrutura inferida dos endpoints originais do Railway, adaptada para o PostgreSQL do Supabase:

*   **`auth.users`** (Supabase nativo): Gerencia credenciais (email/senha) e autenticação via Google.
*   **`profiles`**: Dados estendidos (`id` [ref: auth.users], `name`, `cpf`, `phone`, `education_level`, `nationality`, `country_of_operation`).
*   **Tabelas de Conteúdo (`laudus`, `protocolus`, `resumus`)**: `id`, `title`, `specialty`, `content`, `images` (array), `status`, `conclusion`, etc.
*   **`saved_articles`**: `user_id`, `article_id`, `article_type`, `is_favorite`.
*   **`comments`**: `user_id`, `resource_id`, `resource_type`, `comment`, `rating`.
*   **`reading_history`**: `user_id`, `article_id`, `article_type`, `read_at`.
*   **`plans`**: Catálogo de assinaturas (`id`, `name`, `description`, `price`, `interval`, `active`).
*   **`subscriptions`**: Controle de acesso (`id`, `user_id`, `plan_id`, `status`, `current_period_end`, `provider_subscription_id`).

## Estratégia de Implementação

1.  **Fase 1: Database First (Supabase)**
    *   Criação de todas as tabelas descritas acima.
    *   Configuração do Supabase Auth e políticas iniciais de RLS.
2.  **Fase 2: Fundação e Autenticação (Expo)**
    *   Configuração do ambiente Expo e rotas.
    *   Implementação visual 1:1 das telas de Login, Cadastro e Esqueci a Senha.
    *   Integração com Supabase Auth.
3.  **Fase 3: Telas Core e Conteúdo**
    *   Implementação da Home.
    *   Implementação das listagens e detalhes (Laudus, Protocolus, Resumus).
    *   Conexão direta com as tabelas do Supabase.
4.  **Fase 4: Interação e Ferramentas**
    *   Criação das ferramentas de cálculo médico.
    *   Implementação de comentários, favoritos e histórico de leitura.
5.  **Fase 5: Assinaturas, Background e Polimento**
    *   Integração do fluxo de planos/assinaturas.
    *   Configuração de notificações e tarefas em background (Expo).
    *   Revisão final de fidelidade visual contra o Figma/Flutter.
