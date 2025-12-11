import { Meta, StoryObj } from '@storybook/react';

import { useOnLine } from './useOnLine';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useOnLine',
  parameters: {
    references: ['useOnLine'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const isOnLine = useOnLine();

    return (
      <div className="body100">
        Network status is <b>{isOnLine ? 'ONLINE' : 'OFFLINE'}</b>.
      </div>
    );
  },
};
