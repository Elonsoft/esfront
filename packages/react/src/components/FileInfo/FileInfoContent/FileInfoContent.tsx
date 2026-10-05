'use client';

import { RefAttributes } from 'react';

import { FileInfoContentProps } from './FileInfoContent.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `FileInfo`
 */
export const FileInfoContent = ({ ref, ...inProps }: FileInfoContentProps & RefAttributes<HTMLDivElement>) => {
  const { children, className, style } = useDefaultProps({ props: inProps, name: 'ESFileInfoContent' });

  return (
    <div ref={ref} className={clsx(className, 'es-file-info-content')} style={style}>
      {children}
    </div>
  );
};
