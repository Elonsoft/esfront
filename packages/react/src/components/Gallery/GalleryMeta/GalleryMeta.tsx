import { GalleryMetaProps } from './GalleryMeta.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { IconArrowLeftLineW500 } from '../../../icons';
import { useGalleryContext } from '../Gallery.context';
import { GalleryActionsButton } from '../GalleryActionsButton';
import { GalleryTooltip } from '../GalleryTooltip';

export const GalleryMeta = (inProps: GalleryMetaProps) => {
  const {
    children,
    className,
    style,
    labelClose,
    iconClose = <IconArrowLeftLineW500 />,
  } = useDefaultProps({
    props: inProps,
    name: 'ESGalleryMeta',
  });

  const { onClose } = useGalleryContext();

  return (
    <div className={clsx('es-gallery-meta', className)} style={style}>
      <GalleryTooltip arrow color="white-a600" distance={8} title={labelClose || ''}>
        <GalleryActionsButton
          aria-label={labelClose}
          className="es-gallery-meta__button-close"
          size="500"
          onClick={onClose}
        >
          {iconClose}
        </GalleryActionsButton>
      </GalleryTooltip>
      <div className="es-gallery-meta__content">{children}</div>
    </div>
  );
};
