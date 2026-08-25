/**
 * sitemap.xml — build sırasında dosyaya dönüşür (output: 'static').
 *
 * @astrojs/sitemap KURULMADI: site üç sayfadan ibaret (/, /tr/, /en/) ve
 * bu makinede `pnpm install` corepack yüzünden TTY onayı istiyor (bkz.
 * DEVIR-NOTU §2). Yeni bağımlılık, kazandırdığından çok sürtünme getirirdi.
 *
 * Kök (/) BİLEREK YOK: o yalnızca /tr/'ye yönlendiren bir rota, kendi
 * içeriği yok. Arama motoruna iki gerçek sayfa veriliyor ve ikisi de
 * hreflang ile birbirini gösteriyor — Base.astro'daki etiketlerle aynı
 * çift, orada da x-default kökü işaret ediyor.
 */
import type { APIRoute } from 'astro';

const LOCALES = ['tr', 'en'] as const;

export const GET: APIRoute = ({ site }) => {
  const url = (path: string) => new URL(path, site).href;

  const entries = LOCALES.map((locale) => {
    const alternates = LOCALES.map(
      (other) =>
        `    <xhtml:link rel="alternate" hreflang="${other}" href="${url(`${other}/`)}"/>`,
    ).join('\n');

    return [
      '  <url>',
      `    <loc>${url(`${locale}/`)}</loc>`,
      alternates,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${url('')}"/>`,
      '  </url>',
    ].join('\n');
  }).join('\n');

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    entries,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
