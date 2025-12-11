import { useEffect, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useUpdateEffect } from './useUpdateEffect';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useUpdateEffect',
  parameters: {
    references: ['useUpdateEffect'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [count, setCount] = useState(0);
    const [effectCount, setEffectCount] = useState<number | null>(null);
    const [updateEffectCount, setUpdateEffectCount] = useState<number | null>(null);

    useEffect(() => {
      setTimeout(() => {
        setEffectCount(count);
      }, 1000);
    }, [count]);

    useUpdateEffect(() => {
      setTimeout(() => {
        setUpdateEffectCount(count);
      }, 1000);
    }, [count]);

    return (
      <>
        <div className="body100">Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <br />
        <br />
        <div className="body100">Count from effect: {effectCount}</div>
        <div className="body100">Count from update effect: {updateEffectCount}</div>
      </>
    );
  },
};
