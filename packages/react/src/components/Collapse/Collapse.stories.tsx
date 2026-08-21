import { useState } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react-vite';

import { Collapse } from './Collapse';

import { Button } from '../Button';

const getToggleButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Toggle' : 'Переключить';
};

const meta: Meta<typeof Collapse> = {
  tags: ['autodocs'],
  component: Collapse,
  parameters: {
    references: ['Collapse'],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    in: {
      table: {
        disable: true,
      },
    },
    orientation: {
      options: ['vertical', 'horizontal'],
      control: { type: 'select' },
    },
  },
  args: {
    orientation: 'vertical',
  },
};

export default meta;

type Story = StoryObj<typeof Collapse>;

export const Demo: Story = {
  render: function Render(args, context) {
    const [isVisible, setVisible] = useState(true);

    const onToggle = () => {
      setVisible((value) => !value);
    };

    return (
      <div style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Button color="primary" variant="contained" onClick={onToggle}>
          {getToggleButtonText(context)}
        </Button>
        <Collapse {...args} in={isVisible}>
          <div style={{ backgroundColor: 'var(--es-primary-500)', height: '120px', width: '240px' }} />
        </Collapse>
      </div>
    );
  },
};

/** The container keeps the `collapsedSize` visible when the transition is out. */
export const CollapsedSize: Story = {
  args: {
    collapsedSize: 40,
  },
  render: function Render(args, context) {
    const [isVisible, setVisible] = useState(false);

    const onToggle = () => {
      setVisible((value) => !value);
    };

    return (
      <div style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Button color="primary" variant="contained" onClick={onToggle}>
          {getToggleButtonText(context)}
        </Button>
        <Collapse {...args} in={isVisible}>
          <div style={{ backgroundColor: 'var(--es-primary-500)', height: '120px', width: '240px' }} />
        </Collapse>
      </div>
    );
  },
};
