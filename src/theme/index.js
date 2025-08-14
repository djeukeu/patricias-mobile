import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import Colors from '../constants/Colors';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    secondary: Colors.secondary,
  },
};

export default theme;
