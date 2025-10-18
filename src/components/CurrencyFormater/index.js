import React from 'react';

import { NumericFormat } from 'react-number-format';

import { useAppCurrency } from '../../hooks';

const CurrencyFormater = ({ amount, renderText }) => {
  const { currency } = useAppCurrency();

  return (
    <NumericFormat
      value={amount}
      displayType={'text'}
      thousandSeparator=","
      decimalScale={2}
      allowNegative={false}
      prefix={currency + ' '}
      isNumericString={true}
      renderText={renderText}
    />
  );
};

export default CurrencyFormater;
