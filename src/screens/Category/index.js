import React from 'react';

import { View, FlatList } from 'react-native';
import { Divider } from 'react-native-paper';

import { categoryList } from './dummy';
import styles from './styles';
import CategoryItem from '../../components/CategoryItem';

const Category = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={categoryList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CategoryItem item={item} />}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
};

export default Category;
