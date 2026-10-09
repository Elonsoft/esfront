import { CSSProperties, ReactNode } from 'react';

export interface DialogActionsProps {
  children?: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;
  /** Whether the actions should be sticky. */
  sticky?: boolean;
  /**
   * The direction the actions are laid out in.
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * If `true`, the actions stretch to fill the available space instead of hugging their content.
   * @default false
   */
  fullWidth?: boolean;
}
