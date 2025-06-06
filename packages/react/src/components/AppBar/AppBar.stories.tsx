import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material-pigment-css/Box';

import { AppBar } from '.';

import { IconArrowLeftW500, IconCheckW500 } from '../../icons';
import { Button } from '../Button';

const meta: Meta<typeof AppBar> = {
  tags: ['autodocs'],
  component: AppBar,
  parameters: {
    references: ['AppBar'],
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    startAdornment: {
      control: {
        type: 'boolean',
      },
    },
    endAdornment: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    startAdornment: true,
    endAdornment: true,
  },
};

export default meta;

type Story = StoryObj<typeof AppBar>;

export const Demo: Story = {
  render: ({ startAdornment, endAdornment, children, ...args }, context) => {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';

    return (
      <Box margin="-1rem">
        <AppBar
          {...args}
          endAdornment={
            endAdornment ? (
              <Button color="tertiary" size="500">
                <IconCheckW500 />
              </Button>
            ) : null
          }
          startAdornment={
            startAdornment ? (
              <Button color="tertiary" size="500">
                <IconArrowLeftW500 />
              </Button>
            ) : null
          }
        >
          {children || (locale === 'en' ? 'Schedule' : 'Расписание')}
        </AppBar>
        <Box height="150vh" />
      </Box>
    );
  },
};
