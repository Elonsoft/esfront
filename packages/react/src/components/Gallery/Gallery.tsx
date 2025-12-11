import { useMemo, useRef, useState } from 'react';

import { GalleryProps } from './Gallery.types';

import clsx from 'clsx';

import { duration } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { Fade, Modal } from '@mui/material';

import { GalleryContext } from './Gallery.context';
import { GalleryPanelsProvider } from './GalleryPanel';
import { GallerySwiperProvider } from './GallerySwiper';
import { GalleryThumbnailsProvider } from './GalleryThumbnails';

import { useDocumentEventListener } from '../../hooks';

const transitionDuration = { enter: duration.enteringScreen, exit: duration.leavingScreen };

/*
 * `Gallery` is a component for displaying a fullscreen list of images or any other type of content.
 */
export const Gallery = (inProps: GalleryProps) => {
  const {
    className,
    style,
    children,
    items,
    open = true,
    onClose,
    BackdropProps,
    TransitionProps,
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

  return (
    <GalleryContext.Provider value={value}>
      <GallerySwiperProvider>
        <GalleryPanelsProvider>
          <GalleryThumbnailsProvider>
            <Modal
              className={clsx('es-gallery', className)}
              open={open}
              slotProps={{ backdrop: BackdropProps }}
              style={style}
              onClose={onClose}
            >
              <Fade appear in={open} role="presentation" timeout={transitionDuration} {...TransitionProps}>
                <div ref={contentRef} className="es-gallery__content">
                  {children}
                </div>
              </Fade>
            </Modal>
          </GalleryThumbnailsProvider>
        </GalleryPanelsProvider>
      </GallerySwiperProvider>
    </GalleryContext.Provider>
  );
};
