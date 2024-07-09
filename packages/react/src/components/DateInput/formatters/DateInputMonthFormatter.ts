import { DateInputBaseRangeFormatter } from './DateInputBaseRangeFormatter';

export class DateInputMonthFormatter extends DateInputBaseRangeFormatter {
  field = 'month' as const;

  protected range: [number, number] = [1, 12];

  protected length = 2;
}
