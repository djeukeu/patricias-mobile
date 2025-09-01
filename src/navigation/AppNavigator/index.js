import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from '../TabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Tab" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
