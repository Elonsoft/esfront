import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Search } from '.';

const meta: Meta<typeof Search> = {
  tags: ['autodocs'],
  component: Search,
  parameters: {
    references: ['Search'],
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Demo: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return <Search value={value} onChange={(e) => setValue(e.target.value)} onClear={() => setValue('')} />;
  },
};
