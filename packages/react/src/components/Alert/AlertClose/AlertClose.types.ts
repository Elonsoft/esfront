import { CSSProperties, ReactNode } from 'react';

export interface AlertCloseProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Text for the button aria-label. */
  label?: string;
  /** Icon for the button. */
  icon?: ReactNode;
  /** Callback fired when the button is clicked.*/
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
