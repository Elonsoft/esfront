import { GalleryMetaProps } from './GalleryMeta.types';

import clsx from 'clsx';
import { getGalleryMetaUtilityClass } from './GalleryMeta.classes';

import { styled } from '@mui/material-pigment-css';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

import { IconArrowLeftW500 } from '../../../icons';
import { useGalleryContext } from '../Gallery.context';
import { GalleryActionsButton } from '../GalleryActionsButton';
import { GalleryTooltip } from '../GalleryTooltip';

type GalleryMetaOwnerState = {
  classes?: GalleryMetaProps['classes'];
};

const useUtilityClasses = (ownerState: GalleryMetaOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    content: ['content'],
    buttonClose: ['buttonClose'],
  };

  return composeClasses(slots, getGalleryMetaUtilityClass, classes);
};

const GalleryMetaRoot = styled('div', {
  name: 'ESGalleryMeta',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  minWidth: 0,
  padding: '8px',
  paddingRight: 0,
  display: 'flex',
  alignItems: 'center',

  [theme.breakpoints.up('tabletXS')]: {
    padding: '16px',
    paddingRight: 0,
  },
}));

const GalleryMetaContent = styled('div', {
  name: 'ESGalleryMeta',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content,
})(() => ({
  whiteSpace: 'nowrap',
  '&, & *': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

const GalleryMetaButtonClose = styled(GalleryActionsButton, {
  name: 'ESGalleryMeta',
  slot: 'ButtonClose',
  overridesResolver: (props, styles) => styles.buttonClose,
})(({ theme }) => ({
  flexShrink: 0,
  marginRight: 8,

  [theme.breakpoints.up('tabletXS')]: {
    display: 'none',
  },
}));

export const GalleryMeta = (inProps: GalleryMetaProps) => {
  const {
    children,
    className,
    sx,
    labelClose,
    iconClose = <IconArrowLeftW500 />,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESGalleryMeta',
  });

  const { onClose } = useGalleryContext();

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GalleryMetaRoot className={clsx(classes.root, className)} sx={sx}>
      <GalleryTooltip arrow color="whiteA600" distance={8} title={labelClose || ''}>
        <GalleryMetaButtonClose aria-label={labelClose} className={classes.buttonClose} size="500" onClick={onClose}>
          {iconClose}
        </GalleryMetaButtonClose>
      </GalleryTooltip>
      <GalleryMetaContent className={classes.content}>{children}</GalleryMetaContent>
    </GalleryMetaRoot>
  );
};
