import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { MD2Colors } from 'react-native-paper';

import HeaderLeft from '../../../components/HeaderLeft';
import Colors from '../../../constants/Colors';
import { useAppTheme } from '../../../hooks';
import Home from '../../../screens/Home';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const { t } = useTranslation();
  const { isDark } = useAppTheme();

  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: Colors.transparent,
          },
          headerTitle: t('home.txt'),
          headerTitleAlign: 'left',
          headerTintColor: isDark ? MD2Colors.white : MD2Colors.black,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 20,
          },
          headerRight: (props) => <HeaderLeft {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
