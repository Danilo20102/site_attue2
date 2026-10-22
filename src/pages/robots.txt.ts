import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => {
  const allow = import.meta.env.PUBLIC_ALLOW_INDEXING === 'true';
  return new Response(
    `User-agent: *\n${allow ? 'Allow: /' : 'Disallow: /'}\n${site ? `Sitemap: ${new URL('sitemap.xml', site).href}\n` : ''}`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
};
