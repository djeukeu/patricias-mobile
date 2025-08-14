import React, { useEffect, useContext } from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useColorScheme } from 'react-native';
import { adaptNavigationTheme } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './AppNavigator';
import { CurrencyContext } from '../context/CurrencyProvider';
import { storeLng } from '../utils/language';

const Navigation = () => {
  const theme = useColorScheme();
  const currencyCtx = useContext(CurrencyContext);
  const { i18n } = useTranslation();

  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

  useEffect(() => {
    const setup = Promise.all([
      currencyCtx.initCurrency(),
      storeLng(i18n.language),
    ]);
    setup.then(() => {
      SplashScreen.hide();
    });
  }, [i18n.language]);

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : LightTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
