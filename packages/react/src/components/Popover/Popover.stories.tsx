import { useState } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react-vite';

import { Popover } from './Popover';

import { Button } from '../Button';

const getText = (context: StoryContext<unknown>, en: string, ru: string) => {
  return context.globals.locale === 'en' ? en : ru;
};

const meta: Meta<typeof Popover> = {
  tags: ['autodocs'],
  component: Popover,
  parameters: {
    references: ['Popover'],
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

type Story = StoryObj<typeof Popover>;

export const Demo: Story = {
  render: function Render(args, context) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const onClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button color="primary" variant="contained" onClick={onClick}>
          {getText(context, 'Open', 'Открыть')}
        </Button>
        <Popover
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          {...args}
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={onClose}
        >
          <div style={{ color: 'var(--es-mono-a-a900)', maxWidth: '240px', padding: '16px' }}>
            {getText(context, 'The content of the popover.', 'Содержимое всплывающего окна.')}
          </div>
        </Popover>
      </div>
    );
  },
};
