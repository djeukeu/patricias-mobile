import { StyleSheet } from 'react-native';
import { MD2Colors } from 'react-native-paper';

const styles = (theme) => {
  const isDark = theme === 'dark';

  return StyleSheet.create({
    container: {
      backgroundColor: isDark ? MD2Colors.grey900 : MD2Colors.white,
      borderRadius: 13,
      flexDirection: 'row',
      marginHorizontal: 12,
      marginVertical: 4,
      overflow: 'hidden',
    },
    content: {
      padding: 8,
      width: '50%',
    },
    iconContainer: {
      justifyContent: 'space-between',
      marginLeft: 'auto',
      marginRight: 8,
    },
    image: {
      height: '100%',
      width: '100%',
    },
    imageWrapper: {
      height: 120,
      width: 120,
    },
    price: {
      color: MD2Colors.grey500,
    },
    shadowStyle: {
      shadowColor: MD2Colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
  });
};

export default styles;
