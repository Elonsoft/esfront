import { useState } from 'react';

import { Story } from '@storybook/react';

import Slider from '@mui/material/Slider';

const MARKS = [{ value: 0 }, { value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }, { value: 50 }];

export const Demo: Story = ({ height, ...args }) => {
  const [value, setValue] = useState<number[]>([20, 60]);

  const onChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const styleHorizontal = { height: `${height}px` };
  const styleVertical = { height: '100%', width: `${height}px` };

  return (
    <div style={{ display: 'grid', gap: '24px', gridAutoFlow: 'row', maxWidth: '400px', paddingTop: '16px' }}>
      <Slider min={0} max={100} style={styleHorizontal} {...args} />
      <Slider min={0} max={50} step={null} marks={MARKS} style={styleHorizontal} {...args} />
      <Slider min={0} max={100} value={value} onChange={onChange} style={styleHorizontal} {...args} />
      <div
        style={{ display: 'grid', gap: '24px', gridAutoFlow: 'column', justifyContent: 'flex-start', height: '150px' }}
      >
        <Slider min={0} max={100} orientation="vertical" style={styleVertical} {...args} />
        <Slider min={0} max={50} step={null} marks={MARKS} orientation="vertical" style={styleVertical} {...args} />
        <Slider
          min={0}
          max={100}
          value={value}
          onChange={onChange}
          orientation="vertical"
          style={styleVertical}
          {...args}
        />
      </div>
    </div>
  );
};
