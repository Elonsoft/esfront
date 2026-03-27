import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { useCallbackThrottle } from './useCallbackThrottle';

import { TextField } from '../../components/TextField';

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
          <TextField fullWidth label="Value" size="500" onChange={onChange} />
        </div>

        <div className="body200 mt-8">Throttled value: {throttledValue}</div>
      </div>
    );
  },
};
