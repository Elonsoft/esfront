import { useState } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react-vite';

import { Fade } from './Fade';

import { Button } from '../Button';

const getToggleButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Toggle' : 'Переключить';
};

const meta: Meta<typeof Fade> = {
  tags: ['autodocs'],
  component: Fade,
  parameters: {
    references: ['Fade'],
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

type Story = StoryObj<typeof Fade>;

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
        <Fade {...args} in={isVisible}>
          <div style={{ backgroundColor: 'var(--es-primary-500)', height: '120px', width: '120px' }} />
        </Fade>
      </div>
    );
  },
};
