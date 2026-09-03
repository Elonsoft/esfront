'use client';

import { FileInfoContentProps } from './FileInfoContent.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

export const FileInfoContent = (inProps: FileInfoContentProps) => {
  const { children, className, style } = useDefaultProps({ props: inProps, name: 'ESFileInfoContent' });

  return (
    <div className={clsx(className, 'es-file-info-content')} style={style}>
      {children}
    </div>
  );
};
