import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Typography from '@mui/material/Typography';

import { useWindowEventListener } from './useWindowEventListener';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useWindowEventListener',
  parameters: {
    references: ['useWindowEventListener']
  }
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [count, setCount] = useState(0);

    useWindowEventListener('click', () => {
      setCount(count + 1);
    });

    return (
      <Typography variant="body100">
        Count of clicks on this page: <b>{count}</b>.
      </Typography>
    );
  }
};
