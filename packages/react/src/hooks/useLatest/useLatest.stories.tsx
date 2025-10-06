import { useEffect, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import Typography from '@mui/material/Typography';

import { useLatest } from './useLatest';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useLatest',
  parameters: {
    references: ['useLatest'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [count, setCount] = useState(0);

    const latestCallback = useLatest(() => {
      setCount(count + 1);
    });

    useEffect(() => {
      const onClick = () => {
        latestCallback.current();
      };

      document.addEventListener('click', onClick);

      return () => {
        document.removeEventListener('click', onClick);
      };
    }, []);

    return (
      <Typography variant="body100">
        Count of clicks on this page: <b>{count}</b>.
      </Typography>
    );
  },
};
