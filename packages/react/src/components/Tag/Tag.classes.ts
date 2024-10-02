import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type TagClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the children element. */
  children: string;
  /** Styles applied to the root element if clickable="true". */
  clickable: string;
  /** Styles applied to the icon element. */
  icon: string;
  /** Styles applied to the root element if it has startIcon. */
  startIcon: string;
  /** Styles applied to the root element if it has endIcon. */
  endIcon: string;

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
};
export type TagClassKey = keyof TagClasses;

export function getTagUtilityClass(slot: string): string {
  return generateUtilityClass('ESTag', slot);
}

export const tagClasses: TagClasses = generateUtilityClasses('ESTag', [
  'root',
  'icon',
  'startIcon',
  'endIcon',
  'children',
  'clickable',
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
]);
