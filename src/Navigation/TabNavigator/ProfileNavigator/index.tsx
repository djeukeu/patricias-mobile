import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import Colors from '../../../constants/Colors';
import { useAppTheme } from '../../../hooks';
import Profile from '../../../screens/Profile';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  const { theme } = useAppTheme();
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        contentStyle: {
          backgroundColor:
            Colors.BACKGROUND[theme as keyof typeof Colors.BACKGROUND],
        },
        headerBackTitle: t('back'),
      }}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
