import { useState } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react-vite';

import { Modal } from './Modal';

import { Button } from '../Button';
import { Fade } from '../Fade';

const getText = (context: StoryContext<unknown>, en: string, ru: string) => {
  return context.globals.locale === 'en' ? en : ru;
};

const meta: Meta<typeof Modal> = {
  tags: ['autodocs'],
  component: Modal,
  parameters: {
    references: ['Modal'],
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

type Story = StoryObj<typeof Modal>;

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
          {getText(context, 'Open', 'Открыть')}
        </Button>
        <Modal {...args} closeAfterTransition open={isOpen} onClose={onClose}>
          <Fade appear in={isOpen}>
            <div
              style={{
                backgroundColor: 'var(--es-surface-600)',
                borderRadius: '8px',
                boxShadow: 'var(--es-shadow-down-900)',
                color: 'var(--es-mono-a-a900)',
                left: '50%',
                padding: '24px',
                position: 'absolute',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              {getText(
                context,
                'Press escape or click the backdrop to close.',
                'Нажмите escape или на подложку чтобы закрыть.'
              )}
            </div>
          </Fade>
        </Modal>
      </div>
    );
  },
};
