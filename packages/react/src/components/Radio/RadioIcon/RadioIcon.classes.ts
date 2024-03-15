import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type RadioIconClasses = {
  /** Class name applied to the root element. */
  root: string;
  circle: string;
};
export type RadioIconClassKey = keyof RadioIconClasses;

export function getRadioIconUtilityClass(slot: string): string {
  return generateUtilityClass('ESRadioIcon', slot);
}

export const radioIconClasses: RadioIconClasses = generateUtilityClasses('ESRadioIcon', ['root', 'circle']);
