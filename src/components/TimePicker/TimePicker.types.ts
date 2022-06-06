import React from 'react';

import { TimePickerClasses } from './TimePicker.classes';

import { TextFieldProps } from '@mui/material';
import { InputBaseComponentProps } from '@mui/material';

export interface TimePickerProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<TimePickerClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The renderInput prop allows to customize the rendered input. **/
  renderInput: (params: TextFieldProps) => React.ReactElement;
  /** Callback fired when the value is changed. */
  onChange: (newValue: Date) => void;
  /** The value of the picker. **/
  value: Date;
  /** The label of the picker. **/
  label?: string;
  /** Min time acceptable time. **/
  minTime?: Date;
  /** Max time acceptable time. **/
  maxTime?: Date;
  /** If true, the picker and text field are disabled. **/
  disabled?: boolean;
  /** Attributes applied to the input element. **/
  inputProps: InputBaseComponentProps;
  /**
   * Format string.
   * @default 'HH:mm:ss'
   */
  inputFormat?: string;
}
