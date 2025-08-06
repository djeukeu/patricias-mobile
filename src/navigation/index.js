import React, { useEffect } from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { adaptNavigationTheme } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './AppNavigator';

const Navigation = () => {
  const theme = useColorScheme();

  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : LightTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
