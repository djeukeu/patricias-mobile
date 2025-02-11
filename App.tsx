import React from 'react';
import { View, Text } from 'react-native';
import config from './src/config';

const App = () => {
  return (
    <View>
      <Text>{config.env}</Text>
    </View>
  );
};

export default App;
