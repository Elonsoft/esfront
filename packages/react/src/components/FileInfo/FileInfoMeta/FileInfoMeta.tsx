'use client';

import { RefAttributes } from 'react';

import { FileInfoMetaProps } from './FileInfoMeta.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `FileInfo`
 */
export const FileInfoMeta = ({ ref, ...inProps }: FileInfoMetaProps & RefAttributes<HTMLDivElement>) => {
  const { children, className, style } = useDefaultProps({ props: inProps, name: 'ESFileInfoMeta' });

  return (
    <div ref={ref} className={clsx(className, 'es-file-info-meta', 'caption')} style={style}>
      {children}
    </div>
  );
};
