import { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  tags: ['autodocs'],
  component: TextField,
  parameters: {
    references: ['TextField'],
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
    },
    size: {
      control: { type: 'select' },
    },
  },
  args: {
    variant: 'outlined-notched',
    size: '700',
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Demo: Story = {
  render: (args) => {
    return <TextField {...args} />;
  },
};
