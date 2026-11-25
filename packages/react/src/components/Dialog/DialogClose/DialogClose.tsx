'use client';

import { RefAttributes } from 'react';

import { DialogCloseProps } from './DialogClose.types';

import clsx from 'clsx';

import { IconCloseLineW600 } from '../../../icons';
import { useDefaultProps } from '../../../theming';
import { Button } from '../../Button';

import { useLocaleDefaultProps } from '@esfront/react/locale';

/**
 * @see `Dialog`
 */
export const DialogClose = ({ ref, ...inProps }: DialogCloseProps & RefAttributes<HTMLDivElement>) => {
  const resolvedProps = useDefaultProps({
    props: inProps,
    name: 'ESDialogClose',
  });

  const {
    className,
    style,
    onClick,
    label,
    labelEscapeKey,
    icon = <IconCloseLineW600 />,
  } = useLocaleDefaultProps({
    props: resolvedProps,
    name: 'ESDialogClose',
  });

  return (
    <div ref={ref} className={clsx('es-dialog-close', className)} style={style}>
      <Button aria-label={label} className="es-dialog-close__button" color="white" onClick={onClick}>
        {icon}
        <span className="es-dialog-close__escape-key caption">{labelEscapeKey}</span>
      </Button>
    </div>
  );
};
