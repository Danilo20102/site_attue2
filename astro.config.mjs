import { defineConfig } from 'astro/config';
import { existsSync } from 'node:fs';
import { loadEnvFile } from 'node:process';

if (existsSync('.env')) loadEnvFile('.env');
const configuredSite = process.env.SITE_URL;
if (configuredSite && !/^https?:\/\//.test(configuredSite)) {
  throw new Error('SITE_URL deve ser uma URL absoluta http(s).');
}
export default defineConfig({
  site: configuredSite,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  vite: { server: { strictPort: true } },
});
