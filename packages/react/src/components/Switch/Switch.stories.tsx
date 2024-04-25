import { Meta, StoryObj } from '@storybook/react';

import { Switch } from '.';

const meta: Meta<typeof Switch> = {
  tags: ['autodocs'],
  component: Switch,
  parameters: {
    references: ['Switch']
  },
  argTypes: {
    value: {
      table: {
        disable: true
      }
    },
    name: {
      table: {
        disable: true
      }
    },
    id: {
      table: {
        disable: true
      }
    },
    autoFocus: {
      table: {
        disable: true
      }
    },
    checked: {
      control: { type: 'boolean' }
    },
    defaultChecked: {
      table: {
        disable: true
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Demo: Story = {
  render: (args) => {
    return <Switch {...args} />;
  }
};
