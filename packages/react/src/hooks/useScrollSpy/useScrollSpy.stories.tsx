import { useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useScrollSpy } from './useScrollSpy';

import { Button } from '../../components';

const sections = ['1', '2', '3', '4', '5'];

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useScrollSpy',
  parameters: {
    references: ['useScrollSpy'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const isDocsPage = window.location.href.includes('docs');

    const activeId = useScrollSpy(sections, {
      ...(containerRef.current ? { root: containerRef.current } : {}),
    });

    return (
      <div
        className="flex flex-col"
        style={{
          maxHeight: isDocsPage ? '40dvh' : undefined,
          margin: '-1rem',
        }}
      >
        <div
          className="flex flex-row"
          style={{ position: 'sticky', top: 0, backgroundColor: 'var(--es-surface-50)', zIndex: 2 }}
        >
          {sections.map((section) => (
            <Button
              key={section}
              color={activeId === section ? 'primary' : 'tertiary'}
              style={{ borderRadius: 0 }}
              variant="contained"
            >
              {section}
            </Button>
          ))}
        </div>
        <div ref={containerRef}>
          {sections.map((section, index) => (
            <section
              key={section}
              className="px-16 py-16"
              id={section}
              style={{
                height: '101vh',
                backgroundColor: index % 2 === 0 ? 'var(--es-mono-a-a100)' : 'var(--es-mono-a-a50)',
              }}
            >
              {section}
            </section>
          ))}
        </div>
      </div>
    );
  },
};
