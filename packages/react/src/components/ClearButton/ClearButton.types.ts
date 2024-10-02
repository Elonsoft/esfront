import { CSSProperties, ReactNode } from 'react';

export interface ClearButtonProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Icon for the button. */
  icon?: ReactNode;
  /** Text for the button aria-label. */
  label?: string;

  /** Callback fired when the button is clicked.*/
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}
