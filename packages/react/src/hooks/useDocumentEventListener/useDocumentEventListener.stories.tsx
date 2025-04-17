import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Typography from '@mui/material/Typography';

import { useDocumentEventListener } from './useDocumentEventListener';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useDocumentEventListener',
  parameters: {
    references: ['useDocumentEventListener'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [count, setCount] = useState(0);

    useDocumentEventListener('click', () => {
      setCount(count + 1);
    });

    return (
      <Typography variant="body100">
        Count of clicks on this page: <b>{count}</b>.
      </Typography>
    );
  },
};
