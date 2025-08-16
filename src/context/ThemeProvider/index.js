import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { Appearance, useColorScheme } from 'react-native';
import { getSaveThemePreference, saveThemePreference } from '../../utils/theme';

export const ThemeContext = createContext({
  preference: '',
  theme: '',
  initTheme: () => {},
  changeTheme: () => {},
});

const ThemeProvider = (props) => {
  const system = useColorScheme();
  const [preference, setPreference] = useState('system');
  const [systemScheme, setSystemScheme] = useState(system);

  const initTheme = useCallback(async () => {
    const themeMode = await getSaveThemePreference();
    if (
      themeMode === 'light' ||
      themeMode === 'dark' ||
      themeMode === 'system'
    ) {
      setPreference(themeMode);
    }
  }, []);

  const changeTheme = useCallback(async (p) => {
    setPreference(p);
    await saveThemePreference(p);
  }, []);

  useEffect(() => {
    const subscriber = Appearance.addChangeListener((event) => {
      setSystemScheme(event.colorScheme);
    });
    return () => subscriber.remove();
  }, []);

  const theme = useMemo(
    () => (preference == 'system' ? (systemScheme ?? 'light') : preference),
    [preference, systemScheme]
  );

  return (
    <ThemeContext.Provider
      value={{
        theme,
        preference,
        initTheme,
        changeTheme,
      }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
