import i18next from 'i18next';
import AsyncStoragePlugin from 'i18next-react-native-async-storage';
import { initReactI18next } from 'react-i18next';
import * as config from './config';
import { english, french } from './locales';
import appConfig from '../config';
import { detectUserLanguage } from './language-detector';

i18next
  .use(initReactI18next)
  .use(AsyncStoragePlugin(detectUserLanguage))
  .init({
    compatibilityJSON: 'v4',
    resources: {
      en: { translation: english },
      fr: { translation: french },
    },
    debug: appConfig.env === 'development',
    nonExplicitSupportedLngs: true,
    fallbackLng: config.fallback,
    defaultNS: config.defaultNamespace,
    keySeparator: '.',
  });

export default i18next;
