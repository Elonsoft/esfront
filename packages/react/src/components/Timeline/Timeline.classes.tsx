import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type TimelineClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the list element. */
  list: string;
  /** Styles applied to the button element. */
  buttonMore: string;
  /** Styles applied to the menu  element. */
  menu: string;
  /** Styles applied to the menu item element. */
  menuItem: string;
  /** Styles applied to the tooltip element. */
  tooltip: string;
};

export type TimelineClassKey = keyof TimelineClasses;

export function getTimelineUtilityClass(slot: string): string {
  return generateUtilityClass('ESTimeline', slot);
}

export const timelineClasses: TimelineClasses = generateUtilityClasses('ESTimeline', [
  'root',
  'list',
  'buttonMore',
  'menu',
  'menuItem',
  'tooltip'
]);
