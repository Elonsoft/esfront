import { useState } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react-vite';

import { Drawer } from './Drawer';

import { Button } from '../Button';
import { DialogContent, DialogTitle } from '../Dialog';

const getToggleButtonText = (context: StoryContext<unknown>, open: boolean) => {
  if (context.globals.locale === 'en') {
    return open ? 'Close' : 'Open';
  }

  return open ? 'Закрыть' : 'Открыть';
};

const getHeadingText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Heading' : 'Заголовок';
};

const meta: Meta<typeof Drawer> = {
  tags: ['autodocs'],
  component: Drawer,
  parameters: {
    references: ['Drawer'],
  },
  argTypes: {
    anchor: {
      options: ['left', 'right'],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['temporary', 'persistent', 'permanent'],
      control: { type: 'inline-radio' },
    },
    width: {
      control: { type: 'text' },
    },
    hideBackdrop: {
      control: { type: 'boolean' },
    },
  },
  args: {
    anchor: 'right',
    variant: 'temporary',
    width: '400px',
    hideBackdrop: false,
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Demo: Story = {
  render: function Render(args, context) {
    const [isOpen, setOpen] = useState(false);

    const onToggle = () => {
      setOpen((isOpen) => !isOpen);
    };

    const onClose = () => {
      setOpen(false);
    };

    const drawer = (
      <Drawer {...args} open={isOpen} onClose={onClose}>
        <DialogTitle sticky>{getHeadingText(context)}</DialogTitle>
        <DialogContent>
          <div className="body200">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </div>
        </DialogContent>
      </Drawer>
    );

    return (
      <div style={{ display: 'flex', height: 400 }}>
        {args.anchor === 'left' && drawer}
        <div style={{ flexGrow: 1, minWidth: 0, padding: 16 }}>
          <Button color="primary" variant="contained" onClick={onToggle}>
            {getToggleButtonText(context, isOpen)}
          </Button>
        </div>
        {args.anchor === 'right' && drawer}
      </div>
    );
  },
};
