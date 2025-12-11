import { ComponentProps } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react';

import { Tooltip } from '.';

import { Button } from '../Button';

type Args = ComponentProps<typeof Tooltip>;

const getTooltipText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Tooltip' : 'Подсказка';
};

const getButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Button' : 'Кнопка';
};

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Tooltip,
  parameters: {
    references: ['Tooltip'],
  },
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    arrowIconMapping: {
      table: {
        disable: true,
      },
    },
    describeChild: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    PopperComponent: {
      table: {
        disable: true,
      },
    },
    PopperProps: {
      table: {
        disable: true,
      },
    },
    slots: {
      table: {
        disable: true,
      },
    },
    slotProps: {
      table: {
        disable: true,
      },
    },
    TransitionComponent: {
      table: {
        disable: true,
      },
    },
    TransitionProps: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<Args>;

export const Demo: Story = {
  render: function Render(args, context) {
    const isLightColor = args.color === 'mono-b' || args.color === 'mono-b-a600' || args.color === 'white-a600';
    const backgroundColor = isLightColor ? 'var(--es-mono-a-a400)' : undefined;

    return (
      <div
        style={{
          width: '100%',
          padding: '120px 40px',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor,
        }}
      >
        <Tooltip {...args} title={args.title || getTooltipText(context)}>
          <Button color="primary" variant="contained">
            {getButtonText(context)}
          </Button>
        </Tooltip>
      </div>
    );
  },
};
