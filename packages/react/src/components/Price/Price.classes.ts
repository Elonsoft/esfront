import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type PriceClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if old=true. */
  old: string;
  /** Styles applied to the price element. */
  price: string;
  /** Styles applied to the currency element. */
  currency: string;
  /** Styles applied to the line element. */
  line: string;
};
export type PriceClassKey = keyof PriceClasses;

export function getPriceUtilityClass(slot: string): string {
  return generateUtilityClass('ESPrice', slot);
}

export const priceClasses: PriceClasses = generateUtilityClasses('ESPrice', [
  'root',
  'old',
  'price',
  'currency',
  'line',
]);
