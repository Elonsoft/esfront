import { Meta, StoryContext, StoryObj } from '@storybook/react';

import { ClickAwayListener } from '@mui/material';

// import Tooltip from '@mui/material/Tooltip';
import { InformationIcon } from './InformationIcon';

import { useBoolean } from '../../hooks';
import { Tooltip } from '../Tooltip';

const getTooltipText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Tooltip' : 'Подсказка';
};

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
    activeIconMapping: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InformationIcon>;

export const Demo: Story = {
  render: (args, context) => {
    const [open, toggleOpen] = useBoolean(false);

    return (
      <div
        style={{
          paddingTop: '40px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <Tooltip disableInteractive enterTouchDelay={0} placement="top-start" title={getTooltipText(context)}>
          <InformationIcon variant={args.variant} />
        </Tooltip>

        <ClickAwayListener onClickAway={() => toggleOpen(false)}>
          <Tooltip
            describeChild
            disableFocusListener
            disableHoverListener
            disableInteractive
            disableTouchListener
            open={open}
            placement="top"
            title={getTooltipText(context)}
            onClose={() => toggleOpen(false)}
          >
            <InformationIcon component="button" variant={args.variant} onClick={() => toggleOpen(true)} />
          </Tooltip>
        </ClickAwayListener>
      </div>
    );
  },
};
