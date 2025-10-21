import { StyleSheet } from 'react-native';
import { MD2Colors } from 'react-native-paper';

import Fonts from '../../constants/Fonts';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: MD2Colors.grey200,
    borderRadius: 25,
    flexDirection: 'row',
    overflow: 'hidden',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  input: {
    color: MD2Colors.black,
    fontSize: 16,
    textAlign: 'center',
    width: 24,
  },
  symbol: {
    color: MD2Colors.black,
    fontSize: 16,
    fontWeight: Fonts.medium,
    marginHorizontal: 4,
  },
});

export default styles;
