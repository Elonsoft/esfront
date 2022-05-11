import { Story } from '@storybook/react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useSessionStorage } from './useSessionStorage';

export const Demo: Story = () => {
  const [value, update, remove] = useSessionStorage('useSessionStorage', '');

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '360px' }}>
      <TextField
        value={value || ''}
        onChange={(event) => update(event.target.value)}
        size="40"
        fullWidth
        aria-label="SessionStorage"
        helperText="This input's value is saved inside the sessionStorage in 'useSessionStorage' key."
      />
      <Button variant="contained" size="32" onClick={() => remove()}>
        Remove
      </Button>
    </Box>
  );
};
