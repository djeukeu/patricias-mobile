import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useColorScheme } from 'react-native';
import HeaderLeft from '../../../components/HeaderLeft';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';
import Setting from '../../../screens/Setting';

const Stack = createNativeStackNavigator();

const SettingNavigator = () => {
  const theme = useColorScheme();
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        contentStyle: { backgroundColor: Colors[`background_${theme}`] },
      }}>
      <Stack.Screen
        name="SettingScreen"
        component={Setting}
        options={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTitle: t('setting.txt'),
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontFamily: Fonts.bold,
            fontSize: 18,
          },
          headerTintColor: Colors.white,
          headerRight: (props) => <HeaderLeft {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
