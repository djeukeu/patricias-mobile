import React, { useCallback } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from '@rneui/base';
import CartNavigator from './CartNavigator';
import CategoryNavigator from './CategoryNavigator';
import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  const HomeIcon = useCallback((p: { color: string }) => {
    return <Icon name="home" size={24} color={p.color} />;
  }, []);

  return (
    <Tab.Navigator initialRouteName="Home" activeColor="yellow">
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: HomeIcon,
          // tabBarLabel: t('marketplace.home'),
        }}
      />
      <Tab.Screen name="Category" component={CategoryNavigator} />
      <Tab.Screen name="Cart" component={CartNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
