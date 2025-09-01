/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'app.language';

export const storeLng = async (lng) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, lng);
  } catch (err) {
    console.error(err);
  }
};

export const getLng = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    return value;
  } catch (err) {
    console.error(err);
  }
};
