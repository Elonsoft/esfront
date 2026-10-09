import { ComponentProps } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react-vite';

import { ConfirmationDialog } from './ConfirmationDialog';

import { Button } from '../Button';
import { useDialogStackV2 } from '../DialogStackV2';

const getOpenButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Open dialog window' : 'Открыть диалоговое окно';
};

const getHeadingText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Close without saving?' : 'Закрыть без сохранения?';
};

const getContentText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en'
    ? 'The changes you have made will not be saved'
    : 'Внесённые изменения не сохранятся';
};

const getCancelButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Cancel' : 'Отменить';
};

const getConfirmButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Close' : 'Закрыть';
};

const getCloseText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Close' : 'Закрыть';
};

type Args = ComponentProps<typeof ConfirmationDialog>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: ConfirmationDialog,
  parameters: {
    references: ['ConfirmationDialog', 'DialogStack'],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    action: {
      table: {
        disable: true,
      },
    },
    close: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    open: {
      table: {
        disable: true,
      },
    },
    BackdropProps: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    severity: 'error',
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<Args>;

export const Demo: Story = {
  render: function Render(args, context) {
    const dialogStack = useDialogStackV2();

    const onOpen = () => {
      dialogStack
        .open(({ close }) => (
          <ConfirmationDialog
            {...args}
            action={() =>
              new Promise((resolve) => {
                setTimeout(() => resolve(true), 1000);
              })
            }
            close={close}
            labelCancel={getCancelButtonText(context)}
            labelClose={getCloseText(context)}
            labelConfirm={getConfirmButtonText(context)}
            labelEscapeKey="Esc"
            title={getHeadingText(context)}
          >
            {getContentText(context)}
          </ConfirmationDialog>
        ))
        .afterClosed.then((data) => {
          console.info(data);
        });
    };

    return (
      <Button color="primary" variant="contained" onClick={onOpen}>
        {getOpenButtonText(context)}
      </Button>
    );
  },
};
