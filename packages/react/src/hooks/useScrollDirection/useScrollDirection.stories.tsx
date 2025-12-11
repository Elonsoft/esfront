import { Meta, StoryObj } from '@storybook/react';

import { useScrollDirection } from './useScrollDirection';

type Args = { throttleTimeout?: number };

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useScrollDirection',
  parameters: {
    references: ['useScrollDirection'],
    docs: {
      story: { inline: false },
    },
  },
  argTypes: {
    throttleTimeout: {
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
    const scrollDirection = useScrollDirection({ throttleTimeout: args.throttleTimeout });

    return (
      <>
        <div className="overline" style={{ position: 'fixed' }}>
          {scrollDirection ? scrollDirection : `the page hasn't been scrolled`}
        </div>
        <div style={{ height: '150vh' }} />
      </>
    );
  },
};
