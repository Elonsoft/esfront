import { ComponentProps } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react';

import { Box, useTheme } from '@mui/material';

import { SplitButton } from '.';

import { IconChevronDownW400 } from '../../icons';
import { Button } from '../Button/Button';

type Args = ComponentProps<typeof SplitButton> & {
  TouchRipplePropsCenter?: boolean;
  TouchRipplePropsPressGrowDuration?: number;
  TouchRipplePropsMinimumPressDuration?: number;
};

const getText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Button' : 'Кнопка';
};

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: SplitButton,
  parameters: {
    references: ['SplitButton'],
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
    },
    color: {
      control: { type: 'select' },
    },
    size: {
      control: { type: 'select' },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    fullWidth: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args, context) => {
    const text = getText(context);
    const icon =
      args.size === '200' ? (
        <IconChevronDownW400 size="16px" />
      ) : args.size === '300' ? (
        <IconChevronDownW400 size="20px" />
      ) : (
        <IconChevronDownW400 />
      );

    const theme = useTheme();

    const backgroundColor =
      args.color === 'monoB' || args.color === 'white' ? theme.vars.palette.monoA.A800 : undefined;

    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          padding: '10px 0px 10px 10px',
          backgroundColor,
        }}
      >
        <SplitButton {...args}>
          <Button>{icon}</Button>
          <Button>{text}</Button>
          <Button>{icon}</Button>
        </SplitButton>

        <SplitButton {...args}>
          <Button>{text}</Button>
          <Button>{icon}</Button>
        </SplitButton>
      </Box>
    );
  },
};
