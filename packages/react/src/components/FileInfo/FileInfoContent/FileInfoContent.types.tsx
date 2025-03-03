import { ReactNode } from 'react';

import { FileInfoContentClasses } from './FileInfoContent.classes';

export interface FileInfoContentProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: FileInfoContentClasses;
  /** Class applied to the root element. */
  className?: string;
}
