import { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line no-restricted-imports
import IconButton from '@mui/material/IconButton';

import { IconChevronDownW400 } from '../../../icons';

const meta: Meta<typeof IconButton> = {
  title: 'Overrides/IconButton',

  parameters: {
    viewMode: 'canvas'
  },

  argTypes: {
    color: {
      options: ['inherit', 'primary', 'secondary', 'tertiary', 'error', 'monoA', 'monoB', 'white', 'black'],

      control: {
        type: 'select'
      }
    },

    size: {
      options: ['16', '20', '24', '32', '40', '48', '56'],

      control: {
        type: 'select'
      }
    },

    disabled: {
      control: {
        type: 'boolean'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Demo: Story = {
  render: (args) => {
    const icon =
      args.size === '16' ? (
        <IconChevronDownW400 size="12px" />
      ) : args.size === '20' ? (
        <IconChevronDownW400 size="16px" />
      ) : args.size === '24' ? (
        <IconChevronDownW400 size="20px" />
      ) : (
        <IconChevronDownW400 />
      );
    return <IconButton {...args}>{icon}</IconButton>;
  }
};
