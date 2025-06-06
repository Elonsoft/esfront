import { useMemo, useRef, useState } from 'react';

import { GalleryProps } from './Gallery.types';

import clsx from 'clsx';
import { getGalleryUtilityClass } from './Gallery.classes';

import { duration } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { backdropClasses, Fade, Modal } from '@mui/material';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

import { GalleryContext } from './Gallery.context';
import { GalleryPanelsProvider } from './GalleryPanel';
import { GallerySwiperProvider } from './GallerySwiper';
import { GalleryThumbnailsProvider } from './GalleryThumbnails';

import { useDocumentEventListener } from '../../hooks';

type GalleryOwnerState = {
  classes?: GalleryProps['classes'];
};

const useUtilityClasses = (ownerState: GalleryOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    content: ['content'],
  };

  return composeClasses(slots, getGalleryUtilityClass, classes);
};

const GalleryRoot = styled(Modal, {
  name: 'ESGallery',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  height: '100dvh',

  [`.${backdropClasses.root}`]: {
    backgroundColor: theme.vars.palette.overlay[900],
  },
}));

const GalleryContent = styled('div', {
  name: 'ESGallery',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content,
})({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const transitionDuration = { enter: duration.enteringScreen, exit: duration.leavingScreen };

/*
 * `Gallery` is a component for displaying a fullscreen list of images or any other type of content.
 */
export const Gallery = (inProps: GalleryProps) => {
  const {
    className,
    children,
    items,
    open = true,
    onClose,
    BackdropProps,
    TransitionProps,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESGallery',
  });

  const contentRef = useRef<HTMLDivElement>(null);

  const [item, setItem] = useState(0);

  useDocumentEventListener('keyup', (event) => {
    if (event.key === 'Escape' && onClose) {
      onClose();
    }
  });

  const value = useMemo(() => {
    return {
      items,
      item,
      setItem,
      onClose,
    };
  }, [items, item, setItem, onClose]);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GalleryContext.Provider value={value}>
      <GallerySwiperProvider>
        <GalleryPanelsProvider>
          <GalleryThumbnailsProvider>
            <GalleryRoot
              className={clsx(classes.root, className)}
              open={open}
              slotProps={{ backdrop: BackdropProps }}
              onClose={onClose}
            >
              <Fade appear in={open} role="presentation" timeout={transitionDuration} {...TransitionProps}>
                <GalleryContent ref={contentRef} className={classes.content}>
                  {children}
                </GalleryContent>
              </Fade>
            </GalleryRoot>
          </GalleryThumbnailsProvider>
        </GalleryPanelsProvider>
      </GallerySwiperProvider>
    </GalleryContext.Provider>
  );
};
