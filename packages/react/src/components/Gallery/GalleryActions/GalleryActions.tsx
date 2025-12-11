import { GalleryActionsProps } from './GalleryActions.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { IconCloseLineW600, IconImageMultipleLineW500 } from '../../../icons';
import { useGalleryContext } from '../Gallery.context';
import { GalleryActionsButton } from '../GalleryActionsButton';
import { useGalleryThumbnailsContext } from '../GalleryThumbnails';
import { GalleryTooltip } from '../GalleryTooltip';

export const GalleryActions = (inProps: GalleryActionsProps) => {
  const {
    children,
    className,
    style,
    labelClose,
    labelThumbnails,
    iconClose = <IconCloseLineW600 />,
    iconThumbnails = <IconImageMultipleLineW500 />,
  } = useDefaultProps({
    props: inProps,
    name: 'ESGalleryActions',
  });

  const { onClose } = useGalleryContext();
  const { setVisible } = useGalleryThumbnailsContext();

  const onThumbnailsClick = () => {
    setVisible((isVisible) => !isVisible);
  };

  return (
    <div className={clsx('es-gallery-actions', className)} style={style}>
      <GalleryTooltip color="white-a600" distance={8} title={labelThumbnails || ''}>
        <GalleryActionsButton
          aria-label={labelThumbnails}
          className="es-gallery-actions__button-thumbnails"
          size="500"
          onClick={onThumbnailsClick}
        >
          {iconThumbnails}
        </GalleryActionsButton>
      </GalleryTooltip>
      {children}
      <GalleryTooltip color="white-a600" distance={8} title={labelClose || ''}>
        <GalleryActionsButton
          aria-label={labelClose}
          className="es-gallery-actions__button-close"
          size="500"
          onClick={onClose}
        >
          {iconClose}
        </GalleryActionsButton>
      </GalleryTooltip>
    </div>
  );
};
