import { DateInputBaseRangeFormatter } from './DateInputBaseRangeFormatter';

export class DateInputSecondsFormatter extends DateInputBaseRangeFormatter {
  field = 'seconds' as const;

  protected range: [number, number] = [0, 59];

  protected length = 2;
}
