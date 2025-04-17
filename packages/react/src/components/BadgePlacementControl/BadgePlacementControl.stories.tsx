import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { BadgePlacementControl } from './BadgePlacementControl';

import { Avatar } from '../Avatar';
import { Badge } from '../Badge';

type Args = ComponentProps<typeof BadgePlacementControl>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: BadgePlacementControl,
  parameters: {
    references: ['BadgePlacementControl'],
  },
  argTypes: {
    badge: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    placement: {
      control: {
        type: 'select',
      },
    },
    overlap: {
      control: {
        type: 'select',
      },
    },
  },
  args: {
    badge: (
      <Badge color="primary" size="600">
        1
      </Badge>
    ),
    offset: [0, 0],
  },
};

export default meta;

type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args) => {
    return (
      <BadgePlacementControl {...args}>
        <Avatar outlined={false} src="./avatar/6.png" variant="square" />
      </BadgePlacementControl>
    );
  },
};

/** The prop overlap="circular" can be used to align the badge for children with circular shape. */
export const Circular: Story = {
  render: (args) => {
    return (
      <BadgePlacementControl {...args} overlap="circular">
        <Avatar outlined={false} src="./avatar/6.png" variant="circle" />
      </BadgePlacementControl>
    );
  },
};
