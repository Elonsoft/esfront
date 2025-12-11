import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import TextField from '@mui/material/TextField';

import { useValueThrottle } from './useValueThrottle';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useValueThrottle',
  parameters: {
    references: ['useValueThrottle'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [value, setValue] = useState('');

    const throttledValue = useValueThrottle(value, 1000);

    return (
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '320px' }}>
          <TextField
            fullWidth
            label="Value"
            size="40"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>

        <div className="body200 mt-8">Value: {value}</div>

        <div className="body200 mt-8">Throttled value: {throttledValue}</div>
      </div>
    );
  },
};
