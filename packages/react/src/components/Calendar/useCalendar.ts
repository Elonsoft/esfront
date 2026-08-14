import { useMemo } from 'react';

/**
 * The hook that builds the day grid of a month, together with the trailing days of the previous month and the
 * leading days of the next one that fill the first and the last week.
 * @param year The full year.
 * @param month The zero-based month.
 * @param weekStart The zero-based day the week starts on.
 * @param rows Whether the grid always spans six weeks (`max`) or only as many as the month needs (`auto`).
 * @returns The days of the month and the adjacent days that pad it.
 */
export const useCalendar = (
  year: number,
  month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
  weekStart: 0 | 1 | 2 | 3 | 4 | 5 | 6,
  rows: 'max' | 'auto'
) => {
  const result = useMemo(() => {
    const dates = [];
    const prevDates: number[] = [];
    const nextDates: number[] = [];

    const date = new Date(year, month, 1);

    const difference = date.getDay() - weekStart;
    date.setDate(1 - (difference >= 0 ? difference : 7 + difference));

    while (date.getDate() !== 1) {
      prevDates.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }

    let i = 1;

    while (date.getMonth() === month) {
      dates.push(i++);
      date.setDate(i);
    }

    i = 1;

    while (date.getDay() !== weekStart || (rows === 'max' && nextDates.length + prevDates.length + dates.length < 42)) {
      nextDates.push(i++);
      date.setDate(i);
    }

    return { dates, prevDates, nextDates };
  }, [year, month, weekStart, rows]);

  return result;
};
