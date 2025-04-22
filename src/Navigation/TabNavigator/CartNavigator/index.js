import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import Colors from '../../../constants/Colors';
import { useAppTheme } from '../../../hooks';
import Cart from '../../../screens/Cart';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  const { theme } = useAppTheme();
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName="CartScreen"
      screenOptions={{
        contentStyle: {
          backgroundColor: Colors.BACKGROUND[theme],
        },
        headerBackTitle: t('back'),
      }}>
      <Stack.Screen name="CartScreen" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
