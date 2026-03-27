import { Meta, StoryObj } from '@storybook/react-vite';

import { PasswordField } from '.';

const meta: Meta<typeof PasswordField> = {
  tags: ['autodocs'],
  component: PasswordField,
  parameters: {
    references: ['PasswordField'],
  },
};

export default meta;

type Story = StoryObj<typeof PasswordField>;

export const Demo: Story = {
  render: (args) => {
    return <PasswordField {...args} />;
  },
};
