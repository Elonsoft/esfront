import { Meta, StoryContext, StoryObj } from '@storybook/react-vite';

import { NoSsr } from './NoSsr';

const getFallbackText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'ru' ? 'Содержимое с сервера' : 'Content from the server';
};

const getChildrenText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'ru' ? 'Содержимое из браузера' : 'Content from the browser';
};

const meta: Meta<typeof NoSsr> = {
  tags: ['autodocs'],
  component: NoSsr,
  parameters: {
    references: ['NoSsr'],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    fallback: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    defer: false,
  },
};

export default meta;

type Story = StoryObj<typeof NoSsr>;

export const Demo: Story = {
  render: function Render(args, context) {
    return (
      <NoSsr {...args} fallback={<div className="body100">{getFallbackText(context)}</div>}>
        <div className="body100">{getChildrenText(context)}</div>
      </NoSsr>
    );
  },
};
