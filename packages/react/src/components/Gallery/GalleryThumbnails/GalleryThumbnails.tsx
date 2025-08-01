import { ReactNode, useEffect, useRef } from 'react';

import { GalleryThumbnailsProps } from './GalleryThumbnails.types';

import clsx from 'clsx';
import { getGalleryThumbnailsUtilityClass } from './GalleryThumbnails.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

import { useGalleryThumbnailsContext } from './GalleryThumbnails.context';

import { useForkRef } from '../../../hooks';
import { IconChevronLeftW400, IconChevronRightW400 } from '../../../icons';
import { Button, buttonClasses } from '../../Button';
import { Swiper, SwiperImperativeActions, useSwiperContext } from '../../Swiper';
import { touchRippleClasses } from '../../TouchRipple';
import { useGalleryContext } from '../Gallery.context';
import { useGallerySwiperContext } from '../GallerySwiper';
import { GalleryThumbnailsItem } from '../GalleryThumbnailsItem';

type GalleryThumbnailsOwnerState = {
  classes?: GalleryThumbnailsProps['classes'];
};

const useUtilityClasses = (ownerState: GalleryThumbnailsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    swiper: ['swiper'],
  };

  return composeClasses(slots, getGalleryThumbnailsUtilityClass, classes);
};

const GalleryThumbnailsRoot = styled('div', {
  name: 'ESGalleryThumbnails',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  display: 'none',
  paddingBottom: '16px',

  [theme.breakpoints.up('tabletXS')]: {
    paddingTop: '8px',
  },

  '@media (min-height: 450px)': {
    display: 'block',
  },
}));

const GalleryThumbnailsSwiper = styled(Swiper, {
  name: 'ESGalleryThumbnails',
  slot: 'Swiper',
  overridesResolver: (props, styles) => styles.swiper,
})({
  '& .ESSwiper-container': {
    '&::before, &::after': {
      content: '""',
      display: 'block',
      width: 8,
    },
  },
  '& .ESSwiperButton-root': {
    zIndex: 1,
  },
});

const GalleryThumbnailsButton = styled('div')<{ ownerState: { prev?: boolean; next?: boolean } }>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: 4,
  zIndex: 4,
  position: 'absolute',
  height: '100%',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',

  '&:hover': {
    [`& .${touchRippleClasses.root}`]: {
      backgroundColor: theme.vars.palette.black.A50,
    },
  },

  [`& .${buttonClasses.root}.${buttonClasses.variantText}.${buttonClasses.colorTertiary}`]: {
    backdropFilter: 'blur(10px)',
    borderRadius: '50%',

    '--background': theme.vars.palette.white.A600,
    '--icon': theme.vars.palette.black[500],
    '--hovered': theme.vars.palette.black.A50,
    '--pressed': theme.vars.palette.black.A150,
  },

  variants: [
    {
      props: {
        prev: true,
      },
      style: {
        left: 0,
        paddingLeft: 8,
      },
    },
    {
      props: {
        next: true,
      },
      style: {
        right: 0,
        paddingRight: 8,
      },
    },
  ] as never,
}));

const GalleryThumbnailsButtonPrev = ({ icon, label }: { icon: ReactNode; label?: string }) => {
  const { active, setActiveSlide } = useSwiperContext();

  const onPointerDown = (event: React.PointerEvent) => {
    event.stopPropagation();
  };

  const onClick = () => {
    setActiveSlide(active - 1);
  };

  return (
    <GalleryThumbnailsButton ownerState={{ prev: true }} onClick={onClick} onPointerDown={onPointerDown}>
      <Button aria-label={label} size="400">
        {icon}
      </Button>
    </GalleryThumbnailsButton>
  );
};

const GalleryThumbnailsButtonNext = ({ icon, label }: { icon: ReactNode; label?: string }) => {
  const { active, setActiveSlide } = useSwiperContext();

  const onPointerDown = (event: React.PointerEvent) => {
    event.stopPropagation();
  };

  const onClick = () => {
    setActiveSlide(active + 1);
  };

  return (
    <GalleryThumbnailsButton ownerState={{ next: true }} onClick={onClick} onPointerDown={onPointerDown}>
      <Button aria-label={label} size="400">
        {icon}
      </Button>
    </GalleryThumbnailsButton>
  );
};

export const GalleryThumbnails = (inProps: GalleryThumbnailsProps) => {
  const {
    children,
    className,
    sx,
    SwiperProps,
    labelNext,
    labelPrev,
    iconNext = <IconChevronRightW400 />,
    iconPrev = <IconChevronLeftW400 />,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESGalleryThumbnails',
  });

  const { items, item } = useGalleryContext();
  const { actions: swiperActions } = useGallerySwiperContext();
  const { isVisible, setVisible } = useGalleryThumbnailsContext();

  const actions = useRef<SwiperImperativeActions>(null);
  const isClicked = useRef(false);

  useEffect(() => {
    if (!isClicked.current) {
      actions.current?.setActiveSlide(item);
    }

    isClicked.current = false;
  }, [item]);

  const onClick = (i: number) => () => {
    if (i !== item) {
      isClicked.current = true;
      setVisible(false);
      swiperActions?.setActiveSlide(i, { smooth: false });
    }
  };

  const actionsRef = useForkRef(actions, SwiperProps?.actions);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GalleryThumbnailsRoot
      className={clsx(classes.root, className)}
      style={{ display: isVisible ? 'block' : '' }}
      sx={sx}
    >
      <GalleryThumbnailsSwiper
        draggable
        buttonNext={<GalleryThumbnailsButtonNext icon={iconNext} label={labelNext} />}
        buttonPrev={<GalleryThumbnailsButtonPrev icon={iconPrev} label={labelPrev} />}
        className={classes.swiper}
        gap={8}
        {...SwiperProps}
        actions={actionsRef}
      >
        {items.map((i, index) => (
          <GalleryThumbnailsItem key={i.id} isActive={index === item} onClick={onClick(index)}>
            {children(i, index)}
          </GalleryThumbnailsItem>
        ))}
      </GalleryThumbnailsSwiper>
    </GalleryThumbnailsRoot>
  );
};
