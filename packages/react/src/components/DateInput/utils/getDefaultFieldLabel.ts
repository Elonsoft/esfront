import { DateInputField } from '../DateInput.types';

const DEFAULT_FIELD_LABELS: Record<DateInputField, string> = {
  year: 'Year',
  month: 'Month',
  date: 'Day',
  hours: 'Hours',
  minutes: 'Minutes',
  seconds: 'Seconds',
  milliseconds: 'Milliseconds',
};

export const getDefaultFieldLabel = (field: DateInputField) => {
  return DEFAULT_FIELD_LABELS[field];
};
