import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useDebounce } from './useDebounce';

import { Checkbox, FormControlLabel } from '../../components';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useDebounce',
  parameters: {
    references: ['useDebounce'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [value, setValue] = useState('');
    const [leading, setLeading] = useState(false);
    const [trailing, setTrailing] = useState(true);

    const [debouncedValue, setDebouncedValue] = useState('');

    useDebounce(
      () => {
        setDebouncedValue(value);
      },
      1000,
      [value],
      { leading, trailing }
    );

    return (
      <div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '320px' }}>
          <TextField
            fullWidth
            label="Value"
            size="40"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />

          <FormControlLabel
            control={<Checkbox checked={leading} onChange={(event) => setLeading(event.target.checked)} />}
            label="Leading"
          />

          <FormControlLabel
            control={<Checkbox checked={trailing} onChange={(event) => setTrailing(event.target.checked)} />}
            label="Trailing"
          />
        </Box>

        <Typography component="div" sx={{ marginTop: '8px' }} variant="body200">
          Debounced value: {debouncedValue}
        </Typography>
      </div>
    );
  },
};
