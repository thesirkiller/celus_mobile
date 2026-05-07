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
USING ((select auth.uid()) = id);

-- Política: Usuário pode atualizar o próprio perfil
CREATE POLICY "Users can update own profile" 
ON public.profiles FOR UPDATE 
USING ((select auth.uid()) = id);

-- Function e Trigger para criar perfil automaticamente ao criar usuário (opcional, recomendado)
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id)
  VALUES (new.id);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();