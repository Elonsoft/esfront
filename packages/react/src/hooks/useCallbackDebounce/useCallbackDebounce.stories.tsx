import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import TextField from '@mui/material/TextField';

import { useCallbackDebounce } from './useCallbackDebounce';

import { Checkbox, FormControlLabel } from '../../components';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useCallbackDebounce',
  parameters: {
    references: ['useCallbackDebounce'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [leading, setLeading] = useState(false);
    const [trailing, setTrailing] = useState(true);

    const [debouncedValue, setDebouncedValue] = useState('');

    const onChange = useCallbackDebounce(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setDebouncedValue(event.target.value);
      },
      1000,
      { leading, trailing }
    );

    return (
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '320px' }}>
          <TextField fullWidth label="Value" size="40" onChange={onChange} />

          <FormControlLabel
            control={<Checkbox checked={leading} onChange={(event) => setLeading(event.target.checked)} />}
            label="Leading"
          />

          <FormControlLabel
            control={<Checkbox checked={trailing} onChange={(event) => setTrailing(event.target.checked)} />}
            label="Trailing"
          />
        </div>

        <div className="body200 mt-8">Debounced value: {debouncedValue}</div>
      </div>
    );
  },
};
