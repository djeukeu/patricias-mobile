import { StyleSheet } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const styles = (theme) => {
  const isDark = theme === 'dark';

  return StyleSheet.create({
    appVersion: {
      color: isDark ? MD2Colors.white : MD2Colors.black,
      fontFamily: Fonts.semiBold,
      fontSize: 14,
    },
    currencyContainer: {
      backgroundColor: Colors.background[theme],
    },
    currencySearch: {
      backgroundColor: isDark ? MD2Colors.grey800 : MD2Colors.grey100,
    },
    currencyText: {
      color: isDark ? MD2Colors.white : MD2Colors.black,
      fontFamily: Fonts.medium,
    },
    itemtxt: {
      color: isDark ? MD2Colors.white : MD2Colors.black,
      fontFamily: Fonts.medium,
    },
    rightContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    rightContainerTxt: {
      color: isDark ? MD2Colors.white : MD2Colors.black,
      fontFamily: Fonts.medium,
    },
    screen: {
      flex: 1,
    },
    versionWrapper: {
      alignItems: 'center',
      marginBottom: 24,
      marginTop: 'auto',
    },
  });
};

export default styles;
