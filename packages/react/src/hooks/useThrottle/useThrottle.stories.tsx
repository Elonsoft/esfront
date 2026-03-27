import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { useThrottle } from './useThrottle';

import { TextField } from '../../components/TextField';

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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '320px' }}>
          <TextField
            fullWidth
            label="Value"
            size="500"
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
