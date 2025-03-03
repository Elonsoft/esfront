import { ReactNode } from 'react';

import { FileInfoClasses } from './FileInfo.classes';

export interface FileInfoProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: FileInfoClasses;
  /** Class applied to the root element. */
  className?: string;
}
