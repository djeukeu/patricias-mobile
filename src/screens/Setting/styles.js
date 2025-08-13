import { StyleSheet } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const styles = StyleSheet.create({
  currencyContainer: {
    backgroundColor: Colors.white,
  },
  currencySearch: {
    backgroundColor: MD2Colors.grey100,
  },
  currencyText: {
    color: Colors.black,
    fontFamily: Fonts.medium,
  },
  itemtxt: {
    fontFamily: Fonts.medium,
  },
  rightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightContainerTxt: {
    fontFamily: Fonts.medium,
  },
  screen: {
    flex: 1,
  },
});

export default styles;
