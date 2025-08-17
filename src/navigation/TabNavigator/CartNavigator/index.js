import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../../../constants/Colors';
import { useAppTheme } from '../../../hooks';
import Cart from '../../../screens/Cart';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  const { theme } = useAppTheme();

  return (
    <Stack.Navigator
      initialRouteName="CartScreen"
      screenOptions={{
        contentStyle: { backgroundColor: Colors.background[theme] },
      }}>
      <Stack.Screen name="CartScreen" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
