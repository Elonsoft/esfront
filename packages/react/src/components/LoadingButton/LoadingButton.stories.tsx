import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { LoadingButton } from '.';

import { IconChevronDownLineW400 } from '../../icons';

type Args = Pick<ComponentProps<typeof LoadingButton>, 'variant' | 'color' | 'size' | 'disabled' | 'loading'>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  title: 'LoadingButton',
  parameters: {
    references: ['LoadingButton'],
  },
  argTypes: {
    variant: {
      options: ['text', 'outlined', 'contained'],
      control: { type: 'select' },
    },
    color: {
      options: ['inherit', 'primary', 'secondary', 'tertiary', 'error', 'success', 'monoA', 'monoB', 'white', 'black'],
      control: { type: 'select' },
    },
    size: {
      options: ['16', '20', '24', '32', '40', '48', '56'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args, context) => {
    const icon =
      args.size === '100' ? (
        <IconChevronDownLineW400 size="12px" />
      ) : args.size === '200' ? (
        <IconChevronDownLineW400 size="16px" />
      ) : args.size === '300' ? (
        <IconChevronDownLineW400 size="20px" />
      ) : (
        <IconChevronDownLineW400 />
      );

    return (
      <LoadingButton color="primary" {...args} endIcon={icon}>
        {context.globals.locale === 'en' ? 'Button' : 'Кнопка'}
      </LoadingButton>
    );
  },
};
