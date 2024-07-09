const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const isLeapYear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

/** The length of a one-based month. February keeps its longest length until the year is known to be a leap one. */
export const getDaysInMonth = (year: number | null, month: number) => {
  if (month === 2) {
    return year === null || isLeapYear(year) ? 29 : 28;
  }

  return DAYS_IN_MONTH[month - 1] ?? 31;
};
