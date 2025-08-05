import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Setting from '../../../screens/Setting';

const Stack = createNativeStackNavigator();

const SettingNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SettingScreen">
      <Stack.Screen name="SettingScreen" component={Setting} />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
