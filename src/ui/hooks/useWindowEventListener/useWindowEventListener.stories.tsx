import { useState } from 'react';

import { Story } from '@storybook/react';

import Typography from '@mui/material/Typography';

import { useWindowEventListener } from './useWindowEventListener';

export const Demo: Story = () => {
  const [count, setCount] = useState(0);

  useWindowEventListener('click', () => {
    setCount(count + 1);
  });

  return (
    <Typography variant="body100">
      Count of clicks on this page: <b>{count}</b>.
    </Typography>
  );
};
