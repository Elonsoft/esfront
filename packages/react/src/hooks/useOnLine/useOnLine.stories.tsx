/* eslint-disable storybook/default-exports */

import { Story } from '@storybook/react';

import Typography from '@mui/material/Typography';

import { useOnLine } from './useOnLine';

export const Demo: Story = () => {
  const isOnLine = useOnLine();

  return (
    <Typography variant="body100">
      Network status is <b>{isOnLine ? 'ONLINE' : 'OFFLINE'}</b>.
    </Typography>
  );
};
