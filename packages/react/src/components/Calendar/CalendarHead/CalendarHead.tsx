import { useMemo } from 'react';

import { CalendarHeadProps } from './CalendarHead.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

/** The days list for the calendar. */
export const CalendarHead = (inProps: CalendarHeadProps) => {
  const {
    className,
    style,
    weekStart = 1,
    getWeekDays,
  } = useDefaultProps({
    props: inProps,
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
    <div className={clsx('es-calendar-head', className)} style={style}>
      {days.map((day, index) => (
        <div key={index} className="es-calendar-head__day caption">
          {day}
        </div>
      ))}
    </div>
  );
};
