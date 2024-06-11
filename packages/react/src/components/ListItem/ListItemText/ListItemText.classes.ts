import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type ListItemTextClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the Typography component if primary and secondary are set. */
  multiline: string;
  /** Styles applied to the root element if `inset={true}`. */
  inset: string;
  /** Styles applied to the primary `Typography` component. */
  primary: string;
  /** Styles applied to the secondary `Typography` component. */
  secondary: string;
};
export type ListItemTextClassKey = keyof ListItemTextClasses;

export function getListItemTextUtilityClass(slot: string): string {
  return generateUtilityClass('ESListItemText', slot);
}

export const listItemTextClasses: ListItemTextClasses = generateUtilityClasses('ESListItemText', [
  'root',
  'multiline',
  'inset',
  'primary',
  'secondary',
]);
