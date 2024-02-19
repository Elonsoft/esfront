import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type BadgeClasses = {
  /** Styles applied to the root element. */
  root: string;
  clickable: string;

  colorMonoA: string;
  colorMonoB: string;
  colorMonoB500: string;
  colorPrimary: string;
  colorSecondary: string;
  colorSuccess: string;
  colorWarning: string;
  colorError: string;
  colorInfo: string;

  size100: string;
  size200: string;
  size300: string;
  size400: string;
  size500: string;
  size600: string;
  size700: string;
};
export type BadgeClassKey = keyof BadgeClasses;

export function getBadgeUtilityClass(slot: string): string {
  return generateUtilityClass('ESBadge', slot);
}

export const badgeClasses: BadgeClasses = generateUtilityClasses('ESBadge', [
  'root',
  'clickable',
  'colorMonoA',
  'colorMonoB',
  'colorMonoB500',
  'colorPrimary',
  'colorSecondary',
  'colorSuccess',
  'colorWarning',
  'colorError',
  'colorInfo',
  'size100',
  'size200',
  'size300',
  'size400',
  'size500',
  'size600',
  'size700',
]);
