import React from 'react';

import { View, Image, TouchableOpacity } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import { Text, IconButton } from 'react-native-paper';

import style from './styles';
import { useAppTheme } from '../../hooks';
import CurrencyFormater from '../CurrencyFormater';
import InputSpinner from '../InputSpinner';

const CartItem = ({ item }) => {
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
          <Text variant="titleSmall" numberOfLines={2}>
            {item.name}
          </Text>
          <CurrencyFormater
            amount={item.price}
            renderText={(value) => (
              <Text variant="titleSmall" style={styles.price}>
                {value}
              </Text>
            )}
          />
        </View>
        <View style={styles.iconWrapper}>
          <IconButton
            icon="delete"
            mode="contained"
            size={16}
            onPress={() => {}}
          />
          <InputSpinner
            initialValue={item.quantity}
            min={1}
            onChange={(num) => {
              console.log(num);
            }}
          />
        </View>
      </TouchableOpacity>
    </DropShadow>
  );
};

export default CartItem;
