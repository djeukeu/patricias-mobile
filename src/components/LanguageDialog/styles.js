import { StyleSheet } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const styles = (theme) => {
  const isDark = theme === 'dark';

  return StyleSheet.create({
    container: {
      backgroundColor: Colors.background[theme],
    },
    dialogBtn: {
      color: isDark ? MD2Colors.white : Colors.primary,
      fontFamily: Fonts.medium,
    },
    radioTxt: {
      color: isDark ? MD2Colors.white : MD2Colors.black,
      fontFamily: Fonts.regular,
      fontSize: 14,
    },
    title: {
      color: isDark ? MD2Colors.white : MD2Colors.black,
      fontFamily: Fonts.medium,
      fontSize: 18,
    },
  });
};

export default styles;
