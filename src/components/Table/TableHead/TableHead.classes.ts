import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type TableHeadClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if it is sticky. */
  sticky: string;
};
export type TableHeadClassKey = keyof TableHeadClasses;

export function getTableHeadUtilityClass(slot: string): string {
  return generateUtilityClass('ESTableHead', slot);
}

export const tableHeadClasses: TableHeadClasses = generateUtilityClasses('ESTableHead', ['root', 'sticky']);
