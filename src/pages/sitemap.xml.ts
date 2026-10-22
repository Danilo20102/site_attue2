import type { APIRoute } from 'astro';
import { contentRepository } from '@/lib/content-repository';
const escapeXML = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
export const GET: APIRoute = async ({ site }) => {
  const baseRoutes = [
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
  ];
  const published = (await contentRepository.getNews())
    .filter((article) => article.status === 'published')
    .map((article) => `/noticias/${article.slug}/`);
  const entries =
    site && import.meta.env.PUBLIC_ALLOW_INDEXING === 'true'
      ? [...baseRoutes, ...published]
          .map(
            (path) =>
              `<url><loc>${escapeXML(new URL(path, site).href)}</loc></url>`,
          )
          .join('')
      : '';
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
