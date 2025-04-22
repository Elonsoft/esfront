import { PriceClasses } from './Price.classes';

import { SxProps, Theme } from '@mui/material';

export interface PriceProps {
  children: number;
  /** The currency to use in formatting. Possible values are the ISO 4217 currency codes. */
  currency: string;

  /** Override or extend the styles applied to the component. */
  classes?: Partial<PriceClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;

  /** If true, the price is old. */
  old?: boolean;

  /** A string with a BCP 47 language tag, or an array of such strings. */
  locales?: Intl.LocalesArgument;
  /** The minimum number of fraction digits to use. */
  minimumFractionDigits?: number;
  /** The maximum number of fraction digits to use. */
  maximumFractionDigits?: number;

  /** If true, the microdata meta tags will not be rendered. */
  disableMicrodata?: boolean;
}
