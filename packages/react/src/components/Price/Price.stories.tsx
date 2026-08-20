import { Meta, StoryObj } from '@storybook/react-vite';

import { Price } from '.';

const meta: Meta<typeof Price> = {
  tags: ['autodocs'],
  component: Price,
  parameters: {
    references: ['Price'],
  },
  argTypes: {
    children: {
      control: {
        type: 'number',
      },
    },
    currency: {
      control: {
        type: 'text',
      },
    },
    locales: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: 9000,
    currency: 'RUB',
  },
};

export default meta;

type Story = StoryObj<typeof Price>;

export const Demo: Story = {
  render: ({ children, ...args }) => {
    return <Price {...args}>{+children || 0}</Price>;
  },
};
