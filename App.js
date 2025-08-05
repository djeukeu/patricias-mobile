import React, { Suspense } from 'react';
import { PaperProvider } from 'react-native-paper';
import Navigation from './src/navigation';

const App = () => {
  return (
    <Suspense>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </Suspense>
  );
};

export default App;
