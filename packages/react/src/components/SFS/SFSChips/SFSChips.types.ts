import { CSSProperties, ReactNode } from 'react';

import { TooltipProps } from '../../Tooltip';

export interface SFSChipsProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Text for the delete button label. */
  labelDelete?: string;
  /** Icon for the delete button. */
  iconDelete?: ReactNode;
  /** Callback fired when the delete button is clicked.*/
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;

  /** Props applied to the Tooltip component. */
  TooltipProps?: Partial<Omit<TooltipProps, 'children'>>;
}
