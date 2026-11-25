import { MouseEvent, useState } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react-vite';

import { ToggleButton, ToggleButtonGroup } from '.';

import { IconAtLineW500, IconMenuDownFillW400 } from '../../icons';

const meta: Meta<typeof ToggleButtonGroup> = {
  tags: ['autodocs'],
  component: ToggleButtonGroup,
  parameters: {
    references: ['ToggleButton', 'ToggleButtonGroup'],
  },
  args: {
    exclusive: true,
    orientation: 'horizontal',
    size: '500',
    disabled: false,
    fullWidth: false,
    breakpoint: '0',
  },
  argTypes: {
    breakpoint: {
      options: [null, '0', 'sm', 'lg'],
      control: { type: 'select' },
    },
    children: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: 'select',
      options: ['400', '500', '600', '700'],
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleButtonGroup>;

const OPTIONS = ['value1', 'value2', 'value3', 'value4', 'value5'];

const getText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Text' : 'Текст';
};

export const Demo: Story = {
  render: function Render(args, context) {
    const [value, setValue] = useState<string | null>(OPTIONS[0]);
    const [values, setValues] = useState<string[]>([OPTIONS[0], OPTIONS[1]]);

    const onChange = (_event: MouseEvent, newValue: string | string[] | null) => {
      if (args.exclusive) {
        setValue(newValue as string | null);
      } else {
        setValues((newValue as string[]) || []);
      }
    };

    const icon = args.size === '400' ? <IconAtLineW500 size="20px" /> : <IconAtLineW500 />;
    const endIcon = args.size === '400' ? <IconMenuDownFillW400 size="20px" /> : <IconMenuDownFillW400 />;

    return (
      <ToggleButtonGroup {...args} value={args.exclusive ? value : values} onChange={onChange}>
        {OPTIONS.map((option, index) => (
          <ToggleButton key={option} disabled={index > 2} endIcon={endIcon} startIcon={icon} value={option}>
            {getText(context)} {index + 1}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    );
  },
};

export const Icons: Story = {
  args: {
    exclusive: true,
  },
  render: function Render(args) {
    const [value, setValue] = useState<string | null>(OPTIONS[0]);

    const onChange = (_event: MouseEvent, newValue: string | string[] | null) => {
      setValue(newValue as string | null);
    };

    const icon = args.size === '400' ? <IconAtLineW500 size="20px" /> : <IconAtLineW500 />;
    const endIcon = args.size === '400' ? <IconMenuDownFillW400 size="20px" /> : <IconMenuDownFillW400 />;

    return (
      <ToggleButtonGroup {...args} value={value} onChange={onChange}>
        {OPTIONS.map((option) => (
          <ToggleButton key={option} endIcon={endIcon} startIcon={icon} value={option} />
        ))}
      </ToggleButtonGroup>
    );
  },
};
