import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { MD2Colors } from 'react-native-paper';

import HeaderRight from '../../../components/HeaderRight';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';
import { useAppTheme } from '../../../hooks';
import Cart from '../../../screens/Cart';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  const { isDark } = useAppTheme();
  const { t } = useTranslation();

  return (
    <Stack.Navigator initialRouteName="CartScreen">
      <Stack.Screen
        name="CartScreen"
        component={Cart}
        options={{
          headerStyle: {
            backgroundColor: isDark ? MD2Colors.black : Colors.primary,
          },
          headerTitle: t('cart.txt'),
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontFamily: Fonts.semiBold,
            fontSize: 18,
          },
          headerTintColor: MD2Colors.white,
          headerRight: (props) => <HeaderRight {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;
