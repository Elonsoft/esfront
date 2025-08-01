import { Meta, StoryObj } from '@storybook/react';

import { Divider } from '.';

const meta: Meta<typeof Divider> = {
  tags: ['autodocs'],
  component: Divider,
  parameters: {
    references: ['Divider'],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    color: {
      table: {
        disable: true,
      },
    },
    flexItem: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Demo: Story = {
  render: (args) => {
    return (
      <div sx={{ height: '200px', width: '200px' }}>
        <Divider {...args} />
      </div>
    );
  },
};

/** We can pass child text inside the divider. */
export const WithText: Story = {
  render: (args, context) => {
    return (
      <div sx={{ height: '200px', width: '200px' }}>
        <Divider {...args}>{context.globals.locale === 'en' ? 'Text' : 'Текст'}</Divider>
      </div>
    );
  },
};
