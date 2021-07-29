import { useState } from 'react';
import { Story } from '@storybook/react';

import Slider from '@material-ui/core/Slider';

const MARKS = [{ value: 0 }, { value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }, { value: 50 }];

export const Demo: Story = ({ height, ...args }) => {
  const [value, setValue] = useState<number[]>([20, 60]);

  const onChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const style = { height: `${height}px` };

  return (
    <div style={{ display: 'grid', gap: '24px', gridAutoFlow: 'row', maxWidth: '400px', paddingTop: '16px' }}>
      <Slider min={0} max={100} style={style} {...args} />
      <Slider min={0} max={50} step={null} marks={MARKS} style={style} {...args} />
      <Slider min={0} max={100} value={value} onChange={onChange} style={style} {...args} />
    </div>
  );
};
