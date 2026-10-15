import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { Language, Translations, TRANSLATIONS } from '../data/translations';

interface LanguageContextType {
  language: Language;
  isRtl: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const STORAGE_KEY = 'titan_language';

const getInitialLanguage = (): Language => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'ar') {
        return saved;
      }
    }
  } catch {
    // Ignore storage errors (private browsing or iframe restrictions)
  }
  return 'en';
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(STORAGE_KEY, lang);
      }
    } catch {
      // Ignore storage errors
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const isRtl = language === 'ar';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
      if (isRtl) {
        document.documentElement.classList.add('font-arabic');
      } else {
        document.documentElement.classList.remove('font-arabic');
      }
    }
  }, [language, isRtl]);

  const value = useMemo(() => {
    return {
      language,
      isRtl,
      setLanguage,
      toggleLanguage,
      t: TRANSLATIONS[language]
    };
  }, [language, isRtl]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
