import { Meta, StoryObj } from '@storybook/react';

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
      <div className="body100">
        Lorem ipsum dolor sit amet <Kbd {...args} /> consectetur adipiscing elit.
      </div>
    );
  },
};
