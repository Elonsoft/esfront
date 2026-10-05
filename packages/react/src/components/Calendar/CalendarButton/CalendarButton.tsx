'use client';

import { RefAttributes } from 'react';

import { CalendarButtonProps } from './CalendarButton.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';
import { ButtonBase } from '../../ButtonBase';
import { Tooltip } from '../../Tooltip';

/**
 * @see `Calendar`
 */
export const CalendarButton = ({ ref, ...inProps }: CalendarButtonProps & RefAttributes<HTMLDivElement>) => {
  const {
    children,
    className,
    style,
    disabled,
    inactive,
    selected,
    hovered,
    today,
    position,
    onClick,
    onHover,
    TooltipProps,
  } = useDefaultProps({
    props: inProps,
    name: 'ESCalendarButton',
  });

  return (
    <div
      ref={ref}
      className={clsx(
        'es-calendar-button',
        selected && 'es-calendar-button--selected',
        hovered && 'es-calendar-button--hovered',
        position && `es-calendar-button--position--${position}`,
        className
      )}
      style={style}
      onClick={onClick}
      onFocus={onHover}
      onMouseEnter={onHover}
    >
      <div className="es-calendar-button__wrapper">
        <Tooltip
          disableInteractive
          {...TooltipProps}
          TransitionProps={{ timeout: 0, ...TooltipProps?.TransitionProps }}
          slotProps={{
            ...TooltipProps?.slotProps,
            popper: {
              ...TooltipProps?.slotProps?.popper,
              className: clsx('es-calendar-button__tooltip', TooltipProps?.slotProps?.popper?.className),
            },
          }}
          title={TooltipProps?.title || ''}
        >
          <div style={{ width: '100%' }}>
            <ButtonBase
              className={clsx(
                'es-calendar-button__button',
                inactive && 'es-calendar-button__button--inactive',
                selected && position !== 'between' && 'es-calendar-button__button--selected',
                today && 'es-calendar-button__button--today'
              )}
              disabled={disabled}
            >
              {children}
            </ButtonBase>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};
