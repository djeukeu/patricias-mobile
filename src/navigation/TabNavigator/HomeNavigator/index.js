import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../../../constants/Colors';
import { useAppTheme } from '../../../hooks';
import Home from '../../../screens/Home';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const { theme } = useAppTheme();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        contentStyle: { backgroundColor: Colors.background[theme] },
      }}>
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
