import { Meta, StoryObj } from '@storybook/react';

import Typography from '@mui/material/Typography';

import { Kbd } from '.';

const meta: Meta<typeof Kbd> = {
  tags: ['autodocs'],
  component: Kbd,
  parameters: {
    references: ['Kbd'],
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'select' },
    },
  },
  args: {
    children: 'Ctrl',
  },
};

export default meta;

type Story = StoryObj<typeof Kbd>;

export const Demo: Story = {
  render: (args) => {
    return (
      <Typography component="div" variant="body100">
        Lorem ipsum dolor sit amet <Kbd {...args} /> consectetur adipiscing elit.
      </Typography>
    );
  },
};
