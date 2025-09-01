import React, { createContext, useCallback, useEffect, useState } from 'react';

import {
  getCurrency,
  restoreCurrency,
  storeCurrency,
} from '../../utils/currency';

export const CurrencyContext = createContext({
  currency: '',
  changeCurrency: () => {},
});

const CurrencyProvider = (props) => {
  const system = getCurrency();
  const [currency, setCurrency] = useState(system);

  useEffect(() => {
    const init = async () => {
      const restore = await restoreCurrency();
      if (restore) {
        setCurrency(restore);
      }
    };
    init();
  });

  const changeCurrency = useCallback(async (cur) => {
    setCurrency(cur);
    await storeCurrency(cur);
  }, []);

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        changeCurrency,
      }}>
      {props.children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
