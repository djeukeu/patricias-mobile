import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import CurrencyProvider from './src/context/CurrencyProvider';
import ThemeProvider from './src/context/ThemeProvider';
import i18nInstance from './src/i18n';
import Navigation from './src/navigation';

const App = () => {
  return (
    <Suspense>
      <ThemeProvider>
        <CurrencyProvider>
          <I18nextProvider i18n={i18nInstance}>
            <Navigation />
          </I18nextProvider>
        </CurrencyProvider>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
