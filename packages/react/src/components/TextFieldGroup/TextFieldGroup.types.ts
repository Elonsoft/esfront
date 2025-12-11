import { CSSProperties, ReactNode } from 'react';

export interface TextFieldGroupProps {
  children?: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;
  /** The breakpoint at which the flex items are ordered along the cross axis.
   * @default 'sm'
   */
  breakpoint?: string;
}
