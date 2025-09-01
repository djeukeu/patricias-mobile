import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useMemo,
} from 'react';

import { Appearance, useColorScheme } from 'react-native';

import { restorePreference, storePreference } from '../../utils/theme';

export const ThemeSettingContext = createContext({
  preference: '',
  theme: '',
  isDark: null,
  changePreference: () => {},
});

const ThemeSettingProvider = (props) => {
  const system = useColorScheme();
  const [preference, setPreference] = useState('system');
  const [systemScheme, setSystemScheme] = useState(system);

  useEffect(() => {
    const init = async () => {
      const restored = await restorePreference();
      if (
        restored === 'light' ||
        restored === 'dark' ||
        restored === 'system'
      ) {
        setPreference(restored);
      }
    };
    init();
  }, []);

  const changePreference = useCallback(async (p) => {
    setPreference(p);
    await storePreference(p);
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

  const isDark = useMemo(() => theme === 'dark', [theme]);

  return (
    <ThemeSettingContext.Provider
      value={{
        theme,
        preference,
        isDark,
        changePreference,
      }}>
      {props.children}
    </ThemeSettingContext.Provider>
  );
};

export const ThemeSettingConsumer = ThemeSettingContext.Consumer;

export default ThemeSettingProvider;
