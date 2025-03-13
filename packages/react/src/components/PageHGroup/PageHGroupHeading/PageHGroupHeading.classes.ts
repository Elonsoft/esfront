import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type PageHGroupHeadingClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the title element. */
  title: string;
  /** Styles applied to the tooltip element. */
  tooltip: string;
  /** Styles applied to the end adornment element. */
  endAdornment: string;
};
export type PageHGroupHeadingClassKey = keyof PageHGroupHeadingClasses;

export function getPageHGroupHeadingUtilityClass(slot: string): string {
  return generateUtilityClass('ESPageHGroupHeading', slot);
}

export const pageHGroupHeadingClasses: PageHGroupHeadingClasses = generateUtilityClasses('ESPageHGroupHeading', [
  'root',
  'title',
  'tooltip',
  'endAdornment',
]);
