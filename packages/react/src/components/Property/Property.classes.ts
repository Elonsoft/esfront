import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type PropertyClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if size='s'. */
  sizeS: string;
  /** Styles applied to the root element if size='m'. */
  sizeM: string;
  /** Styles applied to the name element. */
  name: string;
  /** Styles applied to the value element. */
  value: string;
  /** Styles applied to the divider element. */
  divider: string;
};
export type PropertyClassKey = keyof PropertyClasses;

export function getPropertyUtilityClass(slot: string): string {
  return generateUtilityClass('ESProperty', slot);
}

export const propertyClasses: PropertyClasses = generateUtilityClasses('ESProperty', [
  'root',
  'sizeS',
  'sizeM',
  'name',
  'value',
  'divider',
]);
