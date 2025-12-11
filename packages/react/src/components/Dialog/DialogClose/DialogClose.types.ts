import React, { CSSProperties } from 'react';

export interface DialogCloseProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;
  /** Callback fired when the button is clicked.*/
  onClick?: () => void;
  /** Text for the button aria-label. */
  label?: string;
  /** Text for the escape key. */
  labelEscapeKey?: string;
  /** Icon for the button. */
  icon?: React.ReactNode;
}
