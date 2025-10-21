import { StyleSheet } from 'react-native';
import { MD2Colors } from 'react-native-paper';

const styles = (theme) => {
  const isDark = theme === 'dark';

  return StyleSheet.create({
    container: {
      backgroundColor: isDark ? MD2Colors.grey900 : MD2Colors.white,
      borderRadius: 9,
      flexDirection: 'row',
      marginHorizontal: 8,
      marginVertical: 4,
      padding: 8,
    },
    content: {
      width: '40%',
    },
    iconWrapper: {
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginLeft: 'auto',
    },
    image: {
      borderRadius: 9,
      height: '100%',
      width: '100%',
    },
    imageWrapper: {
      height: 120,
      marginRight: 8,
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
