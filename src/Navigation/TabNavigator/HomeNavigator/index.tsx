import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../../screens/Home';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
