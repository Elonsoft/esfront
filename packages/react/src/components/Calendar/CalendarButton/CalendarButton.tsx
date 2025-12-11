import { CalendarButtonProps } from './CalendarButton.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { ButtonBase } from '../../ButtonBase';
import { Tooltip } from '../../Tooltip';

export const CalendarButton = (inProps: CalendarButtonProps) => {
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
