import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type TimelineItemClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the content element. */
  content: string;
  /** Styles applied to the separator element. */
  separator: string;
  /** Styles applied to the tooltip element. */
  tooltip: string;
};

export type TimelineItemClassKey = keyof TimelineItemClasses;

export function getTimelineItemUtilityClass(slot: string): string {
  return generateUtilityClass('ESTimelineItem', slot);
}

export const timelineItemClasses: TimelineItemClasses = generateUtilityClasses('ESTimelineItem', [
  'root',
  'content',
  'separator',
  'tooltip'
]);
