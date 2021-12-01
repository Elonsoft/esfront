import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type TableCellClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if variant="head". */
  head: string;
  /** Styles applied to the root element if variant="body". */
  body: string;
  /** Styles applied to the root element if padding="none". */
  paddingNone: string;
  /** Styles applied to the root element if padding="normal". */
  paddingNormal: string;
  /** Styles applied to the root element if padding="checkbox". */
  paddingCheckbox: string;
  /** Styles applied to the root element if overlap="true". */
  overlap: string;
  /** Styles applied to the container element. */
  container: string;
  /** Styles applied to the content element. */
  content: string;
};
export type TableCellClassKey = keyof TableCellClasses;

export function getTableCellUtilityClass(slot: string): string {
  return generateUtilityClass('ESTableCell', slot);
}

export const tableCellClasses: TableCellClasses = generateUtilityClasses('ESTableCell', [
  'root',
  'head',
  'body',
  'paddingNone',
  'paddingNormal',
  'paddingCheckbox',
  'overlap',
  'container',
  'content'
]);
