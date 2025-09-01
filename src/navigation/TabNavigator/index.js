import React from 'react';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { MD2Colors } from 'react-native-paper';
import CartNavigator from './CartNavigator';
import HomeNavigator from './HomeNavigator';
import SettingNavigator from './SettingNavigator';
import WishlistNavigator from './WishlistNavigator';
import TabBar from '../../components/TabBar';
import { useAppTheme } from '../../hooks';

const Tab = createBottomTabNavigator();

const TabIcon = ({ focused, name, color }) => {
  const { theme } = useAppTheme();

  return (
    <MaterialDesignIcons
      name={focused ? name : `${name}-outline`}
      size={24}
      color={
        focused ? (theme == 'dark' ? MD2Colors.black : MD2Colors.white) : color
      }
    />
  );
};

const TabNavigator = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: (p) => <TabIcon {...p} name="home" />,
          tabBarLabel: t('tabs.home'),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistNavigator}
        options={{
          tabBarIcon: (p) => <TabIcon {...p} name="shopping" />,
          tabBarLabel: t('tabs.wishlist'),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: (p) => <TabIcon {...p} name="cart" />,
          tabBarLabel: t('tabs.cart'),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingNavigator}
        options={{
          tabBarIcon: (p) => <TabIcon {...p} name="cog" />,
          tabBarLabel: t('tabs.setting'),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
