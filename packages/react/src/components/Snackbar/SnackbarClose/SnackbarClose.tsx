'use client';

import { RefAttributes } from 'react';

import { SnackbarCloseProps } from './SnackbarClose.types';

import clsx from 'clsx';

import { IconCloseLineW350 } from '../../../icons';
import { useDefaultProps } from '../../../theming';
import { Button } from '../../Button';

import { useLocaleDefaultProps } from '@esfront/react/locale';

/**
 * @see `Snackbar`
 */
export const SnackbarClose = ({ ref, ...inProps }: SnackbarCloseProps & RefAttributes<HTMLDivElement>) => {
  const resolvedProps = useDefaultProps({
    props: inProps,
    name: 'ESSnackbarClose',
  });

  const {
    className,
    style,
    label,
    icon = <IconCloseLineW350 />,
    size = '400',
    progress,
    onClick,
  } = useLocaleDefaultProps({
    props: resolvedProps,
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
