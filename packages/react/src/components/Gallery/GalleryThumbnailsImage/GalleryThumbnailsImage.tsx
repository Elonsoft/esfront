import { GalleryThumbnailsImageProps } from './GalleryThumbnailsImage.types';

import clsx from 'clsx';
import { getGalleryThumbnailsImageUtilityClass } from './GalleryThumbnailsImage.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

type GalleryThumbnailsImageOwnerState = {
  classes?: GalleryThumbnailsImageProps['classes'];
};

const useUtilityClasses = (ownerState: GalleryThumbnailsImageOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getGalleryThumbnailsImageUtilityClass, classes);
};

const GalleryThumbnailsImageRoot = styled('img', {
  name: 'ESGalleryThumbnailsImage',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  borderRadius: 6,
  height: 56,
  objectFit: 'cover',
  width: 56,
}));

export const GalleryThumbnailsImage = (inProps: GalleryThumbnailsImageProps) => {
  const { className, src, alt, ...props } = useDefaultProps({
    props: inProps,
    name: 'ESGalleryThumbnailsImage',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return <GalleryThumbnailsImageRoot alt={alt} className={clsx(classes.root, className)} src={src} />;
};
