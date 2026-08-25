/**
 * robots.txt — build sırasında dosyaya dönüşür (output: 'static').
 *
 * NEDEN ENDPOINT, NEDEN public/ DEĞİL: sitemap satırı mutlak adres ister.
 * public/robots.txt sabit metin olurdu ve alan adı değişince sessizce
 * yanlış adresi göstermeye devam ederdi. Burada `site` alanından türüyor,
 * yani astro.config.ts ile tek kaynaktan.
 *
 * Karar (25 Ağu): sayfa arama motorlarına AÇIK. Sahip kararı — ablacim.com'un
 * kendi landing'i de indeksli olduğu için iki sayfa aynı kelimelerde
 * yarışabilir; risk bilinerek alındı. Kapatmak gerekirse Disallow: / yeter.
 */
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap.xml', site).href;

  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${sitemap}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
