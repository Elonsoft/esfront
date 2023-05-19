import { useRef } from 'react';

import { Story } from '@storybook/react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useForceUpdate } from './useForceUpdate';

export const Demo: Story = () => {
  const update = useForceUpdate();

  const date = useRef(new Date(0).getTime());
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;
  } else {
    date.current = new Date().getTime();
  }

  return (
    <>
      <Button variant="contained" onClick={update} size="32">
        Update
      </Button>
      <Typography component="div" variant="body200" sx={{ marginTop: '8px' }}>
        Time: {date.current}
      </Typography>
    </>
  );
};
