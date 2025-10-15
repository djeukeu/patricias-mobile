import { StyleSheet } from 'react-native';
import { MD2Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  activeItem: {
    backgroundColor: MD2Colors.black,
    borderRadius: 9,
    marginHorizontal: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  item: {
    borderColor: MD2Colors.black,
    borderRadius: 9,
    borderWidth: 0.5,
    marginHorizontal: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});

export default styles;
