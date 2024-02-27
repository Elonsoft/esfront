import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { RibbonBadge } from './RibbonBadge';

type Args = ComponentProps<typeof RibbonBadge> & { component?: unknown };

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: RibbonBadge,
  parameters: {
    references: ['RibbonBadge'],
  },
  argTypes: {
    component: {
      table: {
        disable: true,
      },
    },
    orientation: {
      options: ['left', 'right'],
      control: {
        type: 'select',
      },
    },
    color: {
      options: ['success', 'warning', 'error', 'info', 'secondary', 'primary', 'monoB500'],
      control: {
        type: 'select',
      },
    },
    clickable: {
      control: {
        type: 'boolean',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    orientation: 'left',
    color: 'success',
    children: 'text',
  },
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args) => {
    return <RibbonBadge {...args} />;
  },
};
