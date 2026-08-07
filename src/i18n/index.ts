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
  return `/${locale}/`;
}
