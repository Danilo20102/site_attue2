import type { ContentItem, NewsArticle } from '@/types/content';
export const services: ContentItem[] = [
  {
    id: 'atendimento',
    title: 'Atendimento ao profissional',
    description:
      '[SERVIÇO A CONFIRMAR] Espaço reservado para os canais, procedimentos e condições de atendimento.',
    icon: 'message',
    status: 'placeholder',
  },
  {
    id: 'representacao',
    title: 'Representação da categoria',
    description:
      '[ATUAÇÃO A CONFIRMAR] Espaço para detalhar a categoria, a abrangência e as frentes de representação.',
    icon: 'people',
    status: 'placeholder',
  },
  {
    id: 'documentos',
    title: 'Documentos e orientações',
    description:
      '[SERVIÇO A CONFIRMAR] Área para materiais e documentos aprovados pela instituição.',
    icon: 'document',
    status: 'placeholder',
  },
  {
    id: 'participacao',
    title: 'Participação e diálogo',
    description:
      '[ATUAÇÃO A CONFIRMAR] Espaço para apresentar os canais oficiais de participação.',
    icon: 'link',
    status: 'placeholder',
  },
];
export const benefits: ContentItem[] = [
  {
    id: 'beneficio-1',
    title: '[Benefício a definir]',
    description:
      'Inserir o nome e a descrição de um benefício oficialmente confirmado, com critérios de acesso e condições.',
    icon: 'heart',
    status: 'placeholder',
  },
  {
    id: 'beneficio-2',
    title: '[Convênio a confirmar]',
    description:
      'Inserir parceiro, vigência, abrangência e condições somente após aprovação institucional.',
    icon: 'link',
    status: 'placeholder',
  },
  {
    id: 'beneficio-3',
    title: '[Iniciativa a informar]',
    description:
      'Reservado para iniciativas destinadas aos associados. Nenhuma oferta está confirmada nesta versão.',
    icon: 'people',
    status: 'placeholder',
  },
];
export const news: NewsArticle[] = [
  {
    slug: 'espaco-de-dialogo',
    title: 'Um espaço para o diálogo com a categoria',
    excerpt:
      'Área reservada para apresentar os canais de participação e escuta da Attue.',
    category: 'Institucional',
    publishedAt: null,
    status: 'placeholder',
    illustration: 'collective',
    paragraphs: [
      '[PUBLICAÇÃO DEMONSTRATIVA — NÃO É UMA NOTÍCIA OFICIAL]',
      'Este espaço apresenta a estrutura de uma publicação institucional. O título, o resumo e o texto devem ser substituídos por conteúdo aprovado pela Attue.',
      '[INSERIR CONTEÚDO OFICIAL, AUTORIA E DATA DE PUBLICAÇÃO]',
    ],
  },
  {
    slug: 'comunicados-da-attue',
    title: 'Informação clara, em um só lugar',
    excerpt:
      'Espaço preparado para os próximos comunicados e informes institucionais.',
    category: 'Comunicados',
    publishedAt: null,
    status: 'placeholder',
    illustration: 'document',
    paragraphs: [
      '[PUBLICAÇÃO DEMONSTRATIVA — NÃO É UM COMUNICADO OFICIAL]',
      'Esta página está reservada para comunicados oficiais. Não há datas, decisões ou orientações confirmadas nesta publicação de exemplo.',
      '[INSERIR TEXTO OFICIAL APROVADO]',
    ],
  },
  {
    slug: 'participacao-coletiva',
    title: 'O coletivo começa com a participação',
    excerpt:
      'Área reservada para divulgar oportunidades oficiais de participação.',
    category: 'Participação',
    publishedAt: null,
    status: 'placeholder',
    illustration: 'dialogue',
    paragraphs: [
      '[PUBLICAÇÃO DEMONSTRATIVA — NÃO É UMA CONVOCAÇÃO]',
      'Este modelo está preparado para receber informações sobre participação. Nenhuma reunião, assembleia, local ou data está sendo anunciado.',
      '[INSERIR ATIVIDADE E ORIENTAÇÕES OFICIAIS]',
    ],
  },
];
