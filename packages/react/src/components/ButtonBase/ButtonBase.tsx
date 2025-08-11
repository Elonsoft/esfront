import { forwardRef, useRef } from 'react';

import { ButtonBaseProps, ButtonBaseTypeMap } from './ButtonBase.types';

import clsx from 'clsx';
import { buttonBaseClasses, getButtonBaseUtilityClass } from './ButtonBase.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import composeClasses from '@mui/utils/composeClasses';

import { useForkRef } from '../../hooks';
import { TouchRipple, touchRippleClasses, useTouchRipple } from '../TouchRipple';

type ButtonBaseOwnerState = {
  classes: ButtonBaseProps['classes'];
  disabled: ButtonBaseProps['disabled'];
  disableTouchRipple: ButtonBaseProps['disableTouchRipple'];
  pressed: boolean;
};

const useUtilityClasses = (ownerState: ButtonBaseOwnerState) => {
  const { classes, disabled, disableTouchRipple, pressed } = ownerState;

  const slots = {
    root: ['root', disabled && 'disabled', disableTouchRipple && 'disableTouchRipple', pressed && 'pressed'],
    wrapper: ['wrapper'],
  };

  return composeClasses(slots, getButtonBaseUtilityClass, classes);
};

const ButtonBaseRoot = styled('button', {
  name: 'ESButtonBase',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { disabled, disableTouchRipple, pressed },
    } = props;

    return [
      styles.root,
      disabled && styles.disabled,
      disableTouchRipple && styles.disableTouchRipple,
      pressed && styles.disabled,
    ];
  },
})(({ theme }) => ({
  '--background': 'transparent',
  '--text': theme.vars.palette.monoB[500],
  '--hovered': theme.vars.palette.monoB.A50,
  '--pressed': theme.vars.palette.monoB.A150,

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  outline: 0,
  border: 0,
  margin: 0,
  borderRadius: 0,
  padding: 0,
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  textDecoration: 'none',
  overflow: 'hidden',

  '&::-moz-focus-inner': {
    // Remove Firefox dotted outline.
    borderStyle: 'none',
  },

  backgroundColor: 'var(--background)',
  color: 'var(--text)',
  flexShrink: 0,

  // https://github.com/mui/material-ui/issues/14455
  [`&.${buttonBaseClasses.disabled}:not(button)`]: {
    pointerEvents: 'none',
  },

  '@media (hover: hover)': {
    [`&:not(.${buttonBaseClasses.disabled}):hover > .${touchRippleClasses.root}`]: {
      backgroundColor: 'var(--hovered)',
    },
  },

  [`&:not(.${buttonBaseClasses.disabled}):focus-visible`]: {
    outline: `2px solid ${theme.vars.palette.monoA[500]}`,
  },

  [`&.${buttonBaseClasses.pressed} > .${touchRippleClasses.root}::after`]: {
    opacity: 1,
    transitionDuration: '105ms',
  },

  [`&.${buttonBaseClasses.disableTouchRipple}`]: {
    [`& > .${touchRippleClasses.root}::after`]: {
      inset: 0,
      background: 'var(--pressed)',
      transition: theme.transitions.create(['opacity'], {
        duration: theme.transitions.duration.short,
      }),
    },

    [`&:active > .${touchRippleClasses.root}::after`]: {
      opacity: 1,
    },
  },

  '@media print': {
    colorAdjust: 'exact',
  },
}));

const ButtonBaseWrapper = styled('div', {
  name: 'ESButtonBase',
  slot: 'Wrapper',
  overridesResolver: (_props, styles) => styles.wrapper,
})(() => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  zIndex: 1,
}));

/**
 * The Button allows users to take actions, and make choices, with a single tap.
 */
export const ButtonBase = forwardRef(function ButtonBase(inProps: ButtonBaseProps, ref) {
  const {
    component,
    children,
    classes: inClasses,
    className,
    sx,
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

    return component && component !== 'button' && !(button.tagName === 'A' && (button as HTMLLinkElement).href);
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

  const ownerState = { classes: inClasses, disabled, disableTouchRipple, pressed };
  const classes = useUtilityClasses(ownerState);

  return (
    <ButtonBaseRoot
      ref={handleRef}
      as={component}
      className={clsx(className, classes.root)}
      disabled={disabled}
      sx={sx}
      type={type}
      {...props}
      {...bind}
    >
      <ButtonBaseWrapper className={classes.wrapper}>{children}</ButtonBaseWrapper>
      <TouchRipple ref={touchRippleRef} />
    </ButtonBaseRoot>
  );
}) as OverridableComponent<ButtonBaseTypeMap>;
