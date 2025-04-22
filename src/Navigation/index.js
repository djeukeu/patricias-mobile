import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { useDispatch } from 'react-redux';
import AppNavigator from './AppNavigator';
import { setTheme } from '../redux/slices/theme';

const Navigation = () => {
  const appTheme = useColorScheme();
  const dispatch = useDispatch();

  useEffect(() => {
    const setup = Promise.all([dispatch(setTheme(appTheme))]);
    setup.then(() => {
      SplashScreen.hide();
    });
  }, [appTheme, dispatch]);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
