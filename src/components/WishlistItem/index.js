import React from 'react';

import { View, TouchableOpacity, Image } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import { Text, IconButton } from 'react-native-paper';

import style from './styles';
import { useAppTheme } from '../../hooks';
import CurrencyFormater from '../CurrencyFormater';

const WishlistItem = ({ item }) => {
  const { theme } = useAppTheme();
  const styles = style(theme);

  return (
    <DropShadow style={styles.shadowStyle}>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.85}
        onPress={() => {}}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text variant="labelSmall" numberOfLines={1}>
            {item.category}
          </Text>
          <Text variant="titleSmall" numberOfLines={2}>
            {item.name}
          </Text>
          <CurrencyFormater
            amount={item.regular_price}
            renderText={(value) => (
              <Text variant="titleSmall" style={styles.price}>
                {value}
              </Text>
            )}
          />
        </View>
        <View style={styles.iconContainer}>
          <IconButton icon="cards-heart-outline" size={20} onPress={() => {}} />
          <IconButton
            icon="cart-plus"
            mode="contained"
            size={20}
            onPress={() => {}}
          />
        </View>
      </TouchableOpacity>
    </DropShadow>
  );
};

export default WishlistItem;
