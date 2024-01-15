import { Args, Meta, StoryContext, StoryObj } from '@storybook/react';

import { EmptyStateCompact } from '.';

const getChildren = (args: Args, context: StoryContext<unknown>) => {
  return args.children || (context.globals.locale === 'en' ? 'There are no entities' : 'Сущностей нет');
};

const meta: Meta<typeof EmptyStateCompact> = {
  tags: ['autodocs'],
  component: EmptyStateCompact,
  parameters: {
    references: ['EmptyStateCompact']
  }
};

export default meta;
type Story = StoryObj<typeof EmptyStateCompact>;

export const Demo: Story = {
  render: (args, context) => {
    return <EmptyStateCompact> {getChildren(args, context)}</EmptyStateCompact>;
  }
};
