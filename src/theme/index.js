import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import { darkColors, lightColors } from './colors';

const customLightTheme = { ...MD3LightTheme, colors: lightColors };

const customDarkTheme = { ...MD3DarkTheme, colors: darkColors };

export { customDarkTheme, customLightTheme };
