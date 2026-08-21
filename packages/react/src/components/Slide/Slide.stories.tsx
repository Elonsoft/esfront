import { useState } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react-vite';

import { Slide } from './Slide';

import { Button } from '../Button';

const getToggleButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Toggle' : 'Переключить';
};

const meta: Meta<typeof Slide> = {
  tags: ['autodocs'],
  component: Slide,
  parameters: {
    references: ['Slide'],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    container: {
      table: {
        disable: true,
      },
    },
    in: {
      table: {
        disable: true,
      },
    },
    direction: {
      options: ['up', 'down', 'left', 'right'],
      control: { type: 'select' },
    },
  },
  args: {
    direction: 'up',
  },
};

export default meta;

type Story = StoryObj<typeof Slide>;

/** The child slides in from the edge of the `container`. Without a container it slides in from the edge of the screen. */
export const Demo: Story = {
  render: function Render(args, context) {
    const [isVisible, setVisible] = useState(true);
    const [container, setContainer] = useState<HTMLDivElement | null>(null);

    const onToggle = () => {
      setVisible((value) => !value);
    };

    return (
      <div style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Button color="primary" variant="contained" onClick={onToggle}>
          {getToggleButtonText(context)}
        </Button>
        <div
          ref={setContainer}
          style={{ border: '1px solid var(--es-mono-a-a100)', height: '160px', overflow: 'hidden', width: '240px' }}
        >
          <Slide {...args} container={container} in={isVisible}>
            <div style={{ backgroundColor: 'var(--es-primary-500)', height: '100%', width: '100%' }} />
          </Slide>
        </div>
      </div>
    );
  },
};
