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
import { ThemeContext } from '../context/ThemeProvider';
import { storeLng } from '../utils/language';

const Navigation = () => {
  const currencyCtx = useContext(CurrencyContext);
  const themeCtx = useContext(ThemeContext);
  const { i18n } = useTranslation();
  const theme = themeCtx.theme;

  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

  useEffect(() => {
    const setup = Promise.all([
      currencyCtx.initCurrency(),
      themeCtx.initTheme(),
      storeLng(i18n.language),
    ]);
    setup.then(() => {
      SplashScreen.hide();
    });
  }, []);

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : LightTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
