import React from 'react';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Platform } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import CartNavigator from './CartNavigator';
import HomeNavigator from './HomeNavigator';
import SettingNavigator from './SettingNavigator';
import WishlistNavigator from './WishlistNavigator';
import TabBar from '../../components/TabBar';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => (
        <TabBar
          {...props}
          activeColor={Colors.primary}
          inactiveColor={Colors.black}
          theme={{ fonts: Fonts }}
          activeIndicatorStyle={{ backgroundColor: Colors.primary }}
          barStyle={styles.barStyle}
        />
      )}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: (p) => (
            <MaterialDesignIcons
              name={p.focused ? 'home' : 'home-outline'}
              size={24}
              color={p.focused ? Colors.white : p.color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistNavigator}
        options={{
          tabBarIcon: (p) => (
            <MaterialDesignIcons
              name={p.focused ? 'shopping' : 'shopping-outline'}
              size={24}
              color={p.focused ? Colors.white : p.color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: (p) => (
            <MaterialDesignIcons
              name={p.focused ? 'cart' : 'cart-outline'}
              size={24}
              color={p.focused ? Colors.white : p.color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingNavigator}
        options={{
          tabBarIcon: (p) => (
            <MaterialDesignIcons
              name={p.focused ? 'cog' : 'cog-outline'}
              size={24}
              color={p.focused ? Colors.white : p.color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: Colors.white,
    borderTopColor: Platform.OS === 'android' && MD2Colors.grey500,
    borderTopWidth: Platform.OS === 'android' && 0.5,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});

export default TabNavigator;
