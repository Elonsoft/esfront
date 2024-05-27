import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type TableItemClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the content element. */
  content: string;
  /** Styles applied to the primary element. */
  primary: string;
  /** Styles applied to the secondary element. */
  secondary: string;
};
export type TableItemClassKey = keyof TableItemClasses;

export function getTableItemUtilityClass(slot: string): string {
  return generateUtilityClass('ESTableItem', slot);
}

export const tableItemClasses: TableItemClasses = generateUtilityClasses('ESTableItem', [
  'root',
  'content',
  'primary',
  'secondary'
]);
