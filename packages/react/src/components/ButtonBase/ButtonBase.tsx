import { forwardRef, useRef } from 'react';

import { ButtonBaseProps, ButtonBaseTypeMap } from './ButtonBase.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { useForkRef } from '../../hooks';
import { TouchRipple, useTouchRipple } from '../TouchRipple';

/**
 * The Button allows users to take actions, and make choices, with a single tap.
 */
export const ButtonBase = forwardRef(function ButtonBase(inProps: ButtonBaseProps, ref) {
  const {
    component: Component = 'button',
    children,
    className,
    disabled,
    disableTouchRipple,
    type = 'button',
    onClick,
    onContextMenu,
    onPointerCancel,
    onPointerDown,
    onPointerUp,
    onPointerLeave,
    onKeyDown,
    TouchRippleProps,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESButtonBase',
  });

  const buttonRef = useRef<HTMLButtonElement | HTMLLinkElement | null>(null);
  const handleRef = useForkRef(ref, buttonRef);

  const isNonNativeButton = () => {
    const button = buttonRef.current;

    if (!button) {
      return false;
    }

    return Component && Component !== 'button' && !(button.tagName === 'A' && (button as HTMLLinkElement).href);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }

    // Keyboard accessibility for non interactive elements
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
      event.preventDefault();

      if (onClick) {
        onClick(event as never);
      }
    }
  };

  const {
    ref: touchRippleRef,
    pressed,
    bind,
  } = useTouchRipple({
    ...TouchRippleProps,
    disabled: disabled || disableTouchRipple,
    onClick,
    onContextMenu,
    onPointerCancel,
    onPointerDown,
    onPointerUp,
    onPointerLeave,
    onKeyDown: handleKeyDown,
  });

  return (
    <Component
      ref={handleRef}
      className={clsx(
        className,
        'es-button-base',
        disabled && 'es-button-base--disabled',
        disableTouchRipple && 'es-button-base--disable-touch-ripple',
        pressed && 'es-button-base--pressed'
      )}
      disabled={disabled}
      type={type}
      {...props}
      {...bind}
    >
      <div className="es-button-base__wrapper">{children}</div>
      <TouchRipple ref={touchRippleRef} />
    </Component>
  );
}) as OverridableComponent<ButtonBaseTypeMap>;
