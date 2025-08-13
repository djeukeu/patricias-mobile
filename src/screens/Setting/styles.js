import { StyleSheet } from 'react-native';
import Fonts from '../../constants/Fonts';

const styles = StyleSheet.create({
  itemtxt: {
    fontFamily: Fonts.medium,
  },
  rightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightContainerTxt: {
    fontFamily: Fonts.medium,
    marginRight: 4,
    textTransform: 'capitalize',
  },
  screen: {
    flex: 1,
  },
});

export default styles;
