import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Web from '../../Web';
import TabNavigator from '../TabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Tab">
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WebScreen"
        component={Web}
        options={{
          animation: 'slide_from_right',
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
