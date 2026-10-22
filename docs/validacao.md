# Verificações executadas

Execução local em 21/10/2026, com Node 24.19.0, pnpm 11.25.0 e Chrome instalado no ambiente Linux.

| Verificação                      | Resultado                                                                                                                 |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `pnpm install --frozen-lockfile` | Instalação reproduzível, sem alterações no lockfile                                                                       |
| `pnpm build`                     | 16 páginas HTML e arquivos robots/sitemap; zero erros, avisos ou sugestões do verificador Astro/TypeScript em 40 arquivos |
| `pnpm test`                      | 40 testes passaram, nos perfis desktop e celular                                                                          |
| `pnpm test:seo`                  | 2 testes passaram com build de configuração de produção e rejeição de endpoint HTTP                                       |
| `pnpm audit --json`              | Zero vulnerabilidades conhecidas no momento da execução                                                                   |
| `pnpm format:check`              | Formatação consistente                                                                                                    |
| `git diff --check`               | Sem erros de espaços em branco                                                                                            |

Os 40 testes de navegador verificam as rotas, títulos e descrições, HTML pré-renderizado, links e imagens, navegação ativa, teclado e menu móvel, busca sem acentos, filtros combinados, estados vazios, formulários demonstrativos sem POST, ausência de armazenamento local, respostas de API simuladas, manutenção dos campos em caso de erro, protocolo obrigatório, funcionamento sem JavaScript, 404, robots e sitemap de homologação, telefone opcional e layout em 320, 768, 1024 e 1440 pixels, além do perfil Pixel 7.

O axe não identificou violações das regras WCAG A/AA habilitadas nas sete páginas principais em ambos os perfis (14 análises). A verificação automatizada não certifica acessibilidade integral. Não houve teste manual com leitor de tela nem teste em Safari ou Firefox.

Capturas da página inicial e do contato foram inspecionadas visualmente nas versões desktop e celular. As prévias estão em [desktop](previews/inicio-desktop.png) e [celular](previews/inicio-mobile.png).

O teste de SEO usa domínios reservados `.invalid` exclusivamente em uma saída temporária, removida ao fim da execução. Nenhum domínio foi atribuído oficialmente à Attue. A integração de formulários foi exercitada com respostas interceptadas no navegador; nenhum serviço externo real recebeu dados.

## Limites da entrega

Não foram conectados banco de dados, CMS, painel administrativo ou canais de recebimento. O SQL é uma proposta não aplicada. Não houve implantação em hospedagem de produção. Os dados oficiais e os documentos legais permanecem pendentes de validação, e a indexação pública está desabilitada por padrão.

Para o ambiente restrito desta execução, foram usados `ASTRO_TELEMETRY_DISABLED=1`, `PLAYWRIGHT_EXECUTABLE_PATH=/usr/bin/google-chrome` e a configuração local de store do pnpm. A validação de navegador precisou permitir a abertura do servidor em loopback. Esses ajustes são próprios do ambiente e não representam dependências do site.
