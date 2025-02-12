/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'userLanguage';

export const storeLng = async (lng) => {
  try {
    await AsyncStorage.setItem(key, lng);
  } catch (err) {
    console.log(err);
  }
};

export const getLng = async () => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (err) {
    console.log(err);
  }
};
