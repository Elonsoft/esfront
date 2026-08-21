import { useState } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react-vite';

import { Zoom } from './Zoom';

import { Button } from '../Button';

const getToggleButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Toggle' : 'Переключить';
};

const meta: Meta<typeof Zoom> = {
  tags: ['autodocs'],
  component: Zoom,
  parameters: {
    references: ['Zoom'],
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
  },
};

export default meta;

type Story = StoryObj<typeof Zoom>;

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
        <Zoom {...args} in={isVisible}>
          <div style={{ backgroundColor: 'var(--es-primary-500)', height: '120px', width: '120px' }} />
        </Zoom>
      </div>
    );
  },
};
