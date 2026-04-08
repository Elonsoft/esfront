import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { OptionSwatch } from './OptionSwatch';

type Args = ComponentProps<typeof OptionSwatch>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: OptionSwatch,
  parameters: {
    references: ['OptionSwatch'],
  },
  argTypes: {
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
};

export default meta;

type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args) => {
    return <OptionSwatch {...args} />;
  },
};
