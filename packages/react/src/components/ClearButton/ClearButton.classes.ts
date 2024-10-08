import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type ClearButtonClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type ClearButtonClassKey = keyof ClearButtonClasses;

export function getClearButtonUtilityClass(slot: string): string {
  return generateUtilityClass('ESClearButton', slot);
}

export const clearButtonClasses: ClearButtonClasses = generateUtilityClasses('ESClearButton', ['root']);
