import { CalendarProps } from './Calendar.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { CalendarButton, CalendarButtonProps } from './CalendarButton';
import { useCalendar } from './useCalendar';

import { useDateAdapterContext } from '../DateAdapter';

/** The calendar allows users to pick a date or a range of dates. */
export const Calendar = (inProps: CalendarProps) => {
  const {
    className,
    style,
    year,
    month,
    weekStart = 1,
    rows = 'max',
    selection,
    hover,
    showPrevMonth,
    showNextMonth,
    onSelectionChange,
    onHover,
    getButtonDisabled,
    getButtonTooltipProps,
  } = useDefaultProps({
    props: inProps,
    name: 'ESCalendar',
  });

  const { adapter } = useDateAdapterContext();

  if (adapter === undefined) {
    throw new Error('No provider for DateAdapterContext.');
  }

  const { dates, prevDates, nextDates } = useCalendar(year, month, weekStart, rows);

  const getButtonProps = (year: number, month: number, date: number) => {
    const current = new Date(year, month, date);

    let position: CalendarButtonProps['position'] = undefined;
    let selected = false;
    let hovered = false;

    if (selection && selection[0]) {
      const start = new Date(selection[0]);
      const end = selection[1] ? new Date(selection[1]) : null;

      let range = [start, end] as [Date, Date | null];
      let rangeHover = hover;

      if (range[0] && range[1] && range[0] > range[1]) {
        range = range.reverse() as [Date, Date];
      }

      if (rangeHover && rangeHover[0] && rangeHover[1] && rangeHover[0] > rangeHover[1]) {
        rangeHover = rangeHover.reverse() as [Date, Date];
      }

      if (rangeHover && rangeHover[1] && adapter.isWithinRange(current, rangeHover as [Date, Date])) {
        position = 'between';
      }

      if (rangeHover && adapter.isSameDay(rangeHover[0], current)) {
        position = 'start';
      }

      if (rangeHover && rangeHover[1] && adapter.isSameDay(rangeHover[1], current)) {
        position = 'end';
      }

      if (
        adapter.isSameDay(range[0], current) ||
        (range[0] && range[1] && adapter.isWithinRange(current, range as [Date, Date]))
      ) {
        selected = true;
      }

      if (hover && rangeHover && rangeHover[1] && !adapter.isSameDay(rangeHover[0], rangeHover[1])) {
        hovered = adapter.isWithinRange(current, rangeHover as [Date, Date]);
      }
    }

    const disabled = getButtonDisabled?.(current);

    return {
      position,
      disabled,
      selected,
      hovered,
      today: adapter.isSameDay(new Date(), current),
      onClick: () => !disabled && onSelectionChange?.(current),
      onHover: () => !disabled && onHover?.(current),
      TooltipProps: getButtonTooltipProps?.(current),
    };
  };

  return (
    <div className={clsx('es-calendar', `es-calendar--rows--${rows}`, className)} style={style}>
      {prevDates.map((date) =>
        showPrevMonth ? (
          <CalendarButton key={date} inactive {...getButtonProps(year, month - 1, date)}>
            {date}
          </CalendarButton>
        ) : (
          <span key={date} />
        )
      )}
      {dates.map((date) => (
        <CalendarButton key={date} {...getButtonProps(year, month, date)}>
          {date}
        </CalendarButton>
      ))}
      {nextDates.map((date) =>
        showNextMonth ? (
          <CalendarButton key={date} inactive {...getButtonProps(year, month + 1, date)}>
            {date}
          </CalendarButton>
        ) : (
          <span key={date} />
        )
      )}
    </div>
  );
};
