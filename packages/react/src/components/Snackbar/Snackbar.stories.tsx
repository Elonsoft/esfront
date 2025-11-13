import { ComponentProps } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react';

import { Snackbar, SnackbarClose } from '.';

import { IconCloseLineW350 } from '../../icons';
import { Button } from '../Button';

const getMessage = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Message' : 'Сообщение';
};

const getCancelText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Cancel' : 'Отменить';
};

type Args = ComponentProps<typeof Snackbar>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Snackbar,
  parameters: {
    references: ['Snackbar', 'SnackbarClose'],
  },
  argTypes: {
    heading: {
      control: {
        type: 'text',
      },
    },
    message: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: 'radio',
      options: ['s', 'm', 'l', 'xl'],
    },
    icon: {
      table: {
        disable: true,
      },
    },
    progress: {
      table: {
        disable: true,
      },
    },
    colorMapping: {
      table: {
        disable: true,
      },
    },
    action: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args, context) => {
    return (
      <Snackbar
        {...args}
        action={
          <>
            <Button color="monoB" size={args.size === 's' ? '300' : '400'} variant="text">
              {getCancelText(context)}
            </Button>
            <SnackbarClose
              icon={args.size === 's' ? <IconCloseLineW350 container containerSize="20px" /> : undefined}
              progress={!!args.autoHideDuration}
              size={args.size === 's' ? '300' : undefined}
            />
          </>
        }
        message={args.message || getMessage(context)}
      />
    );
  },
};

export const ProgressOnContainer: Story = {
  render: (args, context) => {
    return (
      <Snackbar
        {...args}
        action={
          <>
            <Button color="monoB" size={args.size === 's' ? '300' : '400'} variant="text">
              {getCancelText(context)}
            </Button>
            <SnackbarClose
              icon={args.size === 's' ? <IconCloseLineW350 container containerSize="20px" /> : undefined}
              size={args.size === 's' ? '300' : undefined}
            />
          </>
        }
        message={args.message || getMessage(context)}
        progress={!!args.autoHideDuration}
      />
    );
  },
};
