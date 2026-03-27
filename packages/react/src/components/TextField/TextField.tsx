import { useState } from 'react';

import { TextFieldProps } from './TextField.types';

import { useBoolean } from '../../hooks';
import { IconMagnifyLineW500 } from '../../icons';
import {
  FormField,
  FormFieldAdornment,
  FormFieldField,
  FormFieldHelperText,
  FormFieldInput,
  FormFieldLabel,
} from '../FormField';

export const TextField = (props: TextFieldProps) => {
  const [value, setValue] = useState('');
  const [adornment, toggleAdornment] = useBoolean(true);

  return (
    <div>
      <FormField {...props}>
        <FormFieldLabel>Label</FormFieldLabel>
        <FormFieldField
          label="Label"
          startAdornment={
            adornment ? (
              <FormFieldAdornment position="start">
                <IconMagnifyLineW500 container containerSize="32px" />
              </FormFieldAdornment>
            ) : null
          }
        >
          <FormFieldInput placeholder="Введите" value={value} onChange={(e) => setValue(e.target.value)} />
        </FormFieldField>
        <FormFieldHelperText>Helper text</FormFieldHelperText>
      </FormField>
      <button onClick={toggleAdornment}>toggle adornment</button>
    </div>
  );
};
