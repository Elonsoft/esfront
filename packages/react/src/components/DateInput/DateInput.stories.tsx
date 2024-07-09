import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { DateInput } from '.';

const meta: Meta<typeof DateInput> = {
  tags: ['autodocs'],
  component: DateInput,
  parameters: {
    references: ['DateInput'],
  },
};

export default meta;

type Story = StoryObj<typeof DateInput>;

export const Demo: Story = {
  render: function Render() {
    const [value, setValue] = useState<Date | null>(null);

    const onChange = (value: Date | null) => {
      setValue(value);
    };

    return (
      <>
        <DateInput value={value} onChange={onChange} />
        <div>{value ? value.toISOString() : 'null'}</div>
      </>
    );
  },
};
