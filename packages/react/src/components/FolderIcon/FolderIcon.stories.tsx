import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { FolderIcon } from './';

type Args = ComponentProps<typeof FolderIcon>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: FolderIcon,
  parameters: {
    references: ['FolderIcon'],
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'monoA'],
      control: { type: 'select' },
    },
    variant: {
      options: ['outlined', 'contained', 'default', 'colored'],
      control: { type: 'select' },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    filled: {
      table: {
        disable: true,
      },
    },
    SvgIconProps: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: 'default',
    size: '500',
  },
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args) => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '10px',
        }}
      >
        <FolderIcon filled color={args.color} size={args.size} variant={args.variant} />
        <FolderIcon color={args.color} size={args.size} variant={args.variant} />
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <div
        style={{
          paddingTop: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <FolderIcon filled size="800" />
        <FolderIcon filled size="700" />
        <FolderIcon filled size="600" />
        <FolderIcon filled />
        <FolderIcon filled size="400" />
        <FolderIcon filled size="300" />
        <FolderIcon filled size="200" />
        <FolderIcon filled size="100" />
      </div>
    );
  },
};
