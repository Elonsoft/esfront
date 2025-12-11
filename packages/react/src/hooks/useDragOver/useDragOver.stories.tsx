import { Meta, StoryObj } from '@storybook/react';

import { useDragOver } from './useDragOver';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useDragOver',
  parameters: {
    references: ['useDragOver'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const { isDragOver, ...props } = useDragOver();

    return (
      <div
        className="body100"
        style={{
          padding: '16px',
          border: '1px dashed var(--es-mono-a-a500)',
          borderRadius: '2px',
          backgroundColor: isDragOver ? 'var(--es-mono-a-a50)' : 'transparent',
        }}
        {...props}
      >
        Drag&apos;n&apos;Drop
      </div>
    );
  },
};
