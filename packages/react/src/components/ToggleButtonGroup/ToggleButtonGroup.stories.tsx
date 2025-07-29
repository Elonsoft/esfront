import React, { ComponentProps, useState } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react';

import { ToggleButton, ToggleButtonGroup } from '.';

import { IconMenuDownW400 } from '../../icons';

type Args = ComponentProps<typeof ToggleButtonGroup>;

const meta: Meta<Args> = {
  title: 'ToggleButton',
  tags: ['autodocs'],
  component: ToggleButtonGroup,
  parameters: {
    references: ['ToggleButton', 'ToggleButtonGroup'],
  },
  argTypes: {
    value: {
      table: {
        disable: true,
      },
    },
    breakpoint: {
      control: {
        type: 'number',
      },
    },
  },
};

export default meta;
type Story = StoryObj<Args>;

const OPTIONS = ['value1', 'value2', 'value3', 'value4', 'value5'];

const getText = (args: Args, context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Text' : 'Текст';
};

export const Demo: Story = {
  render: function Render(args, context) {
    const [value, setValue] = useState<string>(OPTIONS[0]);
    const [values, setValues] = useState(() => [OPTIONS[0], OPTIONS[1]]);

    const onValueChange = (event: React.MouseEvent, value: string) => {
      if (value) {
        setValue(value);
      }
    };

    const onValuesChange = (event: React.MouseEvent, value: string[]) => {
      setValues(value);
    };

    const icon = args.size === '400' ? <IconMenuDownW400 size="20px" /> : <IconMenuDownW400 />;

    const props = {
      startIcon: icon,
      endIcon: icon,
    };

    return (
      <ToggleButtonGroup
        {...args}
        disabled={args.disabled}
        value={args.exclusive ? value : values}
        onChange={args.exclusive ? onValueChange : onValuesChange}
      >
        <ToggleButton value={OPTIONS[0]} {...props}>
          {getText(args, context)} 1
        </ToggleButton>
        <ToggleButton value={OPTIONS[1]} {...props}>
          {getText(args, context)} 2
        </ToggleButton>
        <ToggleButton value={OPTIONS[2]} {...props}>
          {getText(args, context)} 3
        </ToggleButton>
        <ToggleButton disabled value={OPTIONS[3]} {...props}>
          {getText(args, context)} 4
        </ToggleButton>
        <ToggleButton disabled value={OPTIONS[4]}>
          {getText(args, context)} 5
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
};
