import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { MD2Colors } from 'react-native-paper';

import HeaderRight from '../../../components/HeaderRight';
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
          headerRight: (props) => <HeaderRight {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
