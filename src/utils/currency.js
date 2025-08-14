/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';

const key = 'userCurrency';

export const getCurrency = () => {
  const currency = RNLocalize.getCurrencies()[0];
  return currency;
};

export const saveCurrency = async (currency) => {
  try {
    await AsyncStorage.setItem(key, currency);
  } catch (err) {
    console.log(err);
  }
};

export const getStoreCurrency = async () => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (err) {
    console.log(err);
  }
};
