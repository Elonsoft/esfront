import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type TabScrollButtonClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** State class applied to the root element if `disabled={true}`. */
  disabled: string;
  /** State class applied to the root element if `direction='left'`. */
  directionLeft: string;
  /** State class applied to the root element if `direction='right'`. */
  directionRight: string;
  /** Styles applied to the icon element. */
  icon: string;
  /** Styles applied to the gradient element. */
  gradient: string;
  /** Styles applied to the divider element. */
  divider: string;
};

export type TabScrollButtonClassKey = keyof TabScrollButtonClasses;

export function getTabScrollButtonUtilityClass(slot: string) {
  return generateUtilityClass('ESTabScrollButton', slot);
}

export const tabScrollButtonClasses: TabScrollButtonClasses = generateUtilityClasses('ESTabScrollButton', [
  'root',
  'disabled',
  'directionLeft',
  'directionRight',
  'icon',
  'gradient',
  'divider',
]);
