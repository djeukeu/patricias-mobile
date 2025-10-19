import React from 'react';

import { List, Chip } from 'react-native-paper';

const CategoryItem = ({ item }) => {
  return (
    <List.Item
      title={item.name}
      right={() => <Chip mode="outlined">{item.count}</Chip>}
      onPress={() => {}}
    />
  );
};

export default CategoryItem;
