import React, { Suspense } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { I18nextProvider } from 'react-i18next';
import { PaperProvider } from 'react-native-paper';

import CurrencyProvider from './src/context/CurrencyProvider';
import ThemeSettingProvider, {
  ThemeSettingConsumer,
} from './src/context/ThemeSettingProvider';
import i18nInstance from './src/i18n';
import Navigation from './src/navigation';
import { darkTheme, lightTheme } from './src/theme';

const App = () => {
  return (
    <Suspense>
      <I18nextProvider i18n={i18nInstance}>
        <CurrencyProvider>
          <ThemeSettingProvider>
            <ThemeSettingConsumer>
              {({ isDark }) => {
                return (
                  <PaperProvider theme={isDark ? darkTheme : lightTheme}>
                    <NavigationContainer
                      theme={isDark ? darkTheme : lightTheme}>
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
