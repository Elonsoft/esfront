import { DateInputBaseRangeFormatter } from './DateInputBaseRangeFormatter';

export class DateInputMinutesFormatter extends DateInputBaseRangeFormatter {
  field = 'minutes' as const;

  protected range: [number, number] = [0, 59];

  protected length = 2;
}
