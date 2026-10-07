import { CSSProperties, useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { useScrollPosition } from './useScrollPosition';

import { Button } from '../../components/Button';

type Args = { threshold?: number };

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useScrollPosition',
  parameters: {
    references: ['useScrollPosition'],
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

const SHADOW_SIZE = 24;

const getShadow = (direction: string, isVisible: boolean): CSSProperties => ({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  opacity: isVisible ? 1 : 0,
  transition: 'opacity 150ms',
  background: `linear-gradient(to ${direction}, var(--es-mono-a-a150), transparent ${SHADOW_SIZE}px)`,
});

export const Demo: Story = {
  render: function Render(args) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [rows, setRows] = useState(8);

    const { isScrollableX, isScrollableY, isAtLeft, isAtRight, isAtTop, isAtBottom } = useScrollPosition(ref, {
      threshold: args.threshold,
    });

    return (
      <div className="flex flex-col gap-16" style={{ maxWidth: '400px' }}>
        <div style={{ position: 'relative' }}>
          <div
            ref={ref}
            style={{
              height: '200px',
              overflow: 'auto',
              border: '1px solid var(--es-mono-a-a150)',
              borderRadius: '4px',
            }}
          >
            {Array.from({ length: rows }, (_, index) => (
              <div key={index} className="body100" style={{ padding: '8px 16px', whiteSpace: 'nowrap' }}>
                Row {index + 1} — scroll both axes to see the flags change
              </div>
            ))}
          </div>
          <div style={getShadow('bottom', isScrollableY && !isAtTop)} />
          <div style={getShadow('top', isScrollableY && !isAtBottom)} />
          <div style={getShadow('right', isScrollableX && !isAtLeft)} />
          <div style={getShadow('left', isScrollableX && !isAtRight)} />
        </div>
        <div className="body100">
          <div>isScrollableX: {isScrollableX.toString()}</div>
          <div>isScrollableY: {isScrollableY.toString()}</div>
          <div>isAtLeft: {isAtLeft.toString()}</div>
          <div>isAtRight: {isAtRight.toString()}</div>
          <div>isAtTop: {isAtTop.toString()}</div>
          <div>isAtBottom: {isAtBottom.toString()}</div>
        </div>
        <div className="flex gap-8">
          <Button onClick={() => setRows((value) => value + 4)}>Add rows</Button>
          <Button variant="outlined" onClick={() => setRows(1)}>
            Reset rows
          </Button>
        </div>
      </div>
    );
  },
};
