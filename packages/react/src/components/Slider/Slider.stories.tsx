import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { Slider } from '.';

const MARKS = [{ value: 0 }, { value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }, { value: 50 }];

const MARKS_LABELED = [
  { value: 0, label: '0' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 75, label: '75' },
  { value: 100, label: '100' },
];

type Args = React.ComponentProps<typeof Slider> & { height: number };

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Slider,
  parameters: {
    references: ['Slider'],
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium'],
    },
    track: {
      control: {
        type: 'select',
      },
      options: ['normal', 'inverted', false],
    },
    valueLabelDisplay: {
      control: {
        type: 'select',
      },
      options: ['off', 'auto', 'on'],
    },
    height: {
      control: {
        type: 'range',
        min: 2,
        max: 8,
        step: 1,
      },
    },
  },
  args: {
    color: 'secondary',
    size: 'medium',
    track: 'normal',
    valueLabelDisplay: 'auto',
    disabled: false,
    height: 4,
  },
};

export default meta;

type Story = StoryObj<Args>;

export const Demo: Story = {
  render: function Render({ height, ...args }) {
    const [value, setValue] = useState<number[]>([20, 60]);

    const onChange = (_event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    };

    const styleHorizontal = { height: `${height}px` };
    const styleVertical = { height: '100%', width: `${height}px` };

    return (
      <div style={{ display: 'grid', gap: '24px', gridAutoFlow: 'row', maxWidth: '400px', paddingTop: '16px' }}>
        <Slider max={100} min={0} style={styleHorizontal} {...args} />
        <Slider marks={MARKS} max={50} min={0} step={null} style={styleHorizontal} {...args} />
        <Slider max={100} min={0} style={styleHorizontal} value={value} onChange={onChange} {...args} />
        <Slider marks={MARKS_LABELED} max={100} min={0} step={25} style={styleHorizontal} {...args} />
        <div style={{ display: 'grid', gap: '24px', gridAutoFlow: 'column', height: '150px', justifyContent: 'start' }}>
          <Slider max={100} min={0} orientation="vertical" style={styleVertical} {...args} />
          <Slider marks={MARKS} max={50} min={0} orientation="vertical" step={null} style={styleVertical} {...args} />
          <Slider
            max={100}
            min={0}
            orientation="vertical"
            style={styleVertical}
            value={value}
            onChange={onChange}
            {...args}
          />
        </div>
      </div>
    );
  },
};
