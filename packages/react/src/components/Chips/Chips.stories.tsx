import { Meta, StoryObj } from '@storybook/react';

import { Chips } from './Chips';

import { Chip } from '../Chip';

const meta: Meta<typeof Chips> = {
  tags: ['autodocs'],
  component: Chips,
  parameters: {
    references: ['Chips'],
  },
  argTypes: {
    maxLines: {
      type: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chips>;

const chips = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export const Demo: Story = {
  render: (args, context) => {
    return (
      <Chips key={args.maxLines} sx={{ maxWidth: '600px' }} {...args}>
        {chips.map((chip) => (
          <Chip {...args} key={chip}>
            {context.globals.locale === 'ru' ? 'Иванов Иван' : 'John Doe'} {chip}
          </Chip>
        ))}
      </Chips>
    );
  },
};
