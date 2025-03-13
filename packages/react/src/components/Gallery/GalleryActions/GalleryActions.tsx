import { GalleryActionsProps } from './GalleryActions.types';

import clsx from 'clsx';
import { getGalleryActionsUtilityClass } from './GalleryActions.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { IconCloseW600, IconImageMultiple } from '../../../icons';
import { useGalleryContext } from '../Gallery.context';
import { GalleryActionsButton } from '../GalleryActionsButton';
import { useGalleryThumbnailsContext } from '../GalleryThumbnails';
import { GalleryTooltip } from '../GalleryTooltip';

type GalleryActionsOwnerState = {
  classes?: GalleryActionsProps['classes'];
};

const useUtilityClasses = (ownerState: GalleryActionsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    buttonClose: ['buttonClose'],
    buttonThumbnails: ['buttonThumbnails'],
  };

  return composeClasses(slots, getGalleryActionsUtilityClass, classes);
};

const GalleryActionsRoot = styled('div', {
  name: 'ESGalleryActions',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '8px',
  gap: '8px',
  marginLeft: 'auto',

  [theme.breakpoints.up('tabletXS')]: {
    padding: '16px',
  },
}));

const GalleryActionsButtonClose = styled(GalleryActionsButton, {
  name: 'ESGalleryActions',
  slot: 'ButtonClose',
  overridesResolver: (props, styles) => styles.buttonClose,
})(({ theme }) => ({
  [theme.breakpoints.down('tabletXS')]: {
    display: 'none',
  },
}));

const GalleryActionsButtonThumbnails = styled(GalleryActionsButton, {
  name: 'ESGalleryActions',
  slot: 'ButtonThumbnails',
  overridesResolver: (props, styles) => styles.buttonThumbnails,
})(() => ({
  '@media (min-height: 450px)': {
    display: 'none',
  },
}));

export const GalleryActions = (inProps: GalleryActionsProps) => {
  const {
    children,
    className,
    sx,
    labelClose,
    labelThumbnails,
    iconClose = <IconCloseW600 />,
    iconThumbnails = <IconImageMultiple />,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESGalleryActions',
  });

  const { onClose } = useGalleryContext();
  const { setVisible } = useGalleryThumbnailsContext();

  const onThumbnailsClick = () => {
    setVisible((isVisible) => !isVisible);
  };

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GalleryActionsRoot className={clsx(classes.root, className)} sx={sx}>
      <GalleryTooltip color="whiteA600" distance={8} title={labelThumbnails || ''}>
        <GalleryActionsButtonThumbnails
          aria-label={labelThumbnails}
          className={clsx(classes.buttonThumbnails)}
          size="500"
          onClick={onThumbnailsClick}
        >
          {iconThumbnails}
        </GalleryActionsButtonThumbnails>
      </GalleryTooltip>
      {children}
      <GalleryTooltip color="whiteA600" distance={8} title={labelClose || ''}>
        <GalleryActionsButtonClose
          aria-label={labelClose}
          className={clsx(classes.buttonClose)}
          size="500"
          onClick={onClose}
        >
          {iconClose}
        </GalleryActionsButtonClose>
      </GalleryTooltip>
    </GalleryActionsRoot>
  );
};
