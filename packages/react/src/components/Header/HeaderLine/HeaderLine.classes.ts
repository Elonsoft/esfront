import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type HeaderLineClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type HeaderLineClassKey = keyof HeaderLineClasses;

export function getHeaderLineUtilityClass(slot: string): string {
  return generateUtilityClass('ESHeaderLine', slot);
}

export const headerLineClasses: HeaderLineClasses = generateUtilityClasses('ESHeaderLine', ['root']);
