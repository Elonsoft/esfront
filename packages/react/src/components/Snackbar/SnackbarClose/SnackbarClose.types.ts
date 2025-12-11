import { CSSProperties, ReactNode } from 'react';

import { ButtonOwnProps } from '../../Button';

export interface SnackbarCloseProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

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
