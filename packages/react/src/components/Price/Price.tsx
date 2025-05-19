import { PriceProps } from './Price.types';

import clsx from 'clsx';
import { getPriceUtilityClass, priceClasses } from './Price.classes';

import { styled, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';

type PriceOwnerState = {
  classes?: PriceProps['classes'];
  old?: PriceProps['old'];
};

const useUtilityClasses = (ownerState: PriceOwnerState) => {
  const { classes, old } = ownerState;

  const slots = {
    root: ['root', old && 'old'],
    old: ['old'],
    price: ['price'],
    currency: ['currency'],
    line: ['line'],
  };

  return composeClasses(slots, getPriceUtilityClass, classes);
};

const PriceRoot = styled('div', {
  name: 'ESPrice',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { old },
    } = props;

    return [styles.root, old && styles.old];
  },
})<{ ownerState: PriceOwnerState }>(({ theme }) => ({
  ...theme.typography.h5,

  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  width: 'max-content',

  variants: [
    {
      props: {
        old: true,
      },
      style: {
        ...theme.typography.body100,

        [`& .${priceClasses.price}, & .${priceClasses.currency}`]: {
          color: theme.vars.palette.monoA.A600,
        },
      },
    },
  ],
}));

const PricePrice = styled('span', {
  name: 'ESPrice',
  slot: 'Price',
  overridesResolver: (props, styles) => styles.price,
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A900,
}));

const PriceCurrency = styled('span', {
  name: 'ESPrice',
  slot: 'Currency',
  overridesResolver: (props, styles) => styles.currency,
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A500,
}));

const PriceLine = styled('div', {
  name: 'ESPrice',
  slot: 'Line',
  overridesResolver: (props, styles) => styles.line,
})(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '-1px',
  right: '-1px',
  transform: 'translateY(-50%)',
  height: '2px',
  backgroundColor: theme.vars.palette.error.A800,
  borderRadius: '4px',
}));

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
    className,
    classes: inClasses,
    children,
    sx,
    currency,
    old,
    locales,
    minimumFractionDigits,
    maximumFractionDigits,
    disableMicrodata,
  } = useThemeProps({
    props: inProps,
    name: 'ESPrice',
  });

  const ownerState = { classes: inClasses, old };
  const classes = useUtilityClasses(ownerState);

  return (
    <PriceRoot className={clsx(className, classes.root)} ownerState={ownerState} sx={sx}>
      {!old && !disableMicrodata && (
        <>
          <meta content={currency} itemProp="priceCurrency" />
          <meta content={children.toFixed(2)} itemProp="price" />
        </>
      )}
      <PricePrice className={classes.price}>
        {Number(children).toLocaleString(locales, { minimumFractionDigits, maximumFractionDigits })}
      </PricePrice>
      <PriceCurrency className={classes.currency}>{getCurrencySymbol(locales, currency)}</PriceCurrency>
      {!!old && <PriceLine className={classes.line} />}
    </PriceRoot>
  );
};
