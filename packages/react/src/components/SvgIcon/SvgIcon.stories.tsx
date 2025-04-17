import { Meta, StoryObj } from '@storybook/react';

import { SvgIcon } from '.';

const meta: Meta<typeof SvgIcon> = {
  tags: ['autodocs'],
  component: SvgIcon,
  parameters: {
    references: ['SvgIcon'],
  },
  argTypes: {
    viewBox: {
      table: {
        disable: true,
      },
    },
    ContainerProps: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    size: '24px',
    containerSize: '32px',
  },
};

export default meta;

type Story = StoryObj<typeof SvgIcon>;

export const Demo: Story = {
  render: (args) => {
    return (
      <SvgIcon {...args} viewBox="0 0 24 24">
        <path
          d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z"
          fill="currentColor"
        />
      </SvgIcon>
    );
  },
};
