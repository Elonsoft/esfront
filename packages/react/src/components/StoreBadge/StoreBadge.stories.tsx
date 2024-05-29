import { Meta, StoryObj } from '@storybook/react';

import { StoreBadge } from '.';

import { IconAppStore, IconAppStoreLogo } from '../../icons';

const meta: Meta<typeof StoreBadge> = {
  tags: ['autodocs'],
  component: StoreBadge,
  parameters: {
    references: ['StoreBadge']
  }
};

export default meta;
type Story = StoryObj<typeof StoreBadge>;

export const Demo: Story = {
  render: (args) => {
    return (
      <StoreBadge startIcon={<IconAppStoreLogo />} upperText="Загрузите в" {...args}>
        <IconAppStore />
      </StoreBadge>
    );
  }
};
