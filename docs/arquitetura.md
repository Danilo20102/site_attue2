# Arquitetura

## Decisões

Astro gera HTML estático por rota. É adequado a conteúdo institucional e evita depender de um aplicativo JavaScript para renderizar informações e SEO. Não há runtime de servidor obrigatório nem credenciais no cliente. Fonte DM Sans e ilustrações SVG são locais; não há dependência visual de serviços externos.

O layout compartilhado controla estrutura semântica, navegação, rodapé e metadados. Os componentes recebem propriedades tipadas. O CSS utiliza camadas, tokens de cores e tipografia, grade adaptável e suporte a redução de movimento. O menu mantém a navegação acessível sem JavaScript, e os formulários ficam bloqueados nesse caso.

## Conteúdo e administração futura

`src/types/content.ts` define o contrato `ContentRepository`; `src/lib/content-repository.ts` implementa o adaptador local. Para conectar um CMS ou banco, criar outro adaptador com os mesmos métodos e substituir somente a composição do repositório.

O carregamento atual ocorre no build. Após edições no CMS, um webhook deve disparar uma reconstrução. Conteúdo em tempo real pode exigir um adaptador de servidor e rotas de API. Essa mudança deve ser explícita; o build estático atual não executa consultas no servidor após a publicação.

O futuro painel deve ter autenticação no servidor, papéis separados de autor/editor/administrador, rascunho, revisão, publicação, histórico e auditoria. O painel não deve expor chaves administrativas ou consultas diretas do navegador a tabelas de mensagens. Não existe login demonstrativo ou rota administrativa que simule segurança.

`docs/database.example.sql` propõe tabelas de publicações e solicitações. É um ponto de partida não executado, sem vínculo com um provedor de banco. As tabelas de solicitações são privadas e não pertencem à API pública de conteúdo.

## SEO e estados de conteúdo

`placeholder` representa conteúdo de demonstração; `published` deve ser usado somente para material aprovado. Preencher data de publicação real ao promover uma notícia. Páginas de exemplo sempre têm `noindex` e não entram no sitemap. O domínio oficial é opcional durante desenvolvimento e obrigatório para canonical/dados estruturados na operação definitiva.

## Verificação

O build executa a verificação Astro/TypeScript. Os testes Playwright usam Chromium nos perfis desktop e celular, cobrem as rotas, links, HTML sem JavaScript, filtros, formulários e estados de rede simulados. O axe analisa as sete páginas principais pelas regras WCAG A/AA disponíveis. Esse teste automatizado não certifica conformidade integral.

O workflow existente `cortex.yml` não foi alterado. O workflow `ci.yml` acrescentado verifica o site sem publicar ou alterar conteúdo.
