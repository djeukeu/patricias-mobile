import { StyleSheet } from 'react-native';
import { MD2Colors } from 'react-native-paper';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  categoryHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  screen: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: Colors.transparent,
    borderColor: MD2Colors.grey500,
    borderRadius: 13,
    borderWidth: 1,
    marginHorizontal: 8,
    marginVertical: 12,
  },
  seeAllTxt: {
    color: Colors.primary,
  },
});

export default styles;
