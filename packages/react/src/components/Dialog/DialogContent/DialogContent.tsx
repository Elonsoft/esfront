'use client';

import { RefAttributes } from 'react';

import { DialogContentProps } from './DialogContent.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `Dialog`
 */
export const DialogContent = ({ ref, ...inProps }: DialogContentProps & RefAttributes<HTMLDivElement>) => {
  const { className, style, children } = useDefaultProps({
    props: inProps,
    name: 'ESDialogContent',
  });

  return (
    <div ref={ref} className={clsx('es-dialog-content', className)} style={style}>
      {children}
    </div>
  );
};
