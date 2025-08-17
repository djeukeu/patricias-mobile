/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Platform } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import CartNavigator from './CartNavigator';
import HomeNavigator from './HomeNavigator';
import SettingNavigator from './SettingNavigator';
import WishlistNavigator from './WishlistNavigator';
import TabBar from '../../components/TabBar';
import Colors from '../../constants/Colors';
import { useAppTheme } from '../../hooks';

const Tab = createBottomTabNavigator();

const TabIcon = ({ p, theme, name }) => (
  <MaterialDesignIcons
    name={p.focused ? name : `${name}-outline`}
    size={24}
    color={
      p.focused
        ? theme == 'dark'
          ? MD2Colors.black
          : MD2Colors.white
        : p.color
    }
  />
);

const TabNavigator = () => {
  const { t } = useTranslation();
  const { theme, isDark } = useAppTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => (
        <TabBar
          {...props}
          activeColor={isDark ? MD2Colors.white : Colors.primary}
          inactiveColor={isDark ? MD2Colors.white : MD2Colors.black}
          activeIndicatorStyle={{
            backgroundColor: isDark ? MD2Colors.white : Colors.primary,
          }}
          barStyle={styles(theme).barStyle}
        />
      )}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: (p) => <TabIcon p={p} theme={theme} name="home" />,
          tabBarLabel: t('tabs.home'),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistNavigator}
        options={{
          tabBarIcon: (p) => <TabIcon p={p} theme={theme} name="shopping" />,
          tabBarLabel: t('tabs.wishlist'),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: (p) => <TabIcon p={p} theme={theme} name="cart" />,
          tabBarLabel: t('tabs.cart'),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingNavigator}
        options={{
          tabBarIcon: (p) => <TabIcon p={p} theme={theme} name="cog" />,
          tabBarLabel: t('tabs.setting'),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = (theme) => {
  return StyleSheet.create({
    barStyle: {
      backgroundColor: theme == 'dark' ? MD2Colors.black : MD2Colors.white,
      borderTopColor: Platform.OS === 'android' && MD2Colors.grey500,
      borderTopWidth: Platform.OS === 'android' && 0.5,
      shadowColor: theme == 'light' && MD2Colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3,
    },
  });
};

export default TabNavigator;
