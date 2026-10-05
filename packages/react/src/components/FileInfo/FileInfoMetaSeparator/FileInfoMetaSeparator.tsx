'use client';

import { RefAttributes } from 'react';

import { FileInfoMetaSeparatorProps } from './FileInfoMetaSeparator.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `FileInfo`
 */
export const FileInfoMetaSeparator = ({
  ref,
  ...inProps
}: FileInfoMetaSeparatorProps & RefAttributes<HTMLDivElement>) => {
  const { className, style } = useDefaultProps({ props: inProps, name: 'ESFileInfoMetaSeparator' });

  return (
    <div ref={ref} className={clsx(className, 'es-file-info-meta-separator')} style={style}>
      •
    </div>
  );
};
