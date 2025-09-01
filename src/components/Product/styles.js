import { StyleSheet } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const styles = (theme) => {
  const isDark = theme === 'dark';

  return StyleSheet.create({
    shadowStyle: {
      shadowColor: isDark ? Colors.transparent : MD2Colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    image: {
      height: '100%',
      width: '100%',
    },
    imageContainer: {
      height: '100%',
      width: 150,
    },
    container: {
      // backgroundColor: isLight ? Colors.white : Colors.light_black,
      borderRadius: 13,
      height: 150,
    },
  });
};

export default styles;
