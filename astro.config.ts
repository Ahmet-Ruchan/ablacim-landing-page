import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Geçici test yayını (GitHub Pages) alt yolda çalışır; PUBLIC_BASE yalnız
// CI'da set edilir. Üretimde değişken yok → base '/' ve davranış aynı.
const base = process.env.PUBLIC_BASE ?? '/';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://www.ablacim.com',
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
