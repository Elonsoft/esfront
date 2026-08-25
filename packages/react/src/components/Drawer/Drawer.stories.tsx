import { useState } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react-vite';

import { Drawer } from './Drawer';

import { Button } from '../Button';
import { DialogContent, DialogTitle } from '../Dialog';

const getOpenButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Open' : 'Открыть';
};

const getToggleButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Toggle' : 'Переключить';
};

const getHeadingText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Heading' : 'Заголовок';
};

const TEXT = `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`;

const meta: Meta<typeof Drawer> = {
  tags: ['autodocs'],
  component: Drawer,
  parameters: {
    references: ['Drawer'],
  },
  argTypes: {
    anchor: {
      options: ['left', 'top', 'right', 'bottom'],
      control: { type: 'select' },
    },
    variant: {
      options: ['temporary', 'persistent'],
      control: { type: 'select' },
    },
    hideBackdrop: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
  args: {
    anchor: 'right',
    variant: 'temporary',
    hideBackdrop: false,
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

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
      <>
        <Button color="primary" variant="contained" onClick={onOpen}>
          {getOpenButtonText(context)}
        </Button>
        <Drawer {...args} open={isOpen} slotProps={{ paper: { style: { width: 320 } } }} onClose={onClose}>
          <DialogTitle sticky>{getHeadingText(context)}</DialogTitle>
          <DialogContent>
            <div className="body200">{TEXT}</div>
          </DialogContent>
        </Drawer>
      </>
    );
  },
};

/**
 * A `persistent` drawer stays in the document flow, so it can be laid out next to the page content without any
 * additional positioning.
 */
export const Persistent: Story = {
  args: {
    variant: 'persistent',
  },
  render: function Render(args, context) {
    const [isOpen, setOpen] = useState(true);

    const onToggle = () => {
      setOpen((isOpen) => !isOpen);
    };

    return (
      <div style={{ display: 'flex', height: 400, margin: '-16px', overflowX: 'hidden' }}>
        <div style={{ flexGrow: 1, padding: 16 }}>
          <Button className="mb-16" color="primary" variant="contained" onClick={onToggle}>
            {getToggleButtonText(context)}
          </Button>
          <div className="body200">{TEXT}</div>
        </div>
        <Drawer {...args} open={isOpen} slotProps={{ paper: { style: { width: 320 } } }}>
          <DialogTitle sticky>{getHeadingText(context)}</DialogTitle>
          <DialogContent>
            <div className="body200">{TEXT}</div>
          </DialogContent>
        </Drawer>
      </div>
    );
  },
};
