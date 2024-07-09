import { useState } from 'react';

import { DateInputProps } from './DateInput.types';

import { Controls, Description, Markdown, Primary, Stories, Subtitle, Title } from '@storybook/addon-docs/blocks';
import { Meta, StoryContext, StoryObj } from '@storybook/react-vite';

import clsx from 'clsx';

import setup from './DateInput.stories.setup.md?raw';
import { DateInput } from '.';

import { ReferencesList } from '../../../.storybook/components/ReferencesList';
import { useId } from '../../hooks';
import { FormField, FormFieldField, FormFieldHelperText, FormFieldLabel, useFormFieldContext } from '../FormField';

const getLabelText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Date' : 'Дата';
};

const getHelperText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Helper text' : 'Вспомогательный текст';
};

const meta: Meta<typeof DateInput> = {
  tags: ['autodocs'],
  component: DateInput,
  parameters: {
    references: ['DateInput', 'FormField', 'FormFieldField', 'FormFieldHelperText', 'FormFieldLabel'],
    docs: {
      page: () => {
        // TODO: Simplify this part / make it generic.
        return (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <Controls />
            <Stories includePrimary={false} />
            <Markdown>{setup}</Markdown>
            <ReferencesList />
          </>
        );
      },
    },
  },
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    'aria-label': {
      table: {
        disable: true,
      },
    },
    'aria-labelledby': {
      table: {
        disable: true,
      },
    },
    'aria-describedby': {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    getFieldLabel: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DateInput>;

export const Demo: Story = {
  render: function Render(args, context) {
    const [value, setValue] = useState<Date | null>(null);

    const label = getLabelText(context);

    return (
      <div className="flex flex-col gap-8">
        <DateInput
          aria-label={label}
          value={value}
          onChange={setValue}
          {...args}
          maxDate={args.maxDate ? new Date(args.maxDate) : undefined}
          minDate={args.minDate ? new Date(args.minDate) : undefined}
        />
        <div>{value ? value.toISOString() : 'null'}</div>
      </div>
    );
  },
};

interface DateFieldProps extends DateInputProps {
  label?: string;
  helperText?: string;
}

const DateFieldInput = ({ helperTextId, ...props }: DateInputProps & { helperTextId?: string }) => {
  const { size, variant, disabled } = useFormFieldContext();

  return (
    <DateInput
      {...props}
      aria-describedby={helperTextId}
      className={clsx(
        'es-form-field-input',
        `es-form-field-input--variant--${variant}`,
        `es-form-field-input--size--${size}`,
        disabled && 'es-form-field-input--disabled',
        size === '400' || size === '500' ? 'body100' : 'subtitle1'
      )}
    />
  );
};

const DateField = ({ label, helperText, ...props }: DateFieldProps) => {
  const helperTextId = useId();

  return (
    <FormField required size="800" variant="outlined-notched">
      {!!label && <FormFieldLabel>{label}</FormFieldLabel>}
      <FormFieldField label={label}>
        <DateFieldInput {...props} helperTextId={helperText ? helperTextId : undefined} />
      </FormFieldField>
      {!!helperText && <FormFieldHelperText id={helperTextId}>{helperText}</FormFieldHelperText>}
    </FormField>
  );
};

/** We can use `DateInput` with `FormField` components in order to build `DateField` component. */
export const FormFieldDemo: Story = {
  name: 'FormField',
  render: function Render(_args, context) {
    const [value, setValue] = useState<Date | null>(null);

    return (
      <DateField
        required
        helperText={getHelperText(context)}
        label={getLabelText(context)}
        value={value}
        onChange={setValue}
      />
    );
  },
};
