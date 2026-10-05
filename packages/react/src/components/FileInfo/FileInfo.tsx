'use client';

import { RefAttributes } from 'react';

import { FileInfoProps } from './FileInfo.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../theming';

/**
 * This component displays file information.
 */
export const FileInfo = ({ ref, ...inProps }: FileInfoProps & RefAttributes<HTMLDivElement>) => {
  const { children, className, style } = useDefaultProps({ props: inProps, name: 'ESFileInfo' });

  return (
    <div ref={ref} className={clsx(className, 'es-file-info')} style={style}>
      {children}
    </div>
  );
};
