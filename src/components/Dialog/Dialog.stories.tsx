import { useState } from 'react';

import { Args, ReactFramework, Story, StoryContext } from '@storybook/react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Dialog } from './Dialog';
import { DialogActions } from './DialogActions';
import { DialogArrow } from './DialogArrow';
import { DialogClose } from './DialogClose';
import { DialogContent } from './DialogContent';
import { DialogTitle } from './DialogTitle';

const getOpenButtonText = (args: Args, context: StoryContext<ReactFramework>) => {
  return context.globals.locale === 'en' ? 'Open dialog window' : 'Открыть диалоговое окно';
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
      <Dialog
        open={isOpen}
        onClose={onClose}
        fullWidth
        maxWidth="700px"
        align="center"
        before={<DialogClose onClick={onClose} />}
      >
        <DialogArrow direction="prev" />
        <DialogArrow direction="next" />
        <DialogTitle sticky={args.DialogTitleSticky}>{getHeadingText(args, context)}</DialogTitle>
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
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
        </DialogContent>
        <DialogActions sticky={args.DialogActionsSticky}>
          <Button variant="outlined" color="tertiary" size="48" onClick={onClose}>
            {getCancelButtonText(args, context)}
          </Button>
          <Button variant="contained" color="primary" size="48" onClick={onClose}>
            {getCreateButtonText(args, context)}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const Alignment: Story = (args, context) => {
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
      <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="700px" align="flex-start">
        <DialogTitle>{getHeadingText(args, context)}</DialogTitle>
        <DialogContent>
          <Typography variant="body200">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="tertiary" size="48" onClick={onClose}>
            {getCancelButtonText(args, context)}
          </Button>
          <Button variant="contained" color="primary" size="48" onClick={onClose}>
            {getCreateButtonText(args, context)}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
