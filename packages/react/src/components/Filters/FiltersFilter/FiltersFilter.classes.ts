import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type FiltersFilterClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the header element. */
  header: string;
  /** Styles applied to the container element. */
  container: string;
  /** Styles applied to the title element. */
  title: string;
  /** Styles applied to the toggle element. */
  toggle: string;
  /** Styles applied to the information icon element. */
  informationIcon: string;
  /** Styles applied to the endAdornment element. */
  endAdornment: string;
  /** Styles applied to the content element. */
  content: string;
};
export type FiltersFilterClassKey = keyof FiltersFilterClasses;

export function getFiltersFilterUtilityClass(slot: string): string {
  return generateUtilityClass('ESFiltersFilter', slot);
}

export const filtersFilterClasses: FiltersFilterClasses = generateUtilityClasses('ESFiltersFilter', [
  'root',
  'header',
  'container',
  'title',
  'toggle',
  'informationIcon',
  'endAdornment',
  'content',
]);
