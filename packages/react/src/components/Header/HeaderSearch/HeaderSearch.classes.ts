import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type HeaderSearchClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type HeaderSearchClassKey = keyof HeaderSearchClasses;

export function getHeaderSearchUtilityClass(slot: string): string {
  return generateUtilityClass('ESHeaderSearch', slot);
}

export const headerSearchClasses: HeaderSearchClasses = generateUtilityClasses('ESHeaderSearch', ['root']);
