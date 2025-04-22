import { useSelector } from 'react-redux';

const useAppTheme = () => {
  const theme = useSelector((state) => state.theme.theme);
  const isLight = theme === 'light';

  return {
    isLight,
    theme,
  };
};

export default useAppTheme;
