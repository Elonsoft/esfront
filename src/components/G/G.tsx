import { useState } from 'react';

import { Story } from '@storybook/react';

import Box from '@mui/material/Box';

import { useDrag } from '@use-gesture/react';

export const Demo: Story = () => {
  const [v, setV] = useState<any>(null);

  const bind = useDrag((state) => {
    const { swipe, tap, velocity } = state;
    setV(velocity);

    if (tap) {
      alert('tap');
    }

    if (swipe[0] || swipe[1]) {
      alert(JSON.stringify(swipe));
    }
  });

  return (
    <Box sx={{ padding: '64px 16px', backgroundColor: '#eee', touchAction: 'none' }} {...bind()}>
      Swipe me {JSON.stringify(v)}
    </Box>
  );
};
