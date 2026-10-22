import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const routes = [
  '/',
  '/sobre/',
  '/servicos/',
  '/beneficios/',
  '/noticias/',
  '/associacao/',
  '/contato/',
  '/documentos/',
  '/agenda/',
  '/faq/',
  '/privacidade/',
  '/termos/',
  '/noticias/espaco-de-dialogo/',
  '/noticias/comunicados-da-attue/',
  '/noticias/participacao-coletiva/',
];

test('todas as rotas carregam com SEO, conteúdo pré-renderizado e sem overflow', async ({
  page,
  request,
}) => {
  const titles = new Set<string>();
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /\S.{40,}/,
    );
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, follow',
    );
    const title = await page.title();
    expect(titles.has(title), `Título exclusivo: ${route}`).toBe(false);
    titles.add(title);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      route,
    ).toBe(true);
    const raw = await request.get(route);
    expect(await raw.text()).toContain('<h1');
  }
  expect(errors).toEqual([]);
});

test('links internos e imagens apontam para recursos existentes', async ({
  page,
  request,
}) => {
  const links = new Set<string>();
  for (const route of [
    '/',
    '/sobre/',
    '/noticias/',
    '/associacao/',
    '/contato/',
  ]) {
    await page.goto(route);
    const paths = await page
      .locator('a[href^="/"]')
      .evaluateAll((elements) =>
        elements.map((el) => el.getAttribute('href')!.split('#')[0]),
      );
    paths.forEach((path) => links.add(path));
    for (const img of await page.locator('img').all()) {
      await expect(img).toHaveJSProperty('complete', true);
      expect(
        await img.evaluate((el) => (el as HTMLImageElement).naturalWidth),
      ).toBeGreaterThan(0);
    }
  }
  for (const link of links)
    expect((await request.get(link)).status(), link).toBe(200);
});

for (const route of [
  '/',
  '/sobre/',
  '/servicos/',
  '/beneficios/',
  '/noticias/',
  '/associacao/',
  '/contato/',
]) {
  test(`acessibilidade automatizada WCAG A/AA: ${route}`, async ({ page }) => {
    await page.goto(route);
    await page.evaluate(() => document.fonts.ready);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}

test('navegação e menu móvel funcionam por teclado', async ({ page }, info) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('link', { name: 'Pular para o conteúdo' }),
  ).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#conteudo')).toBeFocused();
  if (info.project.name === 'mobile') {
    const menu = page.getByRole('button', { name: /^(Menu|Fechar)$/ });
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await menu.click();
    await expect(menu).toHaveAttribute('aria-expanded', 'true');
    await page
      .getByRole('navigation', { name: 'Navegação principal' })
      .getByRole('link', { name: 'Sobre', exact: true })
      .focus();
    await page.keyboard.press('Escape');
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await expect(menu).toBeFocused();
    await menu.click();
  }
  await page
    .getByRole('navigation', { name: 'Navegação principal' })
    .getByRole('link', { name: 'Sobre', exact: true })
    .click();
  await expect(page).toHaveURL('/sobre/');
  if (info.project.name === 'mobile') {
    await page.getByRole('button', { name: 'Menu', exact: true }).click();
  }
  await expect(
    page
      .getByRole('navigation', { name: 'Navegação principal' })
      .getByRole('link', { name: 'Sobre', exact: true }),
  ).toHaveAttribute('aria-current', 'page');
});

test('busca ignora acentos, combina filtros e permite recuperar estado vazio', async ({
  page,
}) => {
  await page.goto('/noticias/');
  await page.getByRole('button', { name: 'Comunicados', exact: true }).click();
  await expect(page.locator('[data-news-card]:visible')).toHaveCount(1);
  await expect(
    page.getByRole('button', { name: 'Comunicados', exact: true }),
  ).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('button', { name: 'Todas', exact: true }).click();
  await page.getByRole('searchbox').fill('dialogo');
  await expect(page.locator('[data-news-card]:visible')).toHaveCount(1);
  await page.getByRole('searchbox').fill('sem-resultado-xyz');
  await expect(
    page.getByRole('heading', { name: 'Nenhuma publicação encontrada.' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Limpar filtros' }).click();
  await expect(page.locator('[data-news-card]:visible')).toHaveCount(3);
});

async function fillForm(
  page: Page,
  kind: 'contact' | 'association' = 'contact',
) {
  await page.locator(`#${kind}-name`).fill('Pessoa de Teste');
  await page.locator(`#${kind}-email`).fill('teste@example.com');
  if (kind === 'contact')
    await page.locator('#contact-subject').selectOption('informacoes');
  await page
    .locator(`#${kind}-message`)
    .fill('Mensagem fictícia para testar o formulário.');
  await page.locator('input[name="privacyAcknowledged"]').check();
}

for (const [route, kind] of [
  ['/contato/', 'contact'],
  ['/associacao/', 'association'],
] as const) {
  test(`formulário ${kind} valida e deixa explícito que a demonstração não envia dados`, async ({
    page,
  }) => {
    const posts: string[] = [];
    page.on('request', (request) => {
      if (request.method() === 'POST') posts.push(request.url());
    });
    await page.goto(route);
    await page.getByRole('button', { name: 'Conferir dados' }).click();
    expect(
      await page
        .locator('form')
        .evaluate((form) => (form as HTMLFormElement).checkValidity()),
    ).toBe(false);
    await fillForm(page, kind);
    await page.getByRole('button', { name: 'Conferir dados' }).click();
    await expect(page.getByRole('status')).toContainText(
      'nenhuma mensagem foi enviada',
    );
    expect(posts).toEqual([]);
    expect(
      await page.evaluate(() => ({
        local: localStorage.length,
        session: sessionStorage.length,
      })),
    ).toEqual({ local: 0, session: 0 });
  });
}

test('camada de envio trata erro e confirmação real sem perder dados', async ({
  page,
}) => {
  await page.goto('/contato/');
  await page
    .locator('form')
    .evaluate((form) =>
      form.setAttribute('data-endpoint', 'https://api.example.com/contact'),
    );
  await page.route('https://api.example.com/contact', (route) =>
    route.fulfill({
      status: 503,
      contentType: 'application/json',
      body: JSON.stringify({ ok: false }),
    }),
  );
  await fillForm(page);
  await page.getByRole('button', { name: 'Conferir dados' }).click();
  await expect(page.getByRole('status')).toContainText(
    'Não foi possível confirmar',
  );
  await expect(page.locator('#contact-name')).toHaveValue('Pessoa de Teste');
  await page.unroute('https://api.example.com/contact');
  await page.route('https://api.example.com/contact', async (route) => {
    expect(route.request().postDataJSON()).toMatchObject({
      kind: 'contact',
      fullName: 'Pessoa de Teste',
      privacyAcknowledged: true,
    });
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, requestId: 'TEST-123' }),
    });
  });
  await page.getByRole('button', { name: 'Conferir dados' }).click();
  await expect(page.getByRole('status')).toContainText('Protocolo: TEST-123');
  await expect(page.locator('#contact-name')).toHaveValue('');
});

test('HTTP 200 sem protocolo não produz falso sucesso', async ({ page }) => {
  await page.goto('/contato/');
  await page
    .locator('form')
    .evaluate((form) =>
      form.setAttribute('data-endpoint', 'https://api.example.com/contact'),
    );
  await page.route('https://api.example.com/contact', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: '{"ok":true}',
    }),
  );
  await fillForm(page);
  await page.getByRole('button', { name: 'Conferir dados' }).click();
  await expect(page.getByRole('status')).toContainText(
    'Não foi possível confirmar',
  );
});

test('conteúdo, menu e FAQ funcionam sem JavaScript; envio fica bloqueado', async ({
  browser,
  baseURL,
}, info) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    baseURL,
    viewport:
      info.project.name === 'mobile'
        ? { width: 390, height: 844 }
        : { width: 1440, height: 1000 },
  });
  const page = await context.newPage();
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(
    page
      .getByRole('navigation', { name: 'Navegação principal' })
      .getByRole('link', { name: 'Sobre', exact: true }),
  ).toBeVisible();
  await page.goto('/faq/');
  await page
    .getByText('Quem pode se associar à Attue?', { exact: true })
    .click();
  await expect(page.getByText(/REGRA OFICIAL DE ELEGIBILIDADE/)).toBeVisible();
  await page.goto('/contato/');
  await expect(
    page.getByRole('button', { name: 'Conferir dados' }),
  ).toBeDisabled();
  await context.close();
});

test('404, robots e sitemap de homologação são coerentes', async ({
  page,
  request,
}) => {
  expect((await page.goto('/pagina-inexistente-xyz/'))?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Este caminho ainda não existe',
  );
  const robots = await request.get('/robots.txt');
  expect(await robots.text()).toContain('Disallow: /');
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).not.toContain('<loc>');
});

test('capturas para revisão visual', async ({ page }, info) => {
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({
    path: `test-results/inicio-viewport-${info.project.name}.png`,
  });
  await page.screenshot({
    path: `test-results/inicio-${info.project.name}.png`,
    fullPage: true,
  });
  await page.goto('/contato/');
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({
    path: `test-results/contato-${info.project.name}.png`,
    fullPage: true,
  });
});

test('layout não transborda em telas de 320px, tablet e computador compacto', async ({
  page,
}) => {
  for (const width of [320, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      '/',
      '/sobre/',
      '/servicos/',
      '/beneficios/',
      '/noticias/',
      '/associacao/',
      '/contato/',
    ]) {
      await page.goto(route);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        `${route} em ${width}px`,
      ).toBe(true);
    }
  }
});

test('telefone opcional aceita formato brasileiro e rejeita caracteres inválidos', async ({
  page,
}) => {
  await page.goto('/associacao/');
  const phone = page.locator('#association-phone');
  await phone.fill('(71) 99999-1234');
  expect(
    await phone.evaluate((el) => (el as HTMLInputElement).checkValidity()),
  ).toBe(true);
  await phone.fill('telefoneincorreto');
  expect(
    await phone.evaluate((el) => (el as HTMLInputElement).checkValidity()),
  ).toBe(false);
});
