import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export interface ListItemClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `button={true}`. */
  button: string;
  /** Styles applied to the root element if `alignItems="center"`. */
  alignItemsCenter: string;
  /** Styles applied to the root element if `alignItems="flex-start"`. */
  alignItemsFlexStart: string;
  /** Styles applied to the root element if size="100". */
  size100: string;
  /** Styles applied to the root element if size="200". */
  size200: string;
  /** Styles applied to the root element if size="300". */
  size300: string;
  /** Styles applied to the root element if size="400". */
  size400: string;
  /** State class applied to the inner `component` element if `disabled={true}`. */
  disabled: string;
  /** State class applied to the root element if `selected={true}`. */
  selected: string;
  /** State class applied to the root element if `error={true}`. */
  error: string;
}

export type ListItemClassKey = keyof ListItemClasses;

export function getListItemUtilityClass(slot: string): string {
  return generateUtilityClass('ESListItem', slot);
}

export const listItemClasses: ListItemClasses = generateUtilityClasses('ESListItem', [
  'root',
  'button',
  'alignItemsCenter',
  'alignItemsFlexStart',
  'size100',
  'size200',
  'size300',
  'size400',
  'disabled',
  'selected',
  'error',
  'button',
]);
