import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  dialogBtn: {
    fontFamily: Fonts.medium,
  },
  radioTxt: {
    fontFamily: Fonts.regular,
    fontSize: 16,
  },
  title: {
    color: Colors.black,
    fontFamily: Fonts.medium,
    fontSize: 18,
  },
});

export default styles;
