import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type ButtonClasses = {
  /** Styles applied to the root element. */
  root: string;

  fullWidth: string;

  rounded: string;

  size100: string;
  size200: string;
  size300: string;
  size400: string;
  size500: string;
  size600: string;
  size700: string;
  size800: string;
  size900: string;
  size1000: string;

  variantText: string;
  variantOutlined: string;
  variantContained: string;

  colorPrimary: string;
  colorSecondary: string;
  colorTertiary: string;
  colorSuccess: string;
  colorError: string;
  colorInfo: string;
  colorWarning: string;
  colorMonoA: string;
  colorMonoB: string;
  colorBlack: string;
  colorWhite: string;

  icon: string;
  startIcon: string;
  endIcon: string;
};
export type ButtonClassKey = keyof ButtonClasses;

export function getButtonUtilityClass(slot: string): string {
  return generateUtilityClass('ESButton', slot);
}

export const buttonClasses: ButtonClasses = generateUtilityClasses('ESButton', [
  'root',
  'fullWidth',
  'rounded',
  'size100',
  'size200',
  'size300',
  'size400',
  'size500',
  'size600',
  'size700',
  'size800',
  'size900',
  'size1000',
  'variantText',
  'variantOutlined',
  'variantContained',
  'colorPrimary',
  'colorSecondary',
  'colorTertiary',
  'colorSuccess',
  'colorError',
  'colorInfo',
  'colorWarning',
  'colorMonoA',
  'colorMonoB',
  'colorBlack',
  'colorWhite',
  'icon',
  'startIcon',
  'endIcon',
]);
