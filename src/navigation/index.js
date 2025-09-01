import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './AppNavigator';
import { useAppCurrency } from '../hooks';
import { storeLng } from '../utils/language';

const Navigation = () => {
  const { i18n } = useTranslation();
  const { initCurrency } = useAppCurrency();

  useEffect(() => {
    storeLng(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    const setup = Promise.all([initCurrency()]);
    setup.then(() => {
      SplashScreen.hide();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AppNavigator />;
};

export default Navigation;
