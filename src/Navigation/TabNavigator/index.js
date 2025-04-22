import React, { useCallback } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from '@rneui/base';
import { useTranslation } from 'react-i18next';
import CartNavigator from './CartNavigator';
import CategoryNavigator from './CategoryNavigator';
import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  const { t } = useTranslation();

  const HomeIcon = useCallback((p) => {
    return <Icon name="home" size={24} color={p.color} />;
  }, []);

  const GenreIcon = useCallback((p) => {
    return <Icon name="category" size={24} color={p.color} />;
  }, []);

  const CartIcon = useCallback((p) => {
    return <Icon name="shopping-cart" size={24} color={p.color} />;
  }, []);

  const ProfileIcon = useCallback((p) => {
    return <Icon name="person" size={24} color={p.color} />;
  }, []);

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: HomeIcon,
          tabBarLabel: t('tabs.home'),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryNavigator}
        options={{
          tabBarLabel: t('tabs.category'),
          tabBarIcon: GenreIcon,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarLabel: t('tabs.cart'),
          tabBarIcon: CartIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarLabel: t('tabs.profile'),
          tabBarIcon: ProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
