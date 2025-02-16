import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import Colors from '../../constants/Colors';
import { useAppTheme } from '../../hooks';
import TabNavigator from '../TabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { theme } = useAppTheme();
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor:
            Colors.BACKGROUND[theme as keyof typeof Colors.BACKGROUND],
        },
        headerBackTitle: t('back'),
      }}>
      <Stack.Screen name="Tab" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
