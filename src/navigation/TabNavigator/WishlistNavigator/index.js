import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wishlist from '../../../screens/Wishlist';

const Stack = createNativeStackNavigator();

const WishlistNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="WishlistScreen">
      <Stack.Screen name="WishlistScreen" component={Wishlist} />
    </Stack.Navigator>
  );
};

export default WishlistNavigator;
