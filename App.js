import React, { Suspense } from 'react';
import { PaperProvider } from 'react-native-paper';
import Navigation from './src/navigation';
import theme from './src/theme';

const App = () => {
  return (
    <Suspense>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </Suspense>
  );
};

export default App;
