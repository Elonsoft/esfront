import { DateInputBaseRangeFormatter } from './DateInputBaseRangeFormatter';

export class DateInputHoursFormatter extends DateInputBaseRangeFormatter {
  field = 'hours' as const;

  protected range: [number, number] = [0, 23];

  protected length = 2;
}
