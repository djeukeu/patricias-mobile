import { useSelector } from 'react-redux';
import { RootState } from '../types/redux';

const useAppTheme = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const isLight = theme === 'light';

  return {
    isLight,
    theme,
  };
};

export default useAppTheme;
