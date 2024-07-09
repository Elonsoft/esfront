import { DateInputFormatter, DateInputFormatterContext } from '../DateInput.types';

import { getFieldRange } from './getFieldRange';

import { clamp } from '../../../utils';

/** Moves a field by `step`, looping around: stepping past an end of the range continues from the other one. */
export const addWithLoop = (
  formatter: DateInputFormatter,
  value: number,
  step: number,
  context: DateInputFormatterContext
) => {
  const [min, max] = getFieldRange(formatter, context);

  // An empty field has nothing to step from, so it starts from its default rather than from an end of the range.
  if (!context.values[formatter.field]) {
    return clamp(+formatter.getDefaultValue(), min, max);
  }

  // Counted around the range rather than snapped to its ends, so that a step keeps its size wherever it lands.
  const size = max - min + 1;

  return min + ((((value + step - min) % size) + size) % size);
};
