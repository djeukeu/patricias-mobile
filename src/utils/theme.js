/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'theme.setting';

export const storePreference = async (value) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, value);
  } catch (err) {
    console.error(err);
  }
};

export const restorePreference = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    return value;
  } catch (err) {
    console.error(err);
  }
};
