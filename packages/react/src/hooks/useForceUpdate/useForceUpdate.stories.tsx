import { useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useForceUpdate } from './useForceUpdate';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useForceUpdate',
  parameters: {
    references: ['useForceUpdate']
  }
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
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
        <Button size="32" variant="contained" onClick={update}>
          Update
        </Button>
        <Typography component="div" sx={{ marginTop: '8px' }} variant="body200">
          Time: {date.current}
        </Typography>
      </>
    );
  }
};
