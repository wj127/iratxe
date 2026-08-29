import canaryFlagUrl from '../assets/Flag_of_the_Canary_Islands_(simple).svg?url';
import basqueFlagUrl from '../assets/Flag_of_the_Basque_Country.svg?url';
import ukFlagUrl from '../assets/Flag-United-Kingdom.webp?url';
import irelandFlagUrl from '../assets/Flag_of_Ireland.svg?url';
import franceFlagUrl from '../assets/Flag_of_France.svg.webp?url';
import italyFlagUrl from '../assets/Flag_of_Italy.svg.webp?url';
import germanyFlagUrl from '../assets/flag-for-flag-germany.svg?url';

export type LocaleCode = 'es' | 'eu' | 'en' | 'ga' | 'fr' | 'it' | 'de';

// Locales that carry their own set of translations. `ga` intentionally reuses
// the English strings/content, so it is not part of this union.
export type StringsLocale = 'es' | 'eu' | 'en' | 'fr' | 'it' | 'de';

export type Locale = {
  code: LocaleCode;
  nativeName: string;
  flagUrl: string;
  flagAlt: string;
  // When set, the locale reuses another locale's translations.
  alias?: StringsLocale;
};

export const DEFAULT_LOCALE: LocaleCode = 'es';

export const STORAGE_KEY = 'iratxe.locale';

export const LOCALES: Locale[] = [
  { code: 'es', nativeName: 'Español', flagUrl: canaryFlagUrl, flagAlt: 'Bandera de Canarias' },
  { code: 'eu', nativeName: 'Euskara', flagUrl: basqueFlagUrl, flagAlt: 'Euskal Herriko bandera' },
  { code: 'en', nativeName: 'English', flagUrl: ukFlagUrl, flagAlt: 'Flag of the United Kingdom' },
  { code: 'ga', nativeName: 'Gaeilge', flagUrl: irelandFlagUrl, flagAlt: 'Bratach na hÉireann', alias: 'en' },
  { code: 'fr', nativeName: 'Français', flagUrl: franceFlagUrl, flagAlt: 'Drapeau de la France' },
  { code: 'it', nativeName: 'Italiano', flagUrl: italyFlagUrl, flagAlt: "Bandiera d'Italia" },
  { code: 'de', nativeName: 'Deutsch', flagUrl: germanyFlagUrl, flagAlt: 'Flagge Deutschlands' },
];

const LOCALE_BY_CODE = new Map<LocaleCode, Locale>(LOCALES.map((locale) => [locale.code, locale]));

export function getLocale(code: LocaleCode): Locale {
  return LOCALE_BY_CODE.get(code) ?? LOCALES[0];
}

function isSupportedLocale(value: string): value is LocaleCode {
  return LOCALE_BY_CODE.has(value as LocaleCode);
}

// Resolves which translation set a locale should use (applies aliases, e.g. ga -> en).
export function resolveStringsLocale(code: LocaleCode): StringsLocale {
  const locale = getLocale(code);
  return locale.alias ?? (code as StringsLocale);
}

function matchBrowserLanguage(languages: readonly string[]): LocaleCode | null {
  for (const language of languages) {
    const primarySubtag = language.toLowerCase().split('-')[0];

    if (isSupportedLocale(primarySubtag)) {
      return primarySubtag;
    }
  }

  return null;
}

// Reads the persisted locale, otherwise auto-detects from the browser, otherwise
// falls back to the default locale. Safe to call during SSR (returns default).
export function detectLocale(): LocaleCode {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (stored && isSupportedLocale(stored)) {
    return stored;
  }

  const browserLanguages =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

  return matchBrowserLanguage(browserLanguages) ?? DEFAULT_LOCALE;
}
