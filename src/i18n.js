import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enDict from './locals/en.json';
import arDict from './locals/ar.json';
import frDict from './locals/fr.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: frDict },
      en: { translation: enDict },
      ar: { translation: arDict }
    },
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
