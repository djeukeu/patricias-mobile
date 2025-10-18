import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MD2Colors, IconButton } from 'react-native-paper';

import Colors from '../../constants/Colors';
import { useAppTheme } from '../../hooks';
import Web from '../../screens/Web';
import TabNavigator from '../TabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { isDark } = useAppTheme();
  const navigation = useNavigation();

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
          headerStyle: {
            backgroundColor: isDark ? MD2Colors.black : Colors.primary,
          },
          headerTitle: '',
          presentation: 'modal',
          headerLeft: () => (
            <IconButton
              icon="close"
              size={20}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
