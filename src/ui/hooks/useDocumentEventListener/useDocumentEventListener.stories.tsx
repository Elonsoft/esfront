import { useState } from 'react';

import { Story } from '@storybook/react';

import Typography from '@mui/material/Typography';

import { useDocumentEventListener } from './useDocumentEventListener';

export const Demo: Story = () => {
  const [count, setCount] = useState(0);

  useDocumentEventListener('click', () => {
    setCount(count + 1);
  });

  return (
    <Typography variant="body100">
      Count of clicks on this page: <b>{count}</b>.
    </Typography>
  );
};
