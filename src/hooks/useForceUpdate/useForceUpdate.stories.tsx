import { Story } from '@storybook/react';

import Typography from '@mui/material/Typography';

import { useForceUpdate } from './useForceUpdate';

export const Demo: Story = () => {
  const update = useForceUpdate();

  return (
    <>
      <Typography component="div" variant="body100">
        Time: {Date.now()}
      </Typography>
      <button onClick={update}>Update</button>
    </>
  );
};
