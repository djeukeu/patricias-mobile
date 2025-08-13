import React from 'react';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { TouchableOpacity } from 'react-native';

const HeaderLeft = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.83} onPress={() => {}}>
      <MaterialDesignIcons
        name={'bell-outline'}
        size={24}
        color={props.tintColor}
      />
    </TouchableOpacity>
  );
};

export default HeaderLeft;
