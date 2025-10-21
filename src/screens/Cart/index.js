import React from 'react';

import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import { Text, Button } from 'react-native-paper';

import { cartList } from './dummy';
import styles from './styles';
import CartItem from '../../components/CartItem';
import CurrencyFormater from '../../components/CurrencyFormater';

const Cart = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.screen}>
      <FlatList
        data={cartList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.subTotal}>
        <View>
          <Text variant="labelLarge">{t('cart.subtotal')}</Text>
          <CurrencyFormater
            amount={500}
            renderText={(value) => <Text variant="bodyMedium">{value}</Text>}
          />
        </View>
        <Button mode="contained" onPress={() => {}}>
          {t('cart.checkout')}
        </Button>
      </View>
    </View>
  );
};

export default Cart;
