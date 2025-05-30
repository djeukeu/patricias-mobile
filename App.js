import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import i18nInstance from './src/i18n';
import Navigation from './src/Navigation';
import store from './src/redux';

import 'moment/locale/fr';
// console.log('App');

const App = () => {
  return (
    <I18nextProvider i18n={i18nInstance}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </I18nextProvider>
  );
};

export default App;
