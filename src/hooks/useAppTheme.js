import { useContext } from 'react';
import { ThemeSettingContext } from '../context/ThemeSettingProvider';

const useAppTheme = () => {
  const themeCtx = useContext(ThemeSettingContext);
  return themeCtx;
};

export default useAppTheme;
