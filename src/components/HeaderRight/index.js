import React from 'react';

import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { TouchableOpacity } from 'react-native';

const HeaderRight = ({ tintColor }) => {
  return (
    <TouchableOpacity activeOpacity={0.83} onPress={() => {}}>
      <MaterialDesignIcons name={'bell-outline'} size={24} color={tintColor} />
    </TouchableOpacity>
  );
};

export default HeaderRight;
