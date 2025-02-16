import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import Colors from '../../../constants/Colors';
import { useAppTheme } from '../../../hooks';
import Home from '../../../screens/Home';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const { theme } = useAppTheme();
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        contentStyle: {
          backgroundColor:
            Colors.BACKGROUND[theme as keyof typeof Colors.BACKGROUND],
        },
        headerBackTitle: t('back'),
      }}>
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
