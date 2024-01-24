import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type PhoneFieldClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the input start adornment element. */
  startAdornment: string;
  /** Styles applied to the menu button element. */
  menuButton: string;
  /** Styles applied to the menu button element if menu is open. */
  menuButtonOpen: string;
  /** Styles applied to the menu item element. */
  item: string;
  /** Styles applied to the menu item primary element. */
  itemPrimary: string;
  /** Styles applied to the menu item country display name element. */
  countryDisplayName: string;
  /** Styles applied to the menu item country calling code element. */
  countryCallingCode: string;
};
export type PhoneFieldClassKey = keyof PhoneFieldClasses;

export function getPhoneFieldUtilityClass(slot: string): string {
  return generateUtilityClass('ESPhoneField', slot);
}

export const phoneFieldClasses: PhoneFieldClasses = generateUtilityClasses('ESPhoneField', [
  'root',
  'startAdornment',
  'menuButton',
  'menuButtonOpen',
  'item',
  'itemPrimary',
  'countryDisplayName',
  'countryCallingCode',
]);
