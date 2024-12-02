import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { ClickAwayListener, Tooltip } from '@mui/material';

import { InformationIcon } from './InformationIcon';

const meta: Meta<typeof InformationIcon> = {
  tags: ['autodocs'],
  component: InformationIcon,
  parameters: {
    references: ['InformationIcon'],
  },
  argTypes: {
    variant: {
      options: ['info', 'question'],
      control: { type: 'select' },
    },
    className: {
      table: {
        disable: true,
      },
    },
    classes: {
      table: {
        disable: true,
      },
    },
    sx: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    SvgIconProps: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InformationIcon>;

export const Demo: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
      setOpen(false);
    };

    const handleTooltipOpen = () => {
      setOpen(true);
    };

    return (
      <div
        style={{
          paddingTop: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <Tooltip
          arrow
          disableFocusListener
          disableTouchListener
          placement="bottom"
          title="Cras mattis consectetur purus sit amet fermentum."
        >
          <InformationIcon variant={args.variant} onClick={handleTooltipOpen} />
        </Tooltip>

        <ClickAwayListener touchEvent="onTouchEnd" onClickAway={handleTooltipClose}>
          <Tooltip
            arrow
            disableFocusListener
            disableTouchListener
            open={open}
            placement="right"
            title="Cras mattis consectetur purus sit amet fermentum."
            onClose={handleTooltipClose}
          >
            <InformationIcon isActive={open} variant={args.variant} onClick={handleTooltipOpen} />
          </Tooltip>
        </ClickAwayListener>
      </div>
    );
  },
};
