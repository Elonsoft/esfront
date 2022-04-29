import { Story } from '@storybook/react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useCookie } from './useCookie';

export const Demo: Story = () => {
  const [cookie, updateCookie, removeCookie] = useCookie('useCookie', '');

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '360px' }}>
      <TextField
        value={cookie}
        onChange={(event) => updateCookie(event.target.value)}
        size="40"
        fullWidth
        aria-label="Cookie"
        helperText="This input's value is saved inside the 'useCookie' cookie."
      />
      <Button variant="contained" size="32" onClick={removeCookie}>
        Remove cookie
      </Button>
    </Box>
  );
};
