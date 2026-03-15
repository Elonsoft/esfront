import { CSSProperties, ReactNode } from 'react';

export interface AlertContentProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /**
   * The breakpoint at which the flex items are ordered along the cross axis.
   */
  breakpoint?: string;

  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  actions?: ReactNode;
}
