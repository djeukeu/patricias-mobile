import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import SplashScreen from 'react-native-splash-screen';

import AppNavigator from './AppNavigator';
import { storeLng } from '../utils/language';

const Navigation = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    storeLng(i18n.language);
    SplashScreen.hide();
  }, [i18n.language]);

  return <AppNavigator />;
};

export default Navigation;
