import { Meta, StoryContext, StoryObj } from '@storybook/react';

import Icon from '@mui/material/Icon';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const getLabel = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Input' : 'Инпут';
};

const getLabelPassword = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Password' : 'Пароль';
};

const getLabelNumber = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Number' : 'Число';
};

const getLabelTextArea = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Text area' : 'Текстовое поле';
};

const getLabelSelect = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Select' : 'Селект';
};

const getHelperText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Helper text' : 'Текст подсказки';
};

const getHelperTextError = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Error text' : 'Текст ошибки';
};

type Args = Pick<TextFieldProps, 'disabled' | 'required' | 'size' | 'placeholder'> & {
  startAdornment: boolean;
  endAdornment: boolean;
};

const meta: Meta<Args> = {
  title: 'Overrides/TextField',

  parameters: {
    viewMode: 'canvas'
  },

  argTypes: {
    disabled: {
      control: {
        type: 'boolean'
      }
    },

    required: {
      control: {
        type: 'boolean'
      }
    },

    size: {
      options: ['56', '48', '40', '32'],

      control: {
        type: 'select'
      }
    },

    placeholder: {
      control: {
        type: 'text'
      }
    },

    startAdornment: {
      control: {
        type: 'boolean'
      }
    },

    endAdornment: {
      control: {
        type: 'boolean'
      }
    }
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: ({ startAdornment, endAdornment, ...args }, context) => {
    const label = getLabel(context);

    const StartAdornment = startAdornment ? (
      <InputAdornment position="start">
        <Icon>search</Icon>
      </InputAdornment>
    ) : null;

    const EndAdornment = endAdornment ? (
      <InputAdornment position="end">
        <Icon>search</Icon>
      </InputAdornment>
    ) : null;

    const InputProps = {
      startAdornment: StartAdornment,
      endAdornment: EndAdornment
    };

    return (
      <div
        style={{
          display: 'grid',
          gap: '16px',
          gridAutoFlow: 'row'
        }}
      >
        <TextField id="text-field-base" label={label} {...args} {...InputProps} />
        <TextField
          id="text-field-password"
          label={getLabelPassword(context)}
          type="password"
          {...args}
          {...InputProps}
        />
        <TextField id="text-field-number" label={getLabelNumber(context)} type="number" {...args} {...InputProps} />
        <TextField helperText={getHelperText(context)} id="text-field-helper" label={label} {...args} {...InputProps} />
        <TextField
          error
          helperText={getHelperTextError(context)}
          id="text-field-error"
          label={label}
          {...args}
          {...InputProps}
        />
        <TextField
          multiline
          id="text-field-multiline"
          label={getLabelTextArea(context)}
          minRows={1}
          {...args}
          {...InputProps}
        />
        <TextField select id="text-field-select" label={getLabelSelect(context)} {...args} {...InputProps}>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </TextField>
      </div>
    );
  }
};
