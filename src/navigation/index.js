import React, { useEffect } from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { adaptNavigationTheme } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './AppNavigator';
import { useAppTheme } from '../hooks';
import useAppCurrency from '../hooks/useAppCurrency';
import { storeLng } from '../utils/language';

const Navigation = () => {
  const { i18n } = useTranslation();
  const { initTheme, theme } = useAppTheme();
  const { initCurrency } = useAppCurrency();

  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

  useEffect(() => {
    storeLng(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    const setup = Promise.all([initCurrency(), initTheme()]);
    setup.then(() => {
      SplashScreen.hide();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : LightTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
