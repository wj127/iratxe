import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { STORAGE_KEY, detectLocale, type LocaleCode } from './config';
import { translate, type UIStringKey } from './ui';

type LanguageContextValue = {
  locale: LocaleCode;
  setLocale: (locale: LocaleCode) => void;
  translate: (key: UIStringKey, params?: Record<string, string | number>) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>(() => detectLocale());

  const setLocale = useCallback((next: LocaleCode) => {
    setLocaleState(next);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      translate: (key, params) => translate(locale, key, params),
    }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLocale() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLocale must be used within a LanguageProvider');
  }

  return context;
}
