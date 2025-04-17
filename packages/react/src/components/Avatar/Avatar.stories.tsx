import { Meta, StoryObj } from '@storybook/react';

import { Box } from '@mui/material';

import { Avatar } from '.';

import { IconAccountLc, IconAccountRoundedLc } from '../../icons';

const meta: Meta<typeof Avatar> = {
  tags: ['autodocs'],
  component: Avatar,
  parameters: {
    references: ['Avatar'],
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
      },
    },
  },
  args: {
    src: './avatar/6.png',
    size: 40,
    variant: 'square',
    outlined: false,
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Demo: Story = {
  args: {
    children: 'НФ',
    outlined: true,
  },
  render: ({ children, src, ...args }) => {
    return (
      <Box display="flex" flexDirection="column" gap="10px">
        <Avatar src={src} {...args}>
          {children}
        </Avatar>
        <Avatar {...args}>{children}</Avatar>
        <Avatar {...args}>{args.variant === 'circle' ? <IconAccountRoundedLc /> : <IconAccountLc />}</Avatar>
      </Box>
    );
  },
};
