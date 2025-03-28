import { ReactNode } from 'react';

import { SnackbarCloseClasses } from './SnackbarClose.classes';

import { SxProps, Theme } from '@mui/material';

import { ButtonOwnProps } from '../../Button';

export interface SnackbarCloseProps {
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SnackbarCloseClasses>;
  /** Class applied to the root element. */
  className?: string;

  /** Text for the button aria-label. */
  label?: string;
  /** Icon for the button. */
  icon?: ReactNode;

  /**
   * The size of the component.
   * @default '400'
   */
  size?: ButtonOwnProps['size'];
  /** If true, the hide progress is shown. */
  progress?: boolean;

  /* Callback fired when the component is clicked. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
