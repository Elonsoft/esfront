import { CSSProperties, ReactNode } from 'react';

export interface AlertProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

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
  color?: 'success' | 'warning' | 'error' | 'info' | 'mono-a';

  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action?: ReactNode;

  /**
   * The actions to display.
   */
  actions?: ReactNode;

  /**
   * The breakpoint at which the flex items are ordered in row.
   * @default '0'
   */
  breakpoint?: string | null;

  /**
   * The breakpoint at which the content flex items are ordered in row.
   * @default '0'
   */
  breakpointContent?: string | null;

  /**
   * The component maps the severity prop to a range of different icons.
   * If you wish to change this mapping, you can provide your own.
   */
  iconMapping?: Record<'info' | 'success' | 'error' | 'warning', ReactNode>;
}
