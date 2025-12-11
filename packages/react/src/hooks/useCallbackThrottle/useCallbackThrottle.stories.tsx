import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import TextField from '@mui/material/TextField';

import { useCallbackThrottle } from './useCallbackThrottle';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useCallbackThrottle',
  parameters: {
    references: ['useCallbackThrottle'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [throttledValue, setThrottledValue] = useState('');

    const onChange = useCallbackThrottle((event: React.ChangeEvent<HTMLInputElement>) => {
      setThrottledValue(event.target.value);
    }, 1000);

    return (
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '320px' }}>
          <TextField fullWidth label="Value" size="40" onChange={onChange} />
        </div>

        <div className="body200 mt-8">Throttled value: {throttledValue}</div>
      </div>
    );
  },
};
