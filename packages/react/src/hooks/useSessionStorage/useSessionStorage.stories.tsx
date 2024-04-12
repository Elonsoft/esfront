import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useSessionStorage } from './useSessionStorage';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useSessionStorage',
  parameters: {
    references: ['useSessionStorage']
  }
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [value, update, remove] = useSessionStorage('useSessionStorage', '');

    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '360px' }}>
        <TextField
          fullWidth
          aria-label="SessionStorage"
          helperText="This input's value is saved inside the sessionStorage in 'useSessionStorage' key."
          size="40"
          value={value || ''}
          onChange={(event) => update(event.target.value)}
        />
        <Button size="32" variant="contained" onClick={() => remove()}>
          Remove
        </Button>
      </Box>
    );
  }
};
