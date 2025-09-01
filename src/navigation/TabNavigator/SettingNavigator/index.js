import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { MD2Colors } from 'react-native-paper';

import HeaderLeft from '../../../components/HeaderLeft';
import Colors from '../../../constants/Colors';
import { useAppTheme } from '../../../hooks';
import Setting from '../../../screens/Setting';

const Stack = createNativeStackNavigator();

const SettingNavigator = () => {
  const { t } = useTranslation();
  const { isDark } = useAppTheme();

  return (
    <Stack.Navigator initialRouteName="SettingScreen">
      <Stack.Screen
        name="SettingScreen"
        component={Setting}
        options={{
          headerStyle: {
            backgroundColor: isDark ? MD2Colors.black : Colors.primary,
          },
          headerTitle: t('setting.txt'),
          headerTitleAlign: 'left',
          headerTintColor: MD2Colors.white,
          headerRight: (props) => <HeaderLeft {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
