import { useState } from 'react';
import { Story, Args, StoryContext } from '@storybook/react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

import { DialogClose } from './DialogClose';

const getOpenButtonText = (args: Args, context: StoryContext) => {
  return context.globals.locale === 'en' ? 'Open dialog window' : 'Открыть диалоговое окно';
};

const getHeadingText = (args: Args, context: StoryContext) => {
  return context.globals.locale === 'en' ? 'Heading' : 'Заголовок';
};

const getCancelButtonText = (args: Args, context: StoryContext) => {
  return context.globals.locale === 'en' ? 'Cancel' : 'Отмена';
};

const getCreateButtonText = (args: Args, context: StoryContext) => {
  return context.globals.locale === 'en' ? 'Create' : 'Создать';
};

export const Demo: Story = (args, context) => {
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
      <Dialog open={isOpen} onClose={onClose} scroll="body">
        <DialogTitle>
          {getHeadingText(args, context)}
          <DialogClose {...args} onClick={onClose} />
        </DialogTitle>
        <DialogContent>
          <Typography variant="body200">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="inherit" size="lg" onClick={onClose}>
            {getCancelButtonText(args, context)}
          </Button>
          <Button variant="contained" color="primary" size="lg" autoFocus onClick={onClose}>
            {getCreateButtonText(args, context)}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
