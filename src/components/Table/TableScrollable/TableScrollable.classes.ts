import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type TableScrollableClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type TableScrollableClassKey = keyof TableScrollableClasses;

export function getTableScrollableUtilityClass(slot: string): string {
  return generateUtilityClass('ESTableScrollable', slot);
}

export const tableScrollableClasses: TableScrollableClasses = generateUtilityClasses('ESTableScrollable', ['root']);
