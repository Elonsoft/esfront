import { PriceProps } from './Price.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

const getCurrencySymbol = (locales: Intl.LocalesArgument, currency: string) => {
  return Number(0)
    .toLocaleString(locales, {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, '')
    .trim();
};

/**
 * Display price of the product.
 */
export const Price = (inProps: PriceProps) => {
  const {
    children,
    className,
    style,
    currency,
    old,
    locales,
    minimumFractionDigits,
    maximumFractionDigits,
    disableMicrodata,
  } = useDefaultProps({
    props: inProps,
    name: 'ESPrice',
  });

  return (
    <div className={clsx(className, 'es-price', old && 'es-price--old', old ? 'body100' : 'h5')} style={style}>
      {!old && !disableMicrodata && (
        <>
          <meta content={currency} itemProp="priceCurrency" />
          <meta content={children.toFixed(2)} itemProp="price" />
        </>
      )}
      <span className="es-price__price">
        {Number(children).toLocaleString(locales, { minimumFractionDigits, maximumFractionDigits })}
      </span>
      <span className="es-price__currency">{getCurrencySymbol(locales, currency)}</span>
      {!!old && <div className="es-price__line" />}
    </div>
  );
};
