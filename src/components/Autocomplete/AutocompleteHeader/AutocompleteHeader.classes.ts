import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type AutocompleteHeaderClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AutocompleteHeaderClassKey = keyof AutocompleteHeaderClasses;

export function getAutocompleteHeaderUtilityClass(slot: string): string {
  return generateUtilityClass('ESAutocompleteHeader', slot);
}

export const autocompleteHeaderClasses: AutocompleteHeaderClasses = generateUtilityClasses('ESAutocompleteHeader', [
  'root'
]);
