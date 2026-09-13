export interface LocaleMeta {
  /** Folder name / URL prefix, e.g. `pt-br` */
  code: string;
  /** Self-referencing native name shown in the language switcher, e.g. `Português (Brasil)` */
  nativeLabel: string;
  /** BCP 47 hreflang value, e.g. `pt-BR` */
  hreflang: string;
  /** Value for `<html lang>` */
  htmlLang: string;
  /** Value for `og:locale`, e.g. `pt_BR` */
  ogLocale: string;
  /** BCP 47 tag passed to Intl APIs */
  intlLocale: string;
}

export const locales = ['en', 'es', 'ja', 'fr', 'de', 'pt-br', 'ko', 'it'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: {
    code: 'en',
    nativeLabel: 'English',
    hreflang: 'en',
    htmlLang: 'en',
    ogLocale: 'en_US',
    intlLocale: 'en',
  },
  es: {
    code: 'es',
    nativeLabel: 'Español',
    hreflang: 'es',
    htmlLang: 'es',
    ogLocale: 'es_ES',
    intlLocale: 'es',
  },
  ja: {
    code: 'ja',
    nativeLabel: '日本語',
    hreflang: 'ja',
    htmlLang: 'ja',
    ogLocale: 'ja_JP',
    intlLocale: 'ja',
  },
  fr: {
    code: 'fr',
    nativeLabel: 'Français',
    hreflang: 'fr',
    htmlLang: 'fr',
    ogLocale: 'fr_FR',
    intlLocale: 'fr',
  },
  de: {
    code: 'de',
    nativeLabel: 'Deutsch',
    hreflang: 'de',
    htmlLang: 'de',
    ogLocale: 'de_DE',
    intlLocale: 'de',
  },
  'pt-br': {
    code: 'pt-br',
    nativeLabel: 'Português (Brasil)',
    hreflang: 'pt-BR',
    htmlLang: 'pt-BR',
    ogLocale: 'pt_BR',
    intlLocale: 'pt-BR',
  },
  ko: {
    code: 'ko',
    nativeLabel: '한국어',
    hreflang: 'ko',
    htmlLang: 'ko',
    ogLocale: 'ko_KR',
    intlLocale: 'ko',
  },
  it: {
    code: 'it',
    nativeLabel: 'Italiano',
    hreflang: 'it',
    htmlLang: 'it',
    ogLocale: 'it_IT',
    intlLocale: 'it',
  },
};

/** All locales except the default one — the routes that live under `src/pages/[lang]/`. */
export const nonDefaultLocales: Locale[] = locales.filter(
  (locale) => locale !== defaultLocale,
);

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}
