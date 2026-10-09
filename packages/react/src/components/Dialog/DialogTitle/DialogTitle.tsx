'use client';

import { RefAttributes } from 'react';

import { DialogTitleProps } from './DialogTitle.types';

import clsx from 'clsx';

import { useStuckSentinel } from '../../../hooks';
import { useDefaultProps } from '../../../theming';

/**
 * @see `Dialog`
 */
export const DialogTitle = ({ ref, ...inProps }: DialogTitleProps & RefAttributes<HTMLDivElement>) => {
  const {
    className,
    style,
    sticky,
    icon,
    align = 'start',
    children,
  } = useDefaultProps({
    props: inProps,
    name: 'ESDialogTitle',
  });

  const { stuck, sentinel } = useStuckSentinel();

  return (
    <>
      {sentinel}
      <div
        ref={ref}
        className={clsx(
          'es-dialog-title',
          `es-dialog-title--align--${align}`,
          sticky && 'es-dialog-title--sticky',
          stuck && 'es-dialog-title--stuck',
          'h4',
          className
        )}
        style={style}
      >
        {!!icon && <div className="es-dialog-title__icon">{icon}</div>}
        <div className="es-dialog-title__text">{children}</div>
      </div>
    </>
  );
};
