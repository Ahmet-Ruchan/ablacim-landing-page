import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/*
 * 25 Ağu: site kendi alan adına taşındı — app.ablacim.com (GitHub Pages,
 * özel domain). Artık ALT YOLDA DEĞİL, kökte çalışıyor; PUBLIC_BASE bu
 * yüzden iş akışında set edilmiyor ve base '/' kalıyor.
 *
 * Değişken yine de duruyor: ileride bir önizleme yayını alt yola konarsa
 * withBase() zinciri hazır. Set edilmediği sürece hiçbir etkisi yok.
 */
const base = process.env.PUBLIC_BASE ?? '/';

export default defineConfig({
  /*
   * BU SİTENİN adresi. src/site.config.ts'teki siteUrl AYNI değişkeni okur
   * (PUBLIC_SITE_URL); canonical/hreflang ile Astro'nun `site` alanı
   * ayrışmasın diye tek kaynak. www.ablacim.com ANA SİTEDİR — oraya yalnız
   * site.config.ts'teki webAppUrl ve legal.* gider, buraya yazılmaz.
   */
  site: process.env.PUBLIC_SITE_URL ?? 'https://app.ablacim.com',
  base,
  output: 'static',
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
    routing: {
      // BRIEF-EK S-2: URL yolu /tr ve /en; kök / → /tr
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
