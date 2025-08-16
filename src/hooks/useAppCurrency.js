import { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyProvider';

const useAppCurrency = () => {
  const currencyCtx = useContext(CurrencyContext);
  return currencyCtx;
};

export default useAppCurrency;
