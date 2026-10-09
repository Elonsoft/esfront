'use client';

import { useRef } from 'react';

import { ButtonBaseProps, ButtonBaseTypeMap } from './ButtonBase.types';

import clsx from 'clsx';

import { useForkRef } from '../../hooks';
import { useDefaultProps } from '../../theming';
import { OverridableComponent } from '../../types';
import { TouchRipple, useTouchRipple } from '../TouchRipple';

const FORM_ELEMENTS = ['button', 'fieldset', 'input', 'optgroup', 'option', 'select', 'textarea'];

const FLOW_CONTENT_ELEMENTS = [
  'address',
  'article',
  'aside',
  'blockquote',
  'dd',
  'div',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'header',
  'li',
  'main',
  'nav',
  'section',
  'td',
  'th',
];

/**
 * The Button allows users to take actions, and make choices, with a single tap.
 */
export const ButtonBase = (({ ref, ...inProps }: ButtonBaseProps) => {
  const {
    component: Component = 'button',
    children,
    className,
    disabled,
    disableTouchRipple,
    type = Component === 'button' ? 'button' : undefined,
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

  const Wrapper = typeof Component === 'string' && FLOW_CONTENT_ELEMENTS.includes(Component) ? 'div' : 'span';
  const isDisabledSupported = typeof Component !== 'string' || FORM_ELEMENTS.includes(Component);

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
      disabled={isDisabledSupported ? disabled : undefined}
      type={type}
      {...props}
      {...bind}
    >
      <Wrapper className="es-button-base__wrapper">{children}</Wrapper>
      <TouchRipple ref={touchRippleRef} />
    </Component>
  );
}) as OverridableComponent<ButtonBaseTypeMap>;
