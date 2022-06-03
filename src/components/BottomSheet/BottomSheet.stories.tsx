import { useState } from 'react';

import { BottomSheetProps } from './BottomSheet.types';

import { Args, ReactFramework, Story, StoryContext } from '@storybook/react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { BottomSheet } from './BottomSheet';

import { DialogActions, DialogContent, DialogTitle } from '../Dialog';

const getOpenButtonText = (args: Args, context: StoryContext<ReactFramework>) => {
  return context.globals.locale === 'en' ? 'Open' : 'Открыть';
};

const getHeadingText = (args: Args, context: StoryContext<ReactFramework>) => {
  return context.globals.locale === 'en' ? 'Heading' : 'Заголовок';
};

const getCancelButtonText = (args: Args, context: StoryContext<ReactFramework>) => {
  return context.globals.locale === 'en' ? 'Cancel' : 'Отмена';
};

const getCreateButtonText = (args: Args, context: StoryContext<ReactFramework>) => {
  return context.globals.locale === 'en' ? 'Create' : 'Создать';
};

export const Demo: Story<BottomSheetProps> = (args, context) => {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={onOpen}>
        {getOpenButtonText(args, context)}
      </Button>
      <BottomSheet {...args} open={isOpen} onClose={onClose}>
        <DialogTitle sticky={true}>{getHeadingText(args, context)}</DialogTitle>
        <DialogContent>
          <Typography variant="body200">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam.
          </Typography>
        </DialogContent>
        <DialogActions sticky={true}>
          <Button fullWidth color="monoA" size="40" variant="outlined" onClick={onClose}>
            {getCancelButtonText(args, context)}
          </Button>
          <Button fullWidth color="primary" size="40" variant="contained">
            {getCreateButtonText(args, context)}
          </Button>
        </DialogActions>
      </BottomSheet>
    </>
  );
};
