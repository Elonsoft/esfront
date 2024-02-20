import { useState } from 'react';

import { Story } from '@storybook/react';

import { InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';

import { SpinButtons } from '.';

export const Demo: Story = () => {
  const [count, setCount] = useState(1);
  const onIncrement = () => {
    setCount(count + 1);
  };
  const onDecrement = () => {
    setCount(count - 1);
  };
  return (
    <TextField
      InputProps={{
        endAdornment: (
          <InputAdornment disableTypography position="end">
            <SpinButtons disabled={count === 0} onDecrement={onDecrement} onIncrement={onIncrement} />
          </InputAdornment>
        )
      }}
      label="Очередность прохождения"
      name="index"
      value={count}
    />
  );
};
