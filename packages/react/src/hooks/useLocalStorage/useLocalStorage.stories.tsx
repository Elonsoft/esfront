import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useLocalStorage } from './useLocalStorage';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useLocalStorage',
  parameters: {
    references: ['useLocalStorage']
  }
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [value, update, remove] = useLocalStorage('useLocalStorage', '');

    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '360px' }}>
        <TextField
          fullWidth
          aria-label="LocalStorage"
          helperText="This input's value is saved inside the localStorage in 'useLocalStorage' key."
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
