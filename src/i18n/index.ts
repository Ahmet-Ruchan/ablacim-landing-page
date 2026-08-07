import { tr } from './tr';
import { en } from './en';

export const locales = ['tr', 'en'] as const;
export type Locale = (typeof locales)[number];

/** TR sözlüğün şekli iki dil için de bağlayıcı — anahtar eksiği derlemede yakalanır. */
export type Dict = typeof tr;

const dicts: Record<Locale, Dict> = { tr, en };

export function t(locale: Locale): Dict {
  return dicts[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'tr' ? 'en' : 'tr';
}

export function localePath(locale: Locale): string {
  // base-farkındalı: üretimde '/' → '/tr/', test yayınında alt yol korunur
  const base = import.meta.env.BASE_URL;
  return `${base.endsWith('/') ? base.slice(0, -1) : base}/${locale}/`;
}
