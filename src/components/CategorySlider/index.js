import React from 'react';

import { FlatList, TouchableOpacity } from 'react-native';
import { MD2Colors, Text } from 'react-native-paper';

import styles from './styles';

const RenderItem = ({ item, active }) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      activeOpacity={0.83}
      style={item.id === active ? styles.activeItem : styles.item}>
      <Text
        variant="bodyMedium"
        style={
          item.id === active
            ? { color: MD2Colors.white }
            : { color: MD2Colors.black }
        }>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const CategorySlider = ({ list, active }) => {
  return (
    <FlatList
      data={list}
      renderItem={({ item }) => <RenderItem item={item} active={active} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CategorySlider;
