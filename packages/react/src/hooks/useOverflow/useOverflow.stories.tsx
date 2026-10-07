import { useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { useOverflow } from './useOverflow';

type Args = { threshold?: number };

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useOverflow',
  parameters: {
    references: ['useOverflow'],
  },
  argTypes: {
    threshold: {
      control: {
        type: 'number',
      },
    },
  },
};

export default meta;

type Story = StoryObj<Args>;

export const Demo: Story = {
  render: function Render(args) {
    const [text, setText] = useState('A short line of text');

    const ref = useRef<HTMLDivElement | null>(null);

    const { isOverflowX, isOverflowY } = useOverflow(ref, { threshold: args.threshold });

    return (
      <div className="flex flex-col gap-16" style={{ alignItems: 'flex-start' }}>
        <input
          className="body100"
          style={{ width: '300px' }}
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <div
          ref={ref}
          className="body100"
          style={{
            resize: 'both',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: '200px',
            height: '40px',
            padding: '8px',
            border: '1px solid var(--es-mono-a-a150)',
            borderRadius: '4px',
          }}
        >
          {text}
        </div>
        <div className="body100">
          <div>isOverflowX: {isOverflowX.toString()}</div>
          <div>isOverflowY: {isOverflowY.toString()}</div>
        </div>
      </div>
    );
  },
};
