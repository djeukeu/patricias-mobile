import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { PaperProvider } from 'react-native-paper';
import CurrencyProvider from './src/context/CurrencyProvider';
import ThemeProvider from './src/context/ThemeProvider';
import i18nInstance from './src/i18n';
import Navigation from './src/navigation';
import theme from './src/theme';

const App = () => {
  return (
    <Suspense>
      <ThemeProvider>
        <CurrencyProvider>
          <PaperProvider theme={theme}>
            <I18nextProvider i18n={i18nInstance}>
              <Navigation />
            </I18nextProvider>
          </PaperProvider>
        </CurrencyProvider>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
