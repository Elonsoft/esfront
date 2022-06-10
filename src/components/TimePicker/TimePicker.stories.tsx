import { useState } from 'react';

import { TimePickerProps } from './TimePicker.types';

import { Story } from '@storybook/react';

import TextField from '@mui/material/TextField';

import { TimePicker } from './TimePicker';

export const Demo: Story<TimePickerProps> = () => {
  const [value, setValue] = useState<Date>(new Date());

  return (
    <>
      <TimePicker
        value={value}
        inputProps={{ readOnly: true }}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} autoComplete="off" />}
      />
    </>
  );
};
