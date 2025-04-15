import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type FiltersHeaderClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the title element. */
  title: string;
  /** Styles applied to the children element. */
  children: string;
};
export type FiltersHeaderClassKey = keyof FiltersHeaderClasses;

export function getFiltersHeaderUtilityClass(slot: string): string {
  return generateUtilityClass('ESFiltersHeader', slot);
}

export const filtersHeaderClasses: FiltersHeaderClasses = generateUtilityClasses('ESFiltersHeader', [
  'root',
  'title',
  'children',
]);
