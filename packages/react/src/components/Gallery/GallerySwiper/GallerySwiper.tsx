import { ReactNode } from 'react';

import { GallerySwiperProps } from './GallerySwiper.types';

import clsx from 'clsx';
import { getGallerySwiperUtilityClass } from './GallerySwiper.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

import { useGallerySwiperContext } from './GallerySwiper.context';

import { useForkRef } from '../../../hooks';
import { IconChevronLeftLineW400, IconChevronRightLineW400 } from '../../../icons';
import { Button, buttonClasses } from '../../Button';
import { Swiper, useSwiperContext } from '../../Swiper';
import { touchRippleClasses } from '../../TouchRipple';
import { useGalleryContext } from '../Gallery.context';
import { useGalleryPanelsContext } from '../GalleryPanel';
import { GalleryTooltip } from '../GalleryTooltip';

import { useDrag } from '@use-gesture/react';

type GallerySwiperOwnerState = {
  classes?: GallerySwiperProps['classes'];
};

const useUtilityClasses = (ownerState: GallerySwiperOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    swiper: ['swiper'],
  };

  return composeClasses(slots, getGallerySwiperUtilityClass, classes);
};

const GallerySwiperRoot = styled('div', {
  name: 'ESGallerySwiper',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root];
  },
})(() => ({
  flexGrow: 1,
  width: '100%',
  minHeight: 0,
}));

const GallerySwiperSwiper = styled(Swiper, {
  name: 'ESGallerySwiper',
  slot: 'Swiper',
  overridesResolver: (props, styles) => styles.swiper,
})(() => ({
  height: '100%',

  '& .ESSwiper-wrapper': {
    height: '100%',
  },
  '& .ESSwiper-container': {
    gridAutoColumns: '100%',
    height: '100%',
  },
}));

const GallerySwiperButton = styled('div')<{ ownerState: { prev?: boolean; next?: boolean } }>(({ theme }) => ({
  position: 'absolute',
  alignItems: 'center',
  cursor: 'pointer',
  display: 'flex',
  height: '100%',
  top: 0,
  WebkitTapHighlightColor: 'transparent',

  '@media (hover: none)': {
    display: 'none',
  },

  '&:hover': {
    [`& .${touchRippleClasses.root}`]: {
      backgroundColor: theme.vars.palette.white.A50,
    },
  },

  [`& .${buttonClasses.root}.${buttonClasses.variantText}.${buttonClasses.colorTertiary}`]: {
    backdropFilter: 'blur(10px)',
    borderRadius: 4,

    '--background': theme.vars.palette.black.A500,
    '--icon': theme.vars.palette.white[500],
    '--hovered': theme.vars.palette.white.A50,
    '--pressed': theme.vars.palette.white.A150,
  },

  variants: [
    {
      props: {
        prev: true,
      },
      style: {
        justifyContent: 'flex-start',
        left: 0,
        paddingLeft: 24,
        paddingRight: 8,
      },
    },
    {
      props: {
        next: true,
      },
      style: {
        justifyContent: 'flex-end',
        right: 0,
        paddingRight: 24,
        paddingLeft: 8,
      },
    },
  ],
}));

const GallerySwiperButtonPrev = ({ icon, label }: { icon: ReactNode; label?: string }) => {
  const onPointerDown = (event: React.PointerEvent) => {
    event.stopPropagation();
  };

  const { active, setActiveSlide } = useSwiperContext();

  const onClick = () => {
    setActiveSlide(active - 1, { smooth: false });
  };

  return (
    <GalleryTooltip color="whiteA600" distance={0} placement="right" title={label || ''}>
      <GallerySwiperButton ownerState={{ prev: true }} onClick={onClick} onPointerDown={onPointerDown}>
        <Button aria-label={label}>{icon}</Button>
      </GallerySwiperButton>
    </GalleryTooltip>
  );
};

const GallerySwiperButtonNext = ({ icon, label }: { icon: ReactNode; label?: string }) => {
  const onPointerDown = (event: React.PointerEvent) => {
    event.stopPropagation();
  };

  const { active, setActiveSlide } = useSwiperContext();

  const onClick = () => {
    setActiveSlide(active + 1, { smooth: false });
  };

  return (
    <GalleryTooltip distance={0} placement="left" title={label || ''}>
      <GallerySwiperButton ownerState={{ next: true }} onClick={onClick} onPointerDown={onPointerDown}>
        <Button aria-label={label}>{icon}</Button>
      </GallerySwiperButton>
    </GalleryTooltip>
  );
};

export const GallerySwiper = (inProps: GallerySwiperProps) => {
  const {
    children,
    className,
    sx,
    SwiperProps,
    labelNext,
    labelPrev,
    iconNext = <IconChevronRightLineW400 />,
    iconPrev = <IconChevronLeftLineW400 />,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESGallerySwiper',
  });

  const { items, setItem } = useGalleryContext();
  const { setVisible } = useGalleryPanelsContext();
  const { setActions } = useGallerySwiperContext();

  const bind = useDrag((event) => {
    if (event.tap) {
      setVisible((isVisible) => !isVisible);
    }
  });

  const onActiveSlideChange = (index: number) => {
    setItem(index);
  };

  const actionsRef = useForkRef(setActions, SwiperProps?.actions);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GallerySwiperRoot className={clsx(classes.root, className)} sx={sx} {...bind()}>
      <GallerySwiperSwiper
        snap
        buttonNext={<GallerySwiperButtonNext icon={iconNext} label={labelNext} />}
        buttonPrev={<GallerySwiperButtonPrev icon={iconPrev} label={labelPrev} />}
        className={classes.swiper}
        gap={16}
        snapStop="always"
        onActiveSlideChange={onActiveSlideChange}
        {...SwiperProps}
        actions={actionsRef}
      >
        {items.map((i, index) => children(i, index))}
      </GallerySwiperSwiper>
    </GallerySwiperRoot>
  );
};
