import { Meta, StoryContext, StoryObj } from '@storybook/react';

// eslint-disable-next-line no-restricted-imports
import Button from '@mui/material/Button';

import { IconChevronDownW400 } from '../../../icons';

const getText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Button' : 'Кнопка';
};

const meta: Meta<typeof Button> = {
  title: 'Overrides/Button',
  parameters: {
    viewMode: 'canvas'
  },
  argTypes: {
    variant: {
      options: ['text', 'outlined', 'contained'],

      control: {
        type: 'select'
      }
    },

    color: {
      options: ['inherit', 'primary', 'secondary', 'tertiary', 'error', 'success', 'monoA', 'monoB', 'white', 'black'],

      control: {
        type: 'select'
      }
    },

    size: {
      options: ['16', '20', '24', '32', '40', '48', '56'],

      control: {
        type: 'select'
      }
    },

    disabled: {
      control: {
        type: 'boolean'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Demo: Story = {
  render: (args, context) => {
    const text = getText(context);
    const icon =
      args.size === '16' ? (
        <IconChevronDownW400 size="12px" />
      ) : args.size === '20' ? (
        <IconChevronDownW400 size="16px" />
      ) : args.size === '24' ? (
        <IconChevronDownW400 size="20px" />
      ) : (
        <IconChevronDownW400 />
      );

    return (
      <div
        style={{
          display: 'grid',
          gap: '16px',
          gridAutoFlow: 'column',
          justifyContent: 'flex-start'
        }}
      >
        <Button {...args}>{text}</Button>
        <Button {...args} endIcon={icon} startIcon={icon}>
          {text}
        </Button>
        <Button {...args}>{icon}</Button>
      </div>
    );
  }
};
