/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';

const STORAGE_KEY = 'app.currency';

export const getCurrency = () => {
  const currency = RNLocalize.getCurrencies()[0];
  return currency;
};

export const storeCurrency = async (currency) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, currency);
  } catch (err) {
    console.error(err);
  }
};

export const restoreCurrency = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    return value;
  } catch (err) {
    console.error(err);
  }
};
