import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { Tag } from './Tag';

import { IconInformationFillW200 } from '../../icons';

type Args = ComponentProps<typeof Tag> & { component?: unknown };

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Tag,
  parameters: {
    references: ['Tag'],
  },
  argTypes: {
    component: {
      table: {
        disable: true,
      },
    },
    startIcon: {
      table: {
        disable: true,
      },
    },
    endIcon: {
      table: {
        disable: true,
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    variant: {
      options: ['overline', 'caption'],
      control: { type: 'select' },
    },
    color: {
      options: ['success', 'warning', 'error', 'info', 'secondary', 'primary', 'monoA', 'monoB'],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    children: 'Tag',
    color: 'primary',
    variant: 'overline',
  },
};

export default meta;

type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: '16px' }}>
        <Tag
          endIcon={<IconInformationFillW200 container containerSize="16px" />}
          startIcon={<IconInformationFillW200 container containerSize="16px" />}
          {...args}
        />
        <Tag endIcon={<IconInformationFillW200 container containerSize="16px" />} {...args} />
        <Tag startIcon={<IconInformationFillW200 container containerSize="16px" />} {...args} />
        <Tag {...args} />
      </div>
    );
  },
};
