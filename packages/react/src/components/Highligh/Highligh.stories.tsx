import { Meta, StoryObj } from '@storybook/react';

import { Highligh } from '.';

const meta: Meta<typeof Highligh> = {
  tags: ['autodocs'],
  component: Highligh,
  parameters: {
    references: ['Highligh']
  },
  argTypes: {
    children: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    children: 'Highlighted Text'
  }
};

export default meta;
type Story = StoryObj<typeof Highligh>;

export const Demo: Story = {
  render: (args) => {
    return <Highligh>{args.children}</Highligh>;
  }
};
