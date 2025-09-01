import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { MD2Colors } from 'react-native-paper';
import HeaderLeft from '../../../components/HeaderLeft';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';
import { useAppTheme } from '../../../hooks';
import Wishlist from '../../../screens/Wishlist';

const Stack = createNativeStackNavigator();

const WishlistNavigator = () => {
  const { isDark } = useAppTheme();
  const { t } = useTranslation();

  return (
    <Stack.Navigator initialRouteName="WishlistScreen">
      <Stack.Screen
        name="WishlistScreen"
        component={Wishlist}
        options={{
          headerStyle: {
            backgroundColor: isDark ? MD2Colors.black : Colors.primary,
          },
          headerTitle: t('wislist.txt'),
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontFamily: Fonts.semiBold,
            fontSize: 18,
          },
          headerTintColor: MD2Colors.white,
          headerRight: (props) => <HeaderLeft {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default WishlistNavigator;
