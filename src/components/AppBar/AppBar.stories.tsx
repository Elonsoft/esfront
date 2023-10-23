import { Story } from '@storybook/react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { AppBar } from '.';

import { IconArrowLeftW500, IconCheckW500 } from '../../icons';

export const Demo: Story = ({ startAdornment, endAdornment, children, ...args }, context) => {
  const locale = (context.globals.locale || 'en') as 'en' | 'ru';

  return (
    <Box margin="-1rem">
      <AppBar
        {...args}
        endAdornment={
          endAdornment ? (
            <Button color="tertiary" size="40">
              <IconCheckW500 />
            </Button>
          ) : null
        }
        startAdornment={
          startAdornment ? (
            <Button color="tertiary" size="40">
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
};
