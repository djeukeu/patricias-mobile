import React from 'react';
import { useTranslation } from 'react-i18next';
import NumberFormat from 'react-number-format';
import { useAppCurrency } from '../../hooks';

const CurrencyFormater = ({ amount, renderText, freeTxt = true }) => {
  const { currency } = useAppCurrency();
  const free = amount === 0;
  const { t } = useTranslation();

  return (
    <>
      {free && freeTxt ? (
        <NumberFormat
          value={t('free')}
          displayType={'text'}
          isNumericString={true}
          renderText={renderText}
        />
      ) : (
        <NumberFormat
          value={amount}
          displayType={'text'}
          thousandSeparator=","
          decimalScale={2}
          allowNegative={false}
          prefix={currency + ' '}
          isNumericString={true}
          renderText={renderText}
        />
      )}
    </>
  );
};

export default CurrencyFormater;
