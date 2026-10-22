# Attue · site institucional

Base institucional em **Astro 7 + TypeScript estrito**, com HTML pré-renderizado, CSS responsivo, fonte local e JavaScript somente para menu, busca e formulários. Substitui a implementação React/Vite anterior para entregar conteúdo e metadados mesmo sem JavaScript.

## Executar

Use **Node.js 24 LTS** (`.nvmrc`) e pnpm 11.25. Versão mínima: Node 24.15.

```sh
nvm install
nvm use
npm install -g pnpm@11.25.0
pnpm install --frozen-lockfile
cp .env.example .env
pnpm dev
```

Abra `http://127.0.0.1:4321`. Não é necessário configurar banco de dados ou credenciais para executar a versão demonstrativa.

```sh
pnpm check      # TypeScript e templates Astro
pnpm build      # verificação + geração estática em dist/
pnpm test:seo    # canonical, sitemap, indexação e configuração de endpoints
pnpm preview    # servir o build para revisão
pnpm exec playwright install chromium
pnpm test           # testes de navegador em desktop e celular
```

Em Linux sem bibliotecas de navegador: `pnpm exec playwright install --with-deps chromium`. Para usar um Chrome já instalado, defina `PLAYWRIGHT_EXECUTABLE_PATH=/caminho/do/chrome` ao executar os testes. O relatório fica em `playwright-report/` e as capturas em `test-results/`.

## Páginas e recursos

- Início com banner, apresentação, serviços, benefícios, publicações e chamada para associação.
- Sobre, Serviços, Benefícios, Notícias, Associação e Contato.
- Detalhes das publicações, Documentos, Agenda, FAQ, Privacidade, Termos e 404.
- Cabeçalho, navegação ativa e móvel, rodapé, botões, ícones e cartões reutilizáveis.
- Busca de publicações sem distinção de acentos, filtros combinados e estado vazio.
- Formulários com validação, estado de envio, recuperação de erro e confirmação mediante protocolo do servidor.
- Link de salto, foco visível, teclado, marcação semântica, redução de movimento e testes automatizados com axe.
- Títulos, descrições e Open Graph por página; canonical e dados estruturados com domínio configurado; robots e sitemap gerados no build.

## Estrutura

```text
src/
  components/      elementos reutilizáveis
  data/            conteúdo e campos institucionais
  layouts/         documento, SEO e estrutura compartilhada
  lib/             adaptador de conteúdo
  pages/           rotas pré-renderizadas
  scripts/         interações no navegador
  styles/          tokens e estilos responsivos
  types/           contratos de conteúdo e repositório
public/            favicon e ilustração SVG local
tests/             testes de navegador, integração simulada e acessibilidade
docs/              arquitetura, integração e modelo de banco
.github/workflows/ci.yml
```

## Conteúdo oficial e formulários

Somente o nome **Attue** e a identificação como **sindicato profissional** foram fornecidos como fatos. Identidade visual e frases de campanha são propostas. Contatos, diretoria, história, serviços, benefícios e condições estão marcados como placeholders. Publicações são exemplos explicitamente identificados, sem datas inventadas. Documentos e agenda apresentam estados vazios.

Sem `PUBLIC_CONTACT_ENDPOINT` e `PUBLIC_ASSOCIATION_ENDPOINT`, o botão **Conferir dados** valida no navegador e informa que nada foi enviado. A aplicação não grava esses dados em armazenamento local. Sem JavaScript, o botão fica desabilitado para evitar envio involuntário pela URL.

Os endpoints opcionais devem usar HTTPS e cumprir o contrato de [integração](docs/integracoes.md). Variáveis `PUBLIC_*` são públicas; nunca colocar senhas ou chaves nelas. O painel administrativo e o banco ainda não estão implementados.

## Configuração e publicação

`SITE_URL` deve receber a origem oficial, por exemplo em `.env`, **após a validação do domínio**. Enquanto ela não estiver definida, não há canonical nem domínio fictício nos metadados. O sitemap permanece vazio na homologação.

`PUBLIC_ALLOW_INDEXING=false` é o padrão para evitar indexar placeholders. Após substituir e aprovar os conteúdos, definir `PUBLIC_ALLOW_INDEXING=true`, configurar `SITE_URL` e gerar novo build. Exemplos de notícias e páginas legais provisórias continuam com `noindex` mesmo com indexação habilitada; artigos demonstrativos ficam fora do sitemap.

Publique a pasta `dist/` em um host estático que sirva `rota/index.html` em `/rota/` e utilize `404.html` para páginas inexistentes. Não aplicar fallback universal para `index.html`, pois isso ocultaria erros 404. O site assume publicação na raiz de um domínio; hospedagem em subpasta exige adaptar os caminhos absolutos e o `base` do Astro.

A integração contínua executa instalação reproduzível, build e testes. O workflow preexistente de mapa do projeto foi mantido. O CI não publica automaticamente.

## Evolução e pendências

Veja [arquitetura](docs/arquitetura.md), [contratos de integração](docs/integracoes.md) e [modelo SQL proposto](docs/database.example.sql).

Os resultados efetivamente executados e seus limites estão no [registro de validação](docs/validacao.md), com prévias para desktop e celular.

Antes da operação definitiva: aprovar marca e conteúdo, fornecer contatos e domínio, revisar os documentos legais, implementar recebimento seguro dos formulários e definir CMS, banco e autenticação administrativa. Os testes automatizados não substituem revisão humana de conteúdo, acessibilidade com tecnologia assistiva e validação nos navegadores finais.
