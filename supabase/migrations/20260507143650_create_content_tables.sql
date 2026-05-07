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

-- Indexes
CREATE INDEX idx_laudus_status ON public.laudus(status);
CREATE INDEX idx_laudus_specialty ON public.laudus(specialty);

CREATE INDEX idx_protocolus_status ON public.protocolus(status);
CREATE INDEX idx_protocolus_specialty ON public.protocolus(specialty);
CREATE INDEX idx_protocolus_tags ON public.protocolus USING GIN (tags);

CREATE INDEX idx_resumus_status ON public.resumus(status);
CREATE INDEX idx_resumus_specialty ON public.resumus(specialty);
CREATE INDEX idx_resumus_tags ON public.resumus USING GIN (tags);

-- Function and Triggers for updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER handle_updated_at
  BEFORE UPDATE ON public.laudus
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();

CREATE TRIGGER handle_updated_at
  BEFORE UPDATE ON public.protocolus
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();

CREATE TRIGGER handle_updated_at
  BEFORE UPDATE ON public.resumus
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();

-- Habilitar RLS
ALTER TABLE public.laudus ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.protocolus ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resumus ENABLE ROW LEVEL SECURITY;

-- Políticas: Leitura para usuários autenticados (ou anon dependendo da regra de negócio)
CREATE POLICY "Authenticated users can read laudus" ON public.laudus FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can read protocolus" ON public.protocolus FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can read resumus" ON public.resumus FOR SELECT TO authenticated USING (true);
