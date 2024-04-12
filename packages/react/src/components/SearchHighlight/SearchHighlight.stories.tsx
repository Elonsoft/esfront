import { Meta, StoryObj } from '@storybook/react';

import { SearchHighlight } from './SearchHighlight';

const meta: Meta<typeof SearchHighlight> = {
  tags: ['autodocs'],
  component: SearchHighlight,
  parameters: {
    references: ['SearchHighlight']
  },
  argTypes: {
    children: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    text: 'Lorem ipsum dolor sit amet',
    searchText: 'ipsum'
  }
};

export default meta;
type Story = StoryObj<typeof SearchHighlight>;

export const Demo: Story = {
  render: (args) => {
    return <SearchHighlight searchText={args.searchText} text={args.text} />;
  }
};
