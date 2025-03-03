import { ReactNode } from 'react';

import { FileInfoNameClasses } from './FileInfoName.classes';

export interface FileInfoNameProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: FileInfoNameClasses;
  /** Class applied to the root element. */
  className?: string;
  /** Callback fired when the close button is clicked.*/
  onDelete?: () => void;

  /** Text for the delete button aria-label. */
  labelDelete?: string;

  /** Icon for the delete button. */
  iconDelete?: React.ReactNode;
}
