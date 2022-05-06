import { Story } from '@storybook/react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useLocalStorage } from './useLocalStorage';

export const Demo: Story = () => {
  const [value, update, remove] = useLocalStorage('useLocalStorage', '');

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '360px' }}>
      <TextField
        value={value || ''}
        onChange={(event) => update(event.target.value)}
        size="40"
        fullWidth
        aria-label="LocalStorage"
        helperText="This input's value is saved inside the localStorage in 'useLocalStorage' key."
      />
      <Button variant="contained" size="32" onClick={() => remove()}>
        Remove
      </Button>
    </Box>
  );
};
