import { Story } from '@storybook/react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useForceUpdate } from './useForceUpdate';

export const Demo: Story = () => {
  const update = useForceUpdate();

  return (
    <>
      <Button variant="contained" onClick={update} size="32">
        Update
      </Button>
      <Typography component="div" variant="body200" sx={{ marginTop: '8px' }}>
        Time: {Date.now()}
      </Typography>
    </>
  );
};
