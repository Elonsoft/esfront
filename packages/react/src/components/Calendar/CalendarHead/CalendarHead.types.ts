import { CSSProperties, ReactNode } from 'react';

export interface CalendarHeadProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** The day the week starts with. */
  weekStart?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** The labels for the days of week. */
  getWeekDays?: () => ReactNode[];
}
