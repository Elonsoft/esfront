import { useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { useElementEventListener } from './useElementEventListener';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useElementEventListener',
  parameters: {
    references: ['useElementEventListener'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [count, setCount] = useState(0);

    const ref = useRef<HTMLDivElement | null>(null);

    useElementEventListener(ref, 'click', () => {
      setCount((value) => value + 1);
    });

    return (
      <div className="flex flex-col gap-16" style={{ alignItems: 'flex-start' }}>
        <div
          ref={ref}
          className="body100"
          style={{
            padding: '16px',
            border: '1px solid var(--es-mono-a-a150)',
            borderRadius: '4px',
          }}
        >
          Click me
        </div>
        <div className="body100">
          Count of clicks on the box: <b>{count}</b>.
        </div>
      </div>
    );
  },
};
