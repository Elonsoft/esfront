import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useThrottle } from './useThrottle';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useThrottle',
  parameters: {
    references: ['useThrottle'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [value, setValue] = useState('');
    const [throttledValue, setThrottledValue] = useState('');

    useThrottle(
      () => {
        setThrottledValue(value);
      },
      1000,
      [value]
    );

    return (
      <div>
        <div sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '320px' }}>
          <TextField
            fullWidth
            label="Value"
            size="40"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>

        <Typography component="div" sx={{ marginTop: '8px' }} variant="body200">
          Value: {value}
        </Typography>

        <Typography component="div" sx={{ marginTop: '8px' }} variant="body200">
          Throttled value: {throttledValue}
        </Typography>
      </div>
    );
  },
};
