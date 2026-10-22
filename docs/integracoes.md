# Contratos para futuras integrações

## Recebimento de formulários

Configurar `PUBLIC_CONTACT_ENDPOINT` e/ou `PUBLIC_ASSOCIATION_ENDPOINT` com uma URL HTTPS. O cliente envia POST JSON sem cookies. Em domínio separado, o servidor deve responder ao preflight e permitir a origem oficial e o cabeçalho `Content-Type` em CORS.

```json
{
  "kind": "contact",
  "fullName": "Pessoa de Exemplo",
  "email": "pessoa@example.com",
  "subject": "informacoes",
  "message": "Mensagem ilustrativa para o contrato.",
  "privacyAcknowledged": true,
  "website": ""
}
```

`kind`: `contact` ou `association`. Associação pode incluir `phone` opcional e não exige `subject` ou `message`. Campos opcionais ausentes não devem impedir o recebimento.

O servidor deve repetir a validação: nome entre 3 e 120 caracteres após trim; e-mail válido até 254; mensagem de contato entre 10 e 3000; mensagem de associação até 3000; assunto de contato em `informacoes`, `associacao` ou `outros`; telefone opcional entre 8 e 25 caracteres, somente números, espaços, parênteses, +, ponto e hífen; ciência de privacidade obrigatória. O campo-armadilha `website` deve permanecer vazio, mas não substitui proteção contra abuso.

Confirmar persistência/recebimento antes de responder com HTTP 2xx e:

```json
{ "ok": true, "requestId": "protocolo-gerado-pelo-servidor" }
```

Somente essa resposta produz sucesso na interface. Falhas HTTP, JSON inválido, `ok` ausente ou protocolo vazio mostram erro e preservam os campos. Há cancelamento após 10 segundos; como um timeout não garante que o servidor não processou a mensagem, a interface apenas informa que o recebimento não pôde ser confirmado. Implementar idempotência no servidor antes de fluxos que não possam tolerar duplicatas.

## Requisitos do backend a implementar

- Endpoints, persistência e autenticação de administração não fazem parte do build estático.
- Validar, normalizar e limitar o payload; aplicar limites de requisição e proteção de abuso no servidor.
- Usar consultas parametrizadas, registros privados e acesso restrito; nunca enviar credenciais no cliente.
- Registrar protocolo, finalidade e versão do aviso aprovado; definir retenção e exclusão.
- Configurar CORS por origem, TLS e cabeçalhos de segurança no host.
- Não registrar conteúdo pessoal em logs de acesso ou análise.

## Conteúdo e banco

O adaptador de conteúdo é assíncrono e suporta troca por API/CMS. Publicações devem conservar slug único, título, resumo, categoria, estado, data real e corpo editorial. O modelo atual usa parágrafos de texto escapados por Astro. Se um futuro CMS oferecer HTML, sanitizar no servidor antes de renderizar.

O arquivo SQL é uma proposta de estrutura, não uma migração aplicada nem evidência de banco conectado. Ao escolher um provedor, adaptar autenticação, políticas de acesso, backups, migrações e trilha de auditoria ao ambiente real.
