import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type StoreBadgeClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if component checked. */
  checked: string;
  /** Styles applied to the root element if component disabled. */
  disabled: string;
  /** Styles applied to the root element if size='large'. */
  large: string;
  /** Styles applied to the root element if size='medium'. */
  medium: string;
  /** Styles applied to the root element if size='small'. */
  small: string;
  /** Styles applied to the track element. */
  track: string;
  /** Styles applied to the input element. */
  input: string;
  /** Styles applied to the thumb element. */
  thumb: string;
  /** Styles applied to the button element. */
  button: string;

  text: string;
};

export type StoreBadgeClassKey = keyof StoreBadgeClasses;

export function getStoreBadgeUtilityClass(slot: string): string {
  return generateUtilityClass('ESStoreBadge', slot);
}

export const storeBadgeClasses: StoreBadgeClasses = generateUtilityClasses('ESStoreBadge', [
  'root',
  'text',
  'checked',
  'track',
  'input',
  'thumb',
  'button',
  'disabled',
  'large',
  'medium',
  'small'
]);
