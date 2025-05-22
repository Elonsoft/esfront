import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SearchClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the clear button. */
  clear: string;
};

export type SearchClassKey = keyof SearchClasses;

export function getSearchUtilityClass(slot: string) {
  return generateUtilityClass('ESSearch', slot);
}

export const searchClasses: SearchClasses = generateUtilityClasses('ESSearch', ['root', 'clear']);
