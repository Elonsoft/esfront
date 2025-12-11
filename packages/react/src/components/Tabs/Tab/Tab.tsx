import { FocusEvent, forwardRef, MouseEvent } from 'react';

import { TabProps } from './Tab.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { ButtonBase } from '../../ButtonBase';

export const Tab = forwardRef<HTMLButtonElement, TabProps>(function Tab(inProps: TabProps, ref) {
  const {
    className,
    disabled = false,
    fullWidth,
    startIcon,
    endIcon,
    indicator,
    label,
    onChange,
    onClick,
    onFocus,
    rounded,
    selected,
    selectionFollowsFocus,
    value,
    ...props
  } = useDefaultProps({ props: inProps, name: 'ESTab' });

  const handleClick = (event: MouseEvent) => {
    if (!selected && onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  const handleFocus = (event: FocusEvent) => {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  return (
    <ButtonBase
      ref={ref}
      aria-selected={selected}
      className={clsx(
        'es-tab',
        (!!startIcon || !!endIcon) && label && 'es-tab--label-icon',
        fullWidth && 'es-tab--full-width',
        rounded && 'es-tab--rounded',
        selected && 'es-tab--selected',
        disabled && 'es-tab--disabled',
        className
      )}
      disabled={disabled}
      role="tab"
      tabIndex={selected ? 0 : -1}
      onClick={handleClick}
      onFocus={handleFocus}
      {...props}
    >
      {!!startIcon && <span className="es-tab__start-icon">{startIcon}</span>}
      <span className="es-tab__label-wrapper">{label}</span>
      {!!endIcon && <span className="es-tab__end-icon">{endIcon}</span>}
      {indicator}
    </ButtonBase>
  );
});
