import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from '.';

type Args = ComponentProps<typeof Checkbox>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Checkbox,
  parameters: {
    references: ['Checkbox'],
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
    indeterminateIcon: {
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
    return <Checkbox {...args} />;
  },
};
