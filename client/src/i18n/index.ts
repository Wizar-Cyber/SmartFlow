import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
import es from './locales/es.json';
import en from './locales/en.json';

const resources = {
  es: {
    translation: es
  },
  en: {
    translation: en
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es', // Default to Spanish
    debug: process.env.NODE_ENV === 'development',

    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie']
    },

    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;