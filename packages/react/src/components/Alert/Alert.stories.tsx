import { ComponentProps } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react';

import { Alert, AlertActions, AlertClose, AlertTitle } from '.';

import { Button } from '../Button';

const getText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'This is an alert' : 'Это предупреждение';
};

const getButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Button' : 'Кнопка';
};

const getCancelButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Cancel' : 'Отмена';
};

type Args = ComponentProps<typeof Alert> & { title?: string; text?: string; actions?: boolean };

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Alert,
  parameters: {
    references: ['Alert', 'AlertActions', 'AlertClose', 'AlertTitle'],
  },
  argTypes: {
    color: {
      options: ['success', 'warning', 'error', 'info', 'monoA'],
      control: { type: 'select' },
    },
    severity: {
      options: ['success', 'warning', 'error', 'info'],
      control: { type: 'select' },
    },
    variant: {
      table: {
        disable: true,
      },
    },
    icon: {
      defaultValue: true,
      control: {
        type: 'boolean',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    text: {
      control: {
        type: 'text',
      },
    },
    action: {
      control: {
        type: 'boolean',
      },
    },
    actions: {
      control: {
        type: 'boolean',
      },
    },
    breakpoint: {
      options: [null, '0', 'sm', 'lg'],
      control: { type: 'select' },
    },
    breakpointContent: {
      options: [null, '0', 'sm', 'lg'],
      control: { type: 'select' },
    },
  },
  args: {
    icon: true,
    action: false,
    actions: false,
  },
};

export default meta;

type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args, context) => {
    return (
      <Alert
        action={args.action ? <AlertClose /> : null}
        actions={
          !!args.actions && (
            <AlertActions>
              <Button className="mr-8" color="tertiary" size="400" variant="contained">
                {getButtonText(context)}
              </Button>
              <Button color="tertiary" size="400" variant="text">
                {getCancelButtonText(context)}
              </Button>
            </AlertActions>
          )
        }
        breakpoint={args.breakpoint}
        breakpointContent={args.breakpointContent}
        color={args.color}
        icon={args.icon ? undefined : false}
        severity={args.severity}
      >
        {!!args.title && <AlertTitle>{args.title}</AlertTitle>}
        {args.text || getText(context)}
      </Alert>
    );
  },
};
