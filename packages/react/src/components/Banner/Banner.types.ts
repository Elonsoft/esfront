import { CSSProperties, ReactNode } from 'react';

import { Breakpoint } from '@mui/material/styles';

export interface BannerProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** The icon displayed before the message. */
  icon?: ReactNode;

  /**
   * The variant to use.
   * @default 'colored'
   */
  variant?: 'colored' | 'mono-b';

  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity?: 'success' | 'warning' | 'error' | 'info';

  /**
   * The color of the component. Unless provided, the value is taken from the `severity` prop.
   */
  color?: 'success' | 'warning' | 'error' | 'info' | 'mono-a' | 'primary' | 'secondary';

  /** The screen width at which the flex items are ordered along the cross axis.
   * @default 'tabletXS'
   */
  breakpoint?: number | Breakpoint;

  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action?: ReactNode;

  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  actions?: ReactNode;

  /**
   * The component maps the severity prop to a range of different icons.
   * If you wish to change this mapping, you can provide your own.
   */
  iconMapping?: Record<'info' | 'success' | 'error' | 'warning', ReactNode>;
}
