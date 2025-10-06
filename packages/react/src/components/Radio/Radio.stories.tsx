import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { Radio } from './Radio';

type Args = ComponentProps<typeof Radio>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Radio,
  parameters: {
    references: ['Radio'],
  },
  argTypes: {
    checkedIcon: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    inputProps: {
      table: {
        disable: true,
      },
    },
    inputRef: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    color: 'primary',
  },
};

export default meta;

type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args) => {
    return <Radio {...args} />;
  },
};
