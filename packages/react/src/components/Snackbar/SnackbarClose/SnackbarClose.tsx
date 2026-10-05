'use client';

import { RefAttributes } from 'react';

import { SnackbarCloseProps } from './SnackbarClose.types';

import clsx from 'clsx';

import { IconCloseLineW350 } from '../../../icons';
import { useDefaultProps } from '../../../theming';
import { Button } from '../../Button';

/**
 * @see `Snackbar`
 */
export const SnackbarClose = ({ ref, ...inProps }: SnackbarCloseProps & RefAttributes<HTMLDivElement>) => {
  const {
    className,
    style,
    label,
    icon = <IconCloseLineW350 />,
    size = '400',
    progress,
    onClick,
  } = useDefaultProps({
    props: inProps,
    name: 'ESSnackbarClose',
  });

  return (
    <div ref={ref} className={clsx(className, 'es-snackbar-close')}>
      <Button
        aria-label={label}
        className="es-snackbar-close__button"
        color="mono-b"
        size={size}
        style={style}
        onClick={onClick}
      >
        {icon}
      </Button>
      {progress && <div className="es-snackbar-close__progress" />}
    </div>
  );
};
