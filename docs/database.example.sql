-- Proposta PostgreSQL. Não executada. Adaptar ao provedor e às regras oficiais.
-- As duas tabelas devem ser privadas por padrão; publicar conteúdo por uma API.
CREATE TABLE publications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL CHECK (char_length(title) BETWEEN 1 AND 200),
  excerpt text NOT NULL,
  category text NOT NULL,
  body jsonb NOT NULL DEFAULT '[]'::jsonb,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'review', 'published', 'archived')),
  published_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CHECK (status <> 'published' OR published_at IS NOT NULL)
);

CREATE TABLE inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kind text NOT NULL CHECK (kind IN ('contact', 'association')),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 3 AND 120),
  email text NOT NULL CHECK (char_length(email) <= 254),
  phone text,
  subject text,
  message text NOT NULL DEFAULT '' CHECK (char_length(message) <= 3000),
  privacy_notice_version text NOT NULL,
  privacy_acknowledged_at timestamptz NOT NULL,
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'closed')),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX publications_status_date ON publications(status, published_at DESC);
CREATE INDEX inquiries_created ON inquiries(created_at DESC);

-- Implementar autenticação, papéis e políticas ANTES de expor qualquer acesso.
-- A aplicação só deve acessar usando uma identidade do servidor com privilégio mínimo.
