import { ReactNode } from 'react';

import { CalendarButtonClasses } from './CalendarButton.classes';

import { SxProps, Theme } from '@mui/material';
import { TooltipProps } from '@mui/material/Tooltip';

export interface CalendarButtonProps {
  children?: ReactNode;

  /** Override or extend the styles applied to the component. */
  classes?: Partial<CalendarButtonClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** Whether the date is disabled. */
  disabled?: boolean;
  /** Whether the date is inactive. */
  inactive?: boolean;

  /** Whether the date is selected. */
  selected?: boolean;
  /** Whether the date is hovered. */
  hovered?: boolean;
  /** Whether the date is today. */
  today?: boolean;

  /** The position of selected button in the selection range. */
  position?: 'between' | 'start' | 'end';

  /** Callback fired when the date button is clicked. */
  onClick?: () => void;
  /** Callback fired when the date button is hovered or focused. */
  onHover?: () => void;

  /** Props applied to the tooltip component. */
  TooltipProps?: Partial<TooltipProps>;
}
