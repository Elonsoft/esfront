'use client';

import { RefAttributes } from 'react';

import { FileIconTextProps } from './FileIconText.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `FileIcon`
 */
export const FileIconText = ({ ref, ...inProps }: FileIconTextProps & RefAttributes<HTMLDivElement>) => {
  const { className, style, children } = useDefaultProps({
    props: inProps,
    name: 'ESFileIconText',
  });

  return (
    <div ref={ref} className={clsx('es-file-icon-text', 'mini100', className)} style={style}>
      {children}
    </div>
  );
};
