import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const cli = join(root, 'node_modules/astro/bin/astro.mjs');

test('build configurado gera canonical, sitemap e formulários sem indexar notícias de exemplo', () => {
  const output = mkdtempSync(join(tmpdir(), 'attue-seo-'));
  try {
    execFileSync(process.execPath, [cli, 'build', '--outDir', output], {
      cwd: root,
      env: {
        ...process.env,
        ASTRO_TELEMETRY_DISABLED: '1',
        SITE_URL: 'https://attue.example.invalid',
        PUBLIC_ALLOW_INDEXING: 'true',
        PUBLIC_CONTACT_ENDPOINT: 'https://api.example.invalid/contact',
        PUBLIC_ASSOCIATION_ENDPOINT: 'https://api.example.invalid/association',
      },
      timeout: 30000,
      stdio: 'pipe',
    });
    const read = (path) => readFileSync(join(output, path), 'utf8');
    const about = read('sobre/index.html');
    assert.match(
      about,
      /rel="canonical"[^>]*href="https:\/\/attue\.example\.invalid\/sobre\/"/,
    );
    assert.match(about, /content="index, follow"/);
    assert.match(about, /application\/ld\+json/);
    assert.match(read('robots.txt'), /Allow: \//);
    assert.match(
      read('sitemap.xml'),
      /https:\/\/attue\.example\.invalid\/sobre\//,
    );
    assert.doesNotMatch(
      read('sitemap.xml'),
      /espaco-de-dialogo|comunicados-da-attue|participacao-coletiva/,
    );
    assert.match(
      read('noticias/espaco-de-dialogo/index.html'),
      /content="noindex, follow"/,
    );
    assert.match(read('privacidade/index.html'), /content="noindex, follow"/);
    assert.match(
      read('contato/index.html'),
      /data-endpoint="https:\/\/api\.example\.invalid\/contact"/,
    );
    assert.match(read('contato/index.html'), /Enviar mensagem/);
    assert.match(read('associacao/index.html'), /Enviar interesse/);
  } finally {
    rmSync(output, { recursive: true, force: true });
  }
});

test('build rejeita recebimento de dados por HTTP sem criptografia', () => {
  const output = mkdtempSync(join(tmpdir(), 'attue-endpoint-'));
  try {
    assert.throws(
      () =>
        execFileSync(process.execPath, [cli, 'build', '--outDir', output], {
          cwd: root,
          env: {
            ...process.env,
            ASTRO_TELEMETRY_DISABLED: '1',
            PUBLIC_CONTACT_ENDPOINT: 'http://api.example.invalid/contact',
          },
          timeout: 30000,
          stdio: 'pipe',
        }),
      /Endpoints de formulário devem usar HTTPS/,
    );
  } finally {
    rmSync(output, { recursive: true, force: true });
  }
});
