import { useState } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react-vite';

import { Backdrop } from './Backdrop';

import { Button } from '../Button';

const getToggleButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Show' : 'Показать';
};

const meta: Meta<typeof Backdrop> = {
  tags: ['autodocs'],
  component: Backdrop,
  parameters: {
    references: ['Backdrop'],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    open: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Backdrop>;

export const Demo: Story = {
  render: function Render(args, context) {
    const [isOpen, setOpen] = useState(false);

    const onOpen = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <div style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Button color="primary" variant="contained" onClick={onOpen}>
          {getToggleButtonText(context)}
        </Button>
        <Backdrop {...args} open={isOpen} style={{ zIndex: 1300 }} onClick={onClose} />
      </div>
    );
  },
};
