import React, { createContext, useCallback, useState } from 'react';
import {
  getCurrency,
  getStoreCurrency,
  saveCurrency,
} from '../../utils/currency';

export const CurrencyContext = createContext({
  currency: '',
  initCurrency: () => {},
  changeCurrency: () => {},
});

const CurrencyProvider = (props) => {
  const [currency, setCurrency] = useState('');

  const initCurrency = useCallback(async () => {
    const storeCurrency = await getStoreCurrency();
    if (storeCurrency) {
      setCurrency(storeCurrency);
    } else {
      const cur = getCurrency();
      setCurrency(cur);
      await saveCurrency(cur);
    }
  }, []);

  const changeCurrency = useCallback(async (cur) => {
    setCurrency(cur);
    await saveCurrency(cur);
  }, []);

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        initCurrency,
        changeCurrency,
      }}>
      {props.children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
