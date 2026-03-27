import { useState } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react-vite';

import { TextField } from './TextField';

import { IconAtLineW500 } from '../../icons';
import { FormFieldAdornment } from '../FormField';

const getLabelText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Label' : 'Заголовок';
};

const getHelperText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Helper text' : 'Вспомогательный текст';
};

const getPlaceholderText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Enter' : 'Введите';
};

const meta: Meta<typeof TextField> = {
  tags: ['autodocs'],
  component: TextField,
  parameters: {
    references: [
      'TextField',
      'FormField',
      'FormFieldAdornment',
      'FormFieldField',
      'FormFieldHelperText',
      'FormFieldInput',
      'FormFieldLabel',
    ],
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    helperText: {
      control: {
        type: 'text',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    variant: {
      options: ['outlined', 'outlined-notched', 'filled'],
      control: { type: 'select' },
    },
    size: {
      options: ['400', '500', '600', '700', '800', '900', '1000'],
      control: { type: 'select' },
    },
    startAdornment: {
      control: {
        type: 'boolean',
      },
    },
    endAdornment: {
      control: {
        type: 'boolean',
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    inputRef: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: 'outlined-notched',
    size: '700',
    required: false,
    disabled: false,
    error: false,
    fullWidth: false,
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Demo: Story = {
  render: function Render({ startAdornment, endAdornment, ...args }, context) {
    const [value, setValue] = useState('');

    const StartAdornment = startAdornment ? (
      <FormFieldAdornment position="start">
        <IconAtLineW500 />
      </FormFieldAdornment>
    ) : null;

    const EndAdornment = endAdornment ? (
      <FormFieldAdornment position="end">
        <IconAtLineW500 />
      </FormFieldAdornment>
    ) : null;

    return (
      <TextField
        {...args}
        endAdornment={EndAdornment}
        helperText={args.helperText || getHelperText(context)}
        label={args.label || getLabelText(context)}
        placeholder={args.placeholder || getPlaceholderText(context)}
        startAdornment={StartAdornment}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
