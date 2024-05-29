import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type StoreBadgeClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if component disabled. */
  disabled: string;
  /** Styles applied to the container element. */
  container: string;
  /** Styles applied to the text element. */
  text: string;
};

export type StoreBadgeClassKey = keyof StoreBadgeClasses;

export function getStoreBadgeUtilityClass(slot: string): string {
  return generateUtilityClass('ESStoreBadge', slot);
}

export const storeBadgeClasses: StoreBadgeClasses = generateUtilityClasses('ESStoreBadge', [
  'root',
  'text',
  'disabled',
  'container'
]);
