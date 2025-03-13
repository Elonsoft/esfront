import { ReactNode } from 'react';

import { SFSChipsClasses } from './SFSChips.classes';

import { SxProps, Theme } from '@mui/material';

import { TooltipProps } from '../../Tooltip';

export interface SFSChipsProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SFSChipsClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;

  /** Text for the delete button label. */
  labelDelete?: string;
  /** Icon for the delete button. */
  iconDelete?: ReactNode;
  /** Callback fired when the delete button is clicked.*/
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;

  /** Props applied to the Tooltip component. */
  TooltipProps?: Partial<Omit<TooltipProps, 'children'>>;
}
