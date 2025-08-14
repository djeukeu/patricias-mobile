import React from 'react';
import { CommonActions } from '@react-navigation/native';
import { BottomNavigation } from 'react-native-paper';

const TabBar = ({
  navigation,
  state,
  descriptors,
  insets,
  shifting = true,
  activeColor,
  inactiveColor,
  theme,
  activeIndicatorStyle,
  barStyle,
}) => {
  return (
    <BottomNavigation.Bar
      navigationState={state}
      safeAreaInsets={insets}
      shifting={shifting}
      activeColor={activeColor}
      inactiveColor={inactiveColor}
      theme={theme}
      style={barStyle}
      activeIndicatorStyle={activeIndicatorStyle}
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

export default TabBar;
