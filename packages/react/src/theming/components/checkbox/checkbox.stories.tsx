import { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line no-restricted-imports
import { Checkbox } from '@mui/material';

const meta: Meta<typeof Checkbox> = {
  title: 'Overrides/Checkbox',
  parameters: {
    viewMode: 'canvas',
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'error'],

      control: {
        type: 'select',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    indeterminate: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Demo: Story = {
  render: (args) => {
    return (
      <div>
        <Checkbox {...args} />
      </div>
    );
  },
};
