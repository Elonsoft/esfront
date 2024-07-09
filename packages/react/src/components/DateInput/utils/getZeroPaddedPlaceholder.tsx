import { ReactNode } from 'react';

import { DateInputFormatter, DateInputFormatterContext } from '../DateInput.types';

export interface GetZeroPaddedPlaceholderOptions {
  /** The formatter the field is rendered with. */
  formatter: DateInputFormatter;
  /** The digits the field is shown and typed as. */
  value: string;
  /** Whether the selection sits on the field. */
  selected: boolean;
  context: DateInputFormatterContext;
  /** The number of digits the field is written with once it is entered. */
  maxLength: number;
  /** The character a digit that is not there yet is shown as. */
  placeholder: string;
}

/** The content of a field that is written with a fixed number of digits, zero padded once it is entered in full. */
export const getZeroPaddedPlaceholder = ({
  formatter,
  value,
  selected,
  context,
  maxLength,
  placeholder,
}: GetZeroPaddedPlaceholderOptions): ReactNode => {
  if (value) {
    if (selected && formatter.getValue(value, '', context)?.canGrow) {
      return (
        <>
          {value}
          {value.length < maxLength && <span data-placeholder>{placeholder.repeat(maxLength - value.length)}</span>}
        </>
      );
    }

    return value.padStart(maxLength, '0');
  }

  return <span data-placeholder>{placeholder.repeat(maxLength)}</span>;
};
