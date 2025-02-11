import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from '../../../screens/Category';

const Stack = createNativeStackNavigator();

const CategoryNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CategoryScreen" component={Category} />
    </Stack.Navigator>
  );
};

export default CategoryNavigator;
