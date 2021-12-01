import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type TableFootClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if it is sticky. */
  sticky: string;
};
export type TableFootClassKey = keyof TableFootClasses;

export function getTableFootUtilityClass(slot: string): string {
  return generateUtilityClass('ESTableFoot', slot);
}

export const tableFootClasses: TableFootClasses = generateUtilityClasses('ESTableFoot', ['root', 'sticky']);
