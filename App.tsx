import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nInstance from './src/i18n';
import Navigation from './src/Navigation';

import 'moment/locale/fr';

const App = () => {
  return (
    <I18nextProvider i18n={i18nInstance}>
      <Navigation />
    </I18nextProvider>
  );
};

export default App;
