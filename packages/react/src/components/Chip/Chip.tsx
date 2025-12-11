import { cloneElement, forwardRef, isValidElement, ReactElement, ReactNode, useRef } from 'react';

import { ChipProps, ChipTypeMap } from './Chip.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { useForkRef } from '@mui/material/utils';

import { IconCloseLineW350 } from '../../icons';
import { Button } from '../Button';
import { ButtonBase } from '../ButtonBase';

function isDeleteKeyboardEvent(event: React.KeyboardEvent) {
  return event.key === 'Backspace' || event.key === 'Delete';
}

/**
 *
 * Chips are compact elements that represent an input, attribute, or action.
 */
export const Chip = forwardRef(function Chip(inProps: ChipProps, ref) {
  const {
    className,
    children,
    size = '100',
    variant = 'filled',
    disabled,
    selected,
    selectedColor = 'default',
    onDelete,
    startIcon: inStartIcon,
    endIcon: inEndIcon,
    iconDelete: inIconDelete,
    clickable: inClickable,
    onKeyDown,
    onKeyUp,
    onClick,
    component: InComponent,
    focusableWhenDisabled = false,
    tabIndex,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESChip',
  });

  const clickable = inClickable !== false && onClick ? true : inClickable;
  const Component = clickable ? ButtonBase : InComponent || 'div';

  const chipRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useForkRef(chipRef, ref);

  const disabledProp =
    clickable && disabled ? (focusableWhenDisabled ? { 'aria-disabled': true } : { disabled: true }) : {};

  const onStopRipple = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
  };

  const handleDeleteIconClick = (event: React.MouseEvent) => {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();

    if (onDelete) {
      onDelete();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Ignore key press if aria-disabled is used
    if (focusableWhenDisabled && disabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
    }

    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      // Will be handled in keyUp, otherwise some browsers
      // might init navigation
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete();
      } else if (event.key === 'Escape' && chipRef.current) {
        chipRef.current.blur();
      }
    }

    if (onKeyUp) {
      onKeyUp(event);
    }
  };

  const moreProps =
    Component === ButtonBase
      ? {
          component: InComponent || 'div',
        }
      : {};

  let deleteIcon = null;

  if (onDelete) {
    deleteIcon = (
      <div className="es-chip__delete-icon-wrapper">
        {inIconDelete && isValidElement(inIconDelete) ? (
          cloneElement(inIconDelete as ReactElement, {
            className: clsx(inIconDelete.props.className, 'es-chip__delete-icon'),
            onClick: handleDeleteIconClick,
            onPointerDown: onStopRipple,
          })
        ) : (
          <Button
            className="es-chip__delete-icon"
            component="div"
            size="300"
            tabIndex={-1}
            onClick={handleDeleteIconClick}
            onPointerDown={onStopRipple}
          >
            <IconCloseLineW350 />
          </Button>
        )}
      </div>
    );
  }

  let startIcon: ReactNode | null = null;

  if (inStartIcon && isValidElement(inStartIcon)) {
    startIcon = cloneElement(inStartIcon as ReactElement, {
      className: clsx(inStartIcon.props.className, 'es-chip__start-icon'),
    });
  }

  let endIcon: ReactNode | null = null;

  if (inEndIcon && isValidElement(inEndIcon)) {
    endIcon = cloneElement(inEndIcon as ReactElement, {
      className: clsx(inEndIcon.props.className, 'es-chip__end-icon'),
    });
  }

  return (
    <Component
      ref={handleRef}
      className={clsx(
        'es-chip',
        clickable && 'es-chip--clickable',
        disabled && 'es-chip--disabled',
        focusableWhenDisabled && 'es-chip--focusable-when-disabled',
        selected && 'es-chip--selected',
        selected && `es-chip--selected-color--${selectedColor}`,
        `es-chip--size--${size}`,
        `es-chip--variant--${variant}`,
        className
      )}
      {...disabledProp}
      tabIndex={!focusableWhenDisabled && disabled ? -1 : tabIndex}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      {...moreProps}
      {...props}
    >
      {startIcon}
      <span className="es-chip__label body100">{children}</span>
      {endIcon}
      {deleteIcon}
    </Component>
  );
}) as OverridableComponent<ChipTypeMap>;
