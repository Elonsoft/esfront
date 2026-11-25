'use client';

import { RefAttributes } from 'react';

import { AlertCloseProps } from './AlertClose.types';

import clsx from 'clsx';

import { IconCloseLineW500 } from '../../../icons';
import { useDefaultProps } from '../../../theming';
import { Button } from '../../Button';

import { useLocaleDefaultProps } from '@esfront/react/locale';

/**
 * @see `Alert`
 */
export const AlertClose = ({ ref, ...inProps }: AlertCloseProps & RefAttributes<HTMLButtonElement>) => {
  const resolvedProps = useDefaultProps({
    props: inProps,
    name: 'ESAlertClose',
  });

  const {
    className,
    style,
    label,
    icon = <IconCloseLineW500 container containerSize="20px" />,
    onClick,
  } = useLocaleDefaultProps({
    props: resolvedProps,
    name: 'ESAlertClose',
  });

  const Icon = icon as any;

  return (
    <Button
      ref={ref}
      aria-label={label}
      className={clsx(className, 'es-alert-close')}
      color="tertiary"
      size="300"
      style={style}
      onClick={onClick}
    >
      {Icon}
    </Button>
  );
};
