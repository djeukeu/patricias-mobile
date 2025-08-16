import React, { useEffect, useContext } from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { adaptNavigationTheme } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './AppNavigator';
import { CurrencyContext } from '../context/CurrencyProvider';
import { useAppTheme } from '../hooks';
import { storeLng } from '../utils/language';

const Navigation = () => {
  const currencyCtx = useContext(CurrencyContext);
  const { i18n } = useTranslation();
  const { initTheme, theme } = useAppTheme();

  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

  useEffect(() => {
    storeLng(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    const setup = Promise.all([currencyCtx.initCurrency(), initTheme()]);
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
