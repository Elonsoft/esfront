import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type ToggleButtonClasses = {
  /** Styled applied to the root element. */
  root: string;
  selected: string;
  fullWidth: string;

  size400: string;
  size500: string;
  size600: string;
  size700: string;

  icon: string;
  startIcon: string;
  endIcon: string;
};

export type ToggleButtonClassKey = keyof ToggleButtonClasses;

export function getToggleButtonUtilityClass(slot: string) {
  return generateUtilityClass('ESToggleButton', slot);
}

export const toggleButtonClasses: ToggleButtonClasses = generateUtilityClasses('ESToggleButton', [
  'root',
  'selected',
  'fullWidth',
  'size400',
  'size500',
  'size600',
  'size700',
  'icon',
  'startIcon',
  'endIcon',
]);
