import { Meta, StoryObj } from '@storybook/react-vite';

import { useMediaQuery } from './useMediaQuery';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useMediaQuery',
  parameters: {
    references: ['useMediaQuery'],
  },
};

export default meta;

type Story = StoryObj;

const QUERIES = ['(min-width: 640px)', '(min-width: 1280px)', '(hover: none) and (pointer: coarse)'];

const Query = ({ query }: { query: string }) => {
  const matches = useMediaQuery(query);

  return (
    <div>
      <code>{query}</code> is <b>{String(matches)}</b>.
    </div>
  );
};

export const Demo: Story = {
  render: function Render() {
    return (
      <div className="body100 flex flex-col">
        {QUERIES.map((query) => (
          <Query key={query} query={query} />
        ))}
      </div>
    );
  },
};
