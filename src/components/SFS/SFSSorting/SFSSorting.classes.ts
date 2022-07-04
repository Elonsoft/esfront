import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SFSSortingClasses = {
  /** Styled applied to the root element. */
  root: string;
  /** Styles applied to the open sorting menu button. */
  openMenuButton: string;
  /** Styles applied to the open sorting menu button badge. */
  openMenuButtonBadge: string;
  /** Styles applied to the root popover element. */
  sortingMenuRoot: string;
  /** Styles applied to the sorting menu item element. */
  sortingMenuItem: string;
  /** Styles applied to the menu header. */
  menuHeader: string;
  /** Styles applied to the menu footer. */
  menuFooter: string;
  /** Styles applied to the change sort direction button. */
  changeSortDirectionButton: string;
  /** Styles applied to the reset sort button. */
  resetSortButton: string;
  /** Styles applied to the sorting menu item sorting menu item badge. */
  sortingOptionBadge: string;
};

export type SFSSortingClassKey = keyof SFSSortingClasses;

export function getSFSSortingUtilityClass(slot: string) {
  return generateUtilityClass('ESSFSSorting', slot);
}

export const sfsSortingClasses: SFSSortingClasses = generateUtilityClasses('ESSFSSorting', [
  'root',
  'openMenuButton',
  'openMenuButtonBadge',
  'sortingMenuRoot',
  'sortingMenuItem',
  'menuHeader',
  'menuFooter',
  'resetSortButton',
  'changeSortDirectionButton',
  'sortingOptionBadge'
]);
