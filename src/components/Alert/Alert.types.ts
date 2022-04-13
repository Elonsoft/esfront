import { ReactNode } from 'react';

import { AlertClasses } from './Alert.classes';

import { SxProps, Theme } from '@mui/material';

export interface AlertProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AlertClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
  /** The icon displayed before the message. */
  icon?: ReactNode;

  /**
   * The variant to use.
   * @default 'standard'
   */
  variant?: 'standard';

  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity?: 'success' | 'warning' | 'error' | 'info';

  /**
   * The color of the component. Unless provided, the value is taken from the `severity` prop.
   */
  color?: 'success' | 'warning' | 'error' | 'info' | 'monoA';

  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action?: ReactNode;

  /**
   * The component maps the severity prop to a range of different icons.
   * If you wish to change this mapping, you can provide your own.
   */
  iconMapping?: Record<'info' | 'success' | 'error' | 'warning', ReactNode>;
}
