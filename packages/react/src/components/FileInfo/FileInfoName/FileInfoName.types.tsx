import { CSSProperties, ReactNode } from 'react';

export interface FileInfoNameProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Callback fired when the close button is clicked.*/
  onDelete?: () => void;

  /** Text for the delete button aria-label. */
  labelDelete?: string;

  /** Icon for the delete button. */
  iconDelete?: React.ReactNode;
}
