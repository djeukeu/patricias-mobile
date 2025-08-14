/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useCallback, useState, useEffect } from 'react';
import { Appearance, useColorScheme } from 'react-native';
import { getStoreThemeMode, saveThemeMode } from '../../utils/theme';

export const ThemeContext = createContext({
  mode: '',
  theme: '',
  initTheme: () => {},
  changeTheme: () => {},
});

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('');
  const [mode, setMode] = useState('system');
  const systemTheme = useColorScheme();

  const initTheme = useCallback(async () => {
    const themeMode = await getStoreThemeMode();
    setMode(themeMode ?? 'system');
    setTheme(themeMode == 'system' ? (systemTheme ?? 'light') : themeMode);
    await saveThemeMode(mode);
  }, []);

  const changeTheme = useCallback(async (t) => {
    setMode(t);
    setTheme(t == 'system' ? (systemTheme ?? 'light') : t);
    await saveThemeMode(t);
  }, []);

  useEffect(() => {
    const subscriber = Appearance.addChangeListener((event) => {
      setTheme(mode == 'system' ? (event.colorScheme ?? 'light') : mode);
    });
    return () => {
      subscriber.remove();
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        mode,
        initTheme,
        changeTheme,
      }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
