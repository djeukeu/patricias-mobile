import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

const useAppTheme = () => {
  const themeCtx = useContext(ThemeContext);
  return themeCtx;
};

export default useAppTheme;
