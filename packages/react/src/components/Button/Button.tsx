import { forwardRef } from 'react';

import { ExtendButtonBase } from '../ButtonBase/ButtonBase.types';
import { ButtonTypeMap } from './Button.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { ButtonBase } from '../ButtonBase';

/**
 * The Button allows users to take actions, and make choices, with a single tap.
 */
export const Button = forwardRef(function Button(inProps, ref) {
  const {
    children,
    className,
    fullWidth,
    color = 'tertiary',
    size = '500',
    variant = 'text',
    rounded = false,
    startIcon,
    endIcon,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESButton',
  });

  return (
    <ButtonBase
      ref={ref as any}
      className={clsx(
        className,
        'es-button',
        `es-button--color--${color}`,
        `es-button--size--${size}`,
        `es-button--variant--${variant}`,
        fullWidth && 'es-button--full-width',
        rounded && 'es-button--rounded',
        'button'
      )}
      {...props}
    >
      {startIcon && <span className="es-button__icon es-button__start-icon">{startIcon}</span>}
      {children}
      {endIcon && <span className="es-button__icon es-button__end-icon">{endIcon}</span>}
    </ButtonBase>
  );
}) as ExtendButtonBase<ButtonTypeMap>;
