import { CallbackFn } from 'i18next-react-native-async-storage';
import * as RNLocalize from 'react-native-localize';
import { getLng } from '../utils/language';

export const detectUserLanguage = async (callback: CallbackFn) => {
  const saveLanguage = await getLng();
  if (!saveLanguage) {
    const locale = RNLocalize.getLocales()[0];
    const { languageCode } = locale;
    callback(languageCode);
  } else {
    callback(saveLanguage);
  }
};
