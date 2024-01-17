/* eslint-disable storybook/default-exports */

import { Story } from '@storybook/react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useBoolean } from './useBoolean';

export const Demo: Story = () => {
  const [on, toggle] = useBoolean(true);
  return (
    <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div>{on ? 'ON' : 'OFF'}</div>
      <Button variant="contained" onClick={toggle}>
        Toggle
      </Button>
      <Button variant="contained" onClick={() => toggle(true)}>
        set ON
      </Button>
      <Button variant="contained" onClick={() => toggle(false)}>
        set OFF
      </Button>
    </Box>
  );
};
