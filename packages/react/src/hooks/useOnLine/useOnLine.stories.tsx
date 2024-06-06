import { Meta, StoryObj } from '@storybook/react';

import Typography from '@mui/material/Typography';

import { useOnLine } from './useOnLine';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useOnLine',
  parameters: {
    references: ['useOnLine'],
  },
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const isOnLine = useOnLine();

    return (
      <Typography variant="body100">
        Network status is <b>{isOnLine ? 'ONLINE' : 'OFFLINE'}</b>.
      </Typography>
    );
  },
};
