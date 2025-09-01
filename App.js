import React, { Suspense } from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { I18nextProvider } from 'react-i18next';
import { PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import CurrencyProvider from './src/context/CurrencyProvider';
import ThemeSettingProvider, {
  ThemeSettingConsumer,
} from './src/context/ThemeSettingProvider';
import i18nInstance from './src/i18n';
import Navigation from './src/navigation';
import { customDarkTheme, customLightTheme } from './src/theme';

const App = () => {
  return (
    <Suspense>
      <I18nextProvider i18n={i18nInstance}>
        <CurrencyProvider>
          <ThemeSettingProvider>
            <ThemeSettingConsumer>
              {({ isDark }) => {
                const { LightTheme, DarkTheme } = adaptNavigationTheme({
                  reactNavigationLight: NavigationDefaultTheme,
                  reactNavigationDark: NavigationDarkTheme,
                });
                return (
                  <PaperProvider
                    theme={isDark ? customDarkTheme : customLightTheme}>
                    <NavigationContainer
                      theme={isDark ? DarkTheme : LightTheme}>
                      <Navigation />
                    </NavigationContainer>
                  </PaperProvider>
                );
              }}
            </ThemeSettingConsumer>
          </ThemeSettingProvider>
        </CurrencyProvider>
      </I18nextProvider>
    </Suspense>
  );
};

export default App;
