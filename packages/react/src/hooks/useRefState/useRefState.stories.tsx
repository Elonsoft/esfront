import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { useRefState } from './useRefState';

import { useResizeObserver } from '../useResizeObserver';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useRefState',
  parameters: {
    references: ['useRefState'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [isMounted, setMounted] = useState(false);
    const [width, setWidth] = useState(0);

    // A plain `useRef` would not work here: the box is mounted after the first render, and writing
    // to a ref does not re-render, so `useResizeObserver` would never pick the node up.
    const [box, setBox] = useRefState<HTMLDivElement>();

    useResizeObserver(box, (entries) => {
      setWidth(entries[0].target.clientWidth);
    });

    return (
      <div className="flex flex-col gap-16" style={{ alignItems: 'flex-start' }}>
        <label className="body100 flex gap-8">
          <input checked={isMounted} type="checkbox" onChange={() => setMounted((value) => !value)} />
          Mount the observed box
        </label>
        {isMounted && (
          <div
            ref={setBox}
            className="body100"
            style={{
              resize: 'horizontal',
              overflow: 'auto',
              width: '200px',
              padding: '8px',
              border: '1px solid var(--es-mono-a-a150)',
              borderRadius: '4px',
            }}
          >
            Drag my bottom right corner
          </div>
        )}
        <div className="body100">Observed width: {width}px</div>
      </div>
    );
  },
};
