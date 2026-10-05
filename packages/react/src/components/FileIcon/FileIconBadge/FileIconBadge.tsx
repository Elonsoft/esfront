'use client';

import { RefAttributes } from 'react';

import { FileIconBadgeProps } from './FileIconBadge.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `FileIcon`
 */
export const FileIconBadge = ({ ref, ...inProps }: FileIconBadgeProps & RefAttributes<HTMLDivElement>) => {
  const {
    className,
    style,
    children,
    color,
    size = 'md',
  } = useDefaultProps({
    props: inProps,
    name: 'ESFileIconBadge',
  });

  return (
    <div
      ref={ref}
      className={clsx('es-file-icon-badge', `es-file-icon-badge--size--${size}`, 'mini100', className)}
      style={{ backgroundColor: color, ...style }}
    >
      {children}
    </div>
  );
};
