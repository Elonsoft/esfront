import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type AutocompleteClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the input element. */
  input: string;
  /** Styles applied to the popover element. */
  popover: string;
  /** Styles applied to the menu list element. */
  menuList: string;
  /** Styles applied to the menu item element. */
  menuItem: string;
  /** Styles applied to the sentinel element. */
  sentinel: string;
  /** Styles applied to the empty state element. */
  emptyState: string;
  /** Styles applied to the search field element. */
  search: string;
  /** Styles applied to the footer element. */
  footer: string;
  /** Styles applied to the input placeholder element. */
  inputPlaceholder: string;
};
export type AutocompleteClassKey = keyof AutocompleteClasses;

export function getAutocompleteUtilityClass(slot: string): string {
  return generateUtilityClass('ESAutocomplete', slot);
}

export const autocompleteClasses: AutocompleteClasses = generateUtilityClasses('ESAutocomplete', [
  'root',
  'input',
  'popover',
  'menuList',
  'menuItem',
  'sentinel',
  'emptyState',
  'search',
  'footer',
  'inputPlaceholder'
]);
