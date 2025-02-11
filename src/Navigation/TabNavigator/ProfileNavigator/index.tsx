import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../../../screens/Profile';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen name="ProfileScreen" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
