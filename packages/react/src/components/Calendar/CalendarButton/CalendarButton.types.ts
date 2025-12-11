import { CSSProperties, ReactNode } from 'react';

import { TooltipProps } from '../../Tooltip';

export interface CalendarButtonProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

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
