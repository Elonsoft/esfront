import { CSSProperties, ReactNode } from 'react';

import { TooltipEllipsisProps } from '../../TooltipEllipsis';

export interface TableTextProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /**
   * If true, shows the tooltip when text is truncated.
   * @default true
   */
  tooltip?: boolean;
  /** Props applied to the Tooltip component. */
  TooltipProps?: Omit<TooltipEllipsisProps, 'children'>;
}
