'use client';

import { RefAttributes } from 'react';

import { DialogActionsProps } from './DialogActions.types';

import clsx from 'clsx';

import { useStuckSentinel } from '../../../hooks';
import { useDefaultProps } from '../../../theming';

/**
 * @see `Dialog`
 */
export const DialogActions = ({ ref, ...inProps }: DialogActionsProps & RefAttributes<HTMLDivElement>) => {
  const { className, style, sticky, children } = useDefaultProps({
    props: inProps,
    name: 'ESDialogActions',
  });

  const { stuck, sentinel } = useStuckSentinel();

  return (
    <>
      <div
        ref={ref}
        className={clsx(
          'es-dialog-actions',
          sticky && 'es-dialog-actions--sticky',
          stuck && 'es-dialog-actions--stuck',
          className
        )}
        style={style}
      >
        {children}
      </div>
      {sentinel}
    </>
  );
};
