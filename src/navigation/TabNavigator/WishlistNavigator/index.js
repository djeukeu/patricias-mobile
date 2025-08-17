import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../../../constants/Colors';
import { useAppTheme } from '../../../hooks';
import Wishlist from '../../../screens/Wishlist';

const Stack = createNativeStackNavigator();

const WishlistNavigator = () => {
  const { theme } = useAppTheme();

  return (
    <Stack.Navigator
      initialRouteName="WishlistScreen"
      screenOptions={{
        contentStyle: { backgroundColor: Colors.background[theme] },
      }}>
      <Stack.Screen name="WishlistScreen" component={Wishlist} />
    </Stack.Navigator>
  );
};

export default WishlistNavigator;
