import { ReactNode } from 'react';

import { CalendarHeadClasses } from './CalendarHead.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface CalendarHeadProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<CalendarHeadClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** The day the week starts with. */
  weekStart?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** The labels for the days of week. */
  getWeekDays?: () => ReactNode[];
}
