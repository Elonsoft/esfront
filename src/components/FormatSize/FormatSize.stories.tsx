import { Meta, StoryObj } from '@storybook/react';

import { FormatSize } from '.';

const meta: Meta<typeof FormatSize> = {
  tags: ['autodocs'],
  component: FormatSize,
  parameters: {
    references: ['FormatSize']
  },
  argTypes: {
    children: {
      control: { type: 'text' }
    },
    prefix: {
      control: { type: 'select' }
    },
    metricUnits: {
      table: {
        disable: true
      }
    },
    binaryUnits: {
      table: {
        disable: true
      }
    }
  },
  args: {
    children: '1000'
  }
};

export default meta;
type Story = StoryObj<typeof FormatSize>;

export const Demo: Story = {
  render: (args) => {
    return <FormatSize {...args} />;
  }
};
