import { Story } from '@storybook/react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useVibration } from './useVibration';

export const Demo: Story = () => {
  const vibrate = useVibration();

  const onVibrate = () => {
    vibrate(200);
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '320px' }}>
      <Button variant="contained" size="32" onClick={onVibrate}>
        Vibrate
      </Button>
    </Box>
  );
};
