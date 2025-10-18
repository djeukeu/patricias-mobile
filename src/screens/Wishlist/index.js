import React from 'react';

import { View, FlatList } from 'react-native';

import { wishlist } from './dummy';
import styles from './styles';
import WishlistItem from '../../components/WishlistItem';

const Wishlist = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={wishlist}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <WishlistItem item={item} />}
      />
    </View>
  );
};

export default Wishlist;
