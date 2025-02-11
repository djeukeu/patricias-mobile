import {View, Text} from 'react-native';
import React from 'react';
import config from './src/config';

const App = () => {
  return (
    <View>
      <Text>{config.env}</Text>
    </View>
  );
};

export default App;
