import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../../constants/Colors';
import { useAppTheme } from '../../hooks';
import TabNavigator from '../TabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { theme } = useAppTheme();

  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: Colors.background[theme] },
      }}>
      <Stack.Screen name="Tab" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
