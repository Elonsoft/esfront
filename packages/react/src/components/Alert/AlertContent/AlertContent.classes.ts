import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type AlertContentClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the message element. */
  message: string;
};
export type AlertContentClassKey = keyof AlertContentClasses;

export function getAlertContentUtilityClass(slot: string): string {
  return generateUtilityClass('ESAlertContent', slot);
}

export const alertContentClasses: AlertContentClasses = generateUtilityClasses('ESAlertContent', ['root', 'message']);
