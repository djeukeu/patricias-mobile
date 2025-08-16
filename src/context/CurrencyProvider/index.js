import React, { createContext, useCallback, useState } from 'react';
import {
  getCurrency,
  getSaveCurrency,
  saveCurrency,
} from '../../utils/currency';

export const CurrencyContext = createContext({
  currency: '',
  initCurrency: () => {},
  changeCurrency: () => {},
});

const CurrencyProvider = (props) => {
  const system = getCurrency();
  const [currency, setCurrency] = useState(system);

  const initCurrency = useCallback(async () => {
    const saveCurrency = await getSaveCurrency();
    if (saveCurrency) {
      setCurrency(saveCurrency);
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
