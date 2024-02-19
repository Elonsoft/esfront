import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

type Args = ComponentProps<typeof Badge> & { component?: unknown };

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Badge,
  parameters: {
    references: ['Badge'],
  },
  argTypes: {
    component: {
      table: {
        disable: true,
      },
    },
    size: {
      options: ['100', '200', '300', '400', '500', '600', '700'],
      control: {
        type: 'select',
      },
    },
    color: {
      options: ['success', 'warning', 'error', 'info', 'secondary', 'primary', 'monoA', 'monoB', 'monoB500'],
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
    children: '1',
    size: '700',
    color: 'monoA',
  },
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args) => {
    return <Badge {...args} />;
  },
};
