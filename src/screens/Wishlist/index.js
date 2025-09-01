import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import Product from '../../components/Product';

const dataList = [1, 1, 1, 1, 1, 1, 1, 1, 1];

const Wishlist = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={dataList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        // keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Product item={item} />}
      />
    </View>
  );
};

export default Wishlist;
