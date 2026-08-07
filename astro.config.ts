import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.ablacim.com',
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
