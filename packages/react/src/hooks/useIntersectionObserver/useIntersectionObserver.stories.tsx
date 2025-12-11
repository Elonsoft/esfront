import { useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useIntersectionObserver } from './useIntersectionObserver';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useIntersectionObserver',
  parameters: {
    references: ['useIntersectionObserver'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [isIntersecting, setIntersecting] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useIntersectionObserver(ref, (entries) => {
      setIntersecting(entries[0].isIntersecting);
    });

    return (
      <div
        style={{
          height: 'min(calc(100vh - 32px), 300px)',
          overflow: 'auto',
          border: '1px solid black',
          borderRadius: '4px',
        }}
      >
        <div
          className="body100"
          style={{ position: 'sticky', top: 0, backgroundColor: 'monoB.500', padding: '4px 8px' }}
        >
          Bottom element is intersecting: {isIntersecting.toString()}
        </div>
        <div style={{ height: '600px' }} />
        <div ref={ref} style={{ height: '64px', backgroundColor: 'var(--es-primary-300)' }} />
      </div>
    );
  },
};
