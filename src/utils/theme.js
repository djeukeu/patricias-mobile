/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'userTheme';

export const saveThemeMode = async (theme) => {
  try {
    await AsyncStorage.setItem(key, theme);
  } catch (err) {
    console.log(err);
  }
};

export const getStoreThemeMode = async () => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (err) {
    console.log(err);
  }
};
