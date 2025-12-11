import { ReactNode } from 'react';

import { GallerySwiperProps } from './GallerySwiper.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useGallerySwiperContext } from './GallerySwiper.context';

import { useForkRef } from '../../../hooks';
import { IconChevronLeftLineW400, IconChevronRightLineW400 } from '../../../icons';
import { Button } from '../../Button';
import { Swiper, useSwiperContext } from '../../Swiper';
import { useGalleryContext } from '../Gallery.context';
import { useGalleryPanelsContext } from '../GalleryPanel';
import { GalleryTooltip } from '../GalleryTooltip';

import { useDrag } from '@use-gesture/react';

const GallerySwiperButtonPrev = ({ icon, label }: { icon: ReactNode; label?: string }) => {
  const onPointerDown = (event: React.PointerEvent) => {
    event.stopPropagation();
  };

  const { active, setActiveSlide } = useSwiperContext();

  const onClick = () => {
    setActiveSlide(active - 1, { smooth: false });
  };

  return (
    <GalleryTooltip color="white-a600" distance={0} placement="right" title={label || ''}>
      <div
        className="es-gallery-swiper__button es-gallery-swiper__button--prev"
        onClick={onClick}
        onPointerDown={onPointerDown}
      >
        <Button aria-label={label}>{icon}</Button>
      </div>
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
    <GalleryTooltip color="white-a600" distance={0} placement="left" title={label || ''}>
      <div
        className="es-gallery-swiper__button es-gallery-swiper__button--next"
        onClick={onClick}
        onPointerDown={onPointerDown}
      >
        <Button aria-label={label}>{icon}</Button>
      </div>
    </GalleryTooltip>
  );
};

export const GallerySwiper = (inProps: GallerySwiperProps) => {
  const {
    children,
    className,
    style,
    SwiperProps,
    labelNext,
    labelPrev,
    iconNext = <IconChevronRightLineW400 />,
    iconPrev = <IconChevronLeftLineW400 />,
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

  return (
    <div className={clsx('es-gallery-swiper', className)} style={style} {...bind()}>
      <Swiper
        snap
        buttonNext={<GallerySwiperButtonNext icon={iconNext} label={labelNext} />}
        buttonPrev={<GallerySwiperButtonPrev icon={iconPrev} label={labelPrev} />}
        className="es-gallery-swiper__swiper"
        gap={16}
        snapStop="always"
        onActiveSlideChange={onActiveSlideChange}
        {...SwiperProps}
        actions={actionsRef}
      >
        {items.map((i, index) => children(i, index))}
      </Swiper>
    </div>
  );
};
