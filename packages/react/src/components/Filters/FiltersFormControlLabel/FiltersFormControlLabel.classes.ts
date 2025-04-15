import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type FiltersFormControlLabelClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the count element. */
  count: string;
};
export type FiltersFormControlLabelClassKey = keyof FiltersFormControlLabelClasses;

export function getFiltersFormControlLabelUtilityClass(slot: string): string {
  return generateUtilityClass('ESFiltersFormControlLabel', slot);
}

export const filtersFormControlLabelClasses: FiltersFormControlLabelClasses = generateUtilityClasses(
  'ESFiltersFormControlLabel',
  ['root', 'count']
);
