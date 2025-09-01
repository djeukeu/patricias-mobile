/* eslint-disable react-native/no-unused-styles */
import React from 'react';

import { CommonActions } from '@react-navigation/native';
import { StyleSheet, Platform } from 'react-native';
import { BottomNavigation, MD2Colors } from 'react-native-paper';

import Colors from '../../constants/Colors';
import { useAppTheme } from '../../hooks';

const TabBar = ({
  navigation,
  state,
  descriptors,
  insets,
  shifting = true,
}) => {
  const { theme, isDark } = useAppTheme();

  return (
    <BottomNavigation.Bar
      navigationState={state}
      safeAreaInsets={insets}
      shifting={shifting}
      activeColor={isDark ? MD2Colors.white : Colors.primary}
      inactiveColor={isDark ? MD2Colors.white : MD2Colors.black}
      style={[styles.default, styles[theme]]}
      activeIndicatorStyle={{
        backgroundColor: isDark ? MD2Colors.white : Colors.primary,
      }}
      onTabPress={({ route, preventDefault }) => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (event.defaultPrevented) {
          preventDefault();
        } else {
          navigation.dispatch({
            ...CommonActions.navigate(route.name, route.params),
            target: state.key,
          });
        }
      }}
      renderIcon={({ route, focused, color }) =>
        descriptors[route.key].options.tabBarIcon?.({
          focused,
          color,
          size: 24,
        }) || null
      }
      getLabelText={({ route }) => {
        const { options } = descriptors[route.key];
        const label =
          typeof options.tabBarLabel === 'string'
            ? options.tabBarLabel
            : typeof options.title === 'string'
              ? options.title
              : route.name;

        return label;
      }}
    />
  );
};

const styles = StyleSheet.create({
  dark: {
    backgroundColor: MD2Colors.black,
  },
  default: {
    borderTopColor: Platform.OS === 'android' && MD2Colors.grey500,
    borderTopWidth: Platform.OS === 'android' && 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  light: {
    backgroundColor: MD2Colors.white,
    shadowColor: MD2Colors.black,
  },
});

export default TabBar;
