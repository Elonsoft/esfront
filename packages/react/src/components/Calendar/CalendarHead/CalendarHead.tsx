'use client';

import { RefAttributes, useMemo } from 'react';

import { CalendarHeadProps } from './CalendarHead.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

import { useLocaleDefaultProps } from '@esfront/react/locale';

/**
 * The days list for the calendar.
 * @see `Calendar`
 */
export const CalendarHead = ({ ref, ...inProps }: CalendarHeadProps & RefAttributes<HTMLDivElement>) => {
  const resolvedProps = useDefaultProps({
    props: inProps,
    name: 'ESCalendarHead',
  });

  const {
    className,
    style,
    weekStart = 1,
    getWeekDays,
  } = useLocaleDefaultProps({
    props: resolvedProps,
    name: 'ESCalendarHead',
  });

  const days = useMemo(() => {
    const names = getWeekDays!();

    for (let i = 0; i < weekStart; i++) {
      names.push(names.shift() || '');
    }

    return names;
  }, [weekStart, getWeekDays]);

  return (
    <div ref={ref} className={clsx('es-calendar-head', className)} style={style}>
      {days.map((day, index) => (
        <div key={index} className="es-calendar-head__day caption">
          {day}
        </div>
      ))}
    </div>
  );
};
