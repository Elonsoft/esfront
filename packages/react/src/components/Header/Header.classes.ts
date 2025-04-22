import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type HeaderClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type HeaderClassKey = keyof HeaderClasses;

export function getHeaderUtilityClass(slot: string): string {
  return generateUtilityClass('ESHeader', slot);
}

export const headerClasses: HeaderClasses = generateUtilityClasses('ESHeader', ['root']);
