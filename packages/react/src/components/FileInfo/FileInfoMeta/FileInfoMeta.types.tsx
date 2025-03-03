import { ReactNode } from 'react';

import { FileInfoMetaClasses } from './FileInfoMeta.classes';

export interface FileInfoMetaProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: FileInfoMetaClasses;
  /** Class applied to the root element. */
  className?: string;
}
