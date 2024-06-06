import { Meta, StoryObj } from '@storybook/react';

import { PasswordField } from '.';

const meta: Meta<typeof PasswordField> = {
  tags: ['autodocs'],
  component: PasswordField,
  parameters: {
    references: ['PasswordField'],
  },
  argTypes: {
    focused: {
      table: {
        disable: true,
      },
    },
    hiddenLabel: {
      table: {
        disable: true,
      },
    },
    margin: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PasswordField>;

export const Demo: Story = {
  render: (args) => {
    return <PasswordField {...args} />;
  },
};
