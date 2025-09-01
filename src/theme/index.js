import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3LightTheme,
  MD3DarkTheme,
  adaptNavigationTheme,
} from 'react-native-paper';
import { darkColors, lightColors } from './colors';
import { fonts } from './fonts';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const lightTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: lightColors,
  fonts,
};

const darkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: darkColors,
  fonts,
};

export { darkTheme, lightTheme };
