import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import Colors from '../../../constants/Colors';
import { useAppTheme } from '../../../hooks';
import Category from '../../../screens/Category';

const Stack = createNativeStackNavigator();

const CategoryNavigator = () => {
  const { theme } = useAppTheme();
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName="CategoryScreen"
      screenOptions={{
        contentStyle: {
          backgroundColor: Colors.BACKGROUND[theme],
        },
        headerBackTitle: t('back'),
      }}>
      <Stack.Screen name="CategoryScreen" component={Category} />
    </Stack.Navigator>
  );
};

export default CategoryNavigator;
