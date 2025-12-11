import { ReactNode, useEffect, useRef } from 'react';

import { GalleryThumbnailsProps } from './GalleryThumbnails.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useGalleryThumbnailsContext } from './GalleryThumbnails.context';

import { useForkRef } from '../../../hooks';
import { IconChevronLeftLineW400, IconChevronRightLineW400 } from '../../../icons';
import { Button } from '../../Button';
import { Swiper, SwiperImperativeActions, useSwiperContext } from '../../Swiper';
import { useGalleryContext } from '../Gallery.context';
import { useGallerySwiperContext } from '../GallerySwiper';
import { GalleryThumbnailsItem } from '../GalleryThumbnailsItem';

const GalleryThumbnailsButtonPrev = ({ icon, label }: { icon: ReactNode; label?: string }) => {
  const { active, setActiveSlide } = useSwiperContext();

  const onPointerDown = (event: React.PointerEvent) => {
    event.stopPropagation();
  };

  const onClick = () => {
    setActiveSlide(active - 1);
  };

  return (
    <div
      className="es-gallery-thumbnails__button es-gallery-thumbnails__button--prev"
      onClick={onClick}
      onPointerDown={onPointerDown}
    >
      <Button aria-label={label} size="400">
        {icon}
      </Button>
    </div>
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
    <div
      className="es-gallery-thumbnails__button es-gallery-thumbnails__button--next"
      onClick={onClick}
      onPointerDown={onPointerDown}
    >
      <Button aria-label={label} size="400">
        {icon}
      </Button>
    </div>
  );
};

export const GalleryThumbnails = (inProps: GalleryThumbnailsProps) => {
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

  return (
    <div className={clsx('es-gallery-thumbnails', className)} style={{ display: isVisible ? 'block' : '', ...style }}>
      <Swiper
        draggable
        buttonNext={<GalleryThumbnailsButtonNext icon={iconNext} label={labelNext} />}
        buttonPrev={<GalleryThumbnailsButtonPrev icon={iconPrev} label={labelPrev} />}
        className="es-gallery-thumbnails__swiper"
        gap={8}
        {...SwiperProps}
        actions={actionsRef}
      >
        {items.map((i, index) => (
          <GalleryThumbnailsItem key={i.id} isActive={index === item} onClick={onClick(index)}>
            {children(i, index)}
          </GalleryThumbnailsItem>
        ))}
      </Swiper>
    </div>
  );
};
