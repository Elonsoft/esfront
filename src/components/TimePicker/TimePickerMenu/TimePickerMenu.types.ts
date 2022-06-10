import React from 'react';

import { TextFieldProps } from '@mui/material';
import { InputBaseComponentProps } from '@mui/material';

export interface TimePickerMenuProps {
  /** Callback fired when the value is changed. */
  onChange: (newValue: Date) => void;
  /** The renderInput prop allows to customize the rendered input. **/
  renderInput: (params: TextFieldProps) => React.ReactElement;
  /** The value of the picker. **/
  value: Date;
  /** Attributes applied to the input element. **/
  inputProps: InputBaseComponentProps;
  /** The label of the picker. **/
  label?: string;
  /** Min time acceptable time. **/
  minTime?: Date;
  /** Max time acceptable time. **/
  maxTime?: Date;
  /** Format string. */
  inputFormat?: string;
}
