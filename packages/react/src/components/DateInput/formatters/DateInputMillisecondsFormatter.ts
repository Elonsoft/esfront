import { DateInputBaseRangeFormatter } from './DateInputBaseRangeFormatter';

export class DateInputMillisecondsFormatter extends DateInputBaseRangeFormatter {
  field = 'milliseconds' as const;

  protected range: [number, number] = [0, 999];

  protected length = 3;
}
