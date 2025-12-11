import { useMemo } from 'react';

import { SwiperPaginationProps } from './SwiperPagination.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useSwiperContext } from '../Swiper.context';
import { SwiperPaginationItem } from '../SwiperPaginationItem';

export const SwiperPagination = (inProps: SwiperPaginationProps) => {
  const {
    className,
    style,
    position = 'end',
    variant = 'small',
    siblingCount,
    transitionDuration,
  } = useDefaultProps({
    props: inProps,
    name: 'ESSwiperPagination',
  });

  const { direction, from, to, active, setActiveSlide } = useSwiperContext();

  const name = useMemo(() => `pagination-${SwiperPagination.count++}`, []);
  const transition: { transitionDuration?: string } =
    !!transitionDuration || transitionDuration === 0 ? { transitionDuration: `${transitionDuration}ms` } : {};

  const bullets = useMemo(() => {
    const result: Array<number> = [];

    for (let i = from; i <= to; i++) {
      result.push(i);
    }

    return result;
  }, [from, to]);

  const { siblingFrom, siblingTo } = useMemo(() => {
    const siblingFrom = siblingCount
      ? Math.max(from, active - siblingCount - Math.max(0, active + siblingCount - to))
      : from;
    const siblingTo = siblingCount
      ? Math.min(to, active + siblingCount + Math.max(0, from - (active - siblingCount)))
      : to;
    return { siblingFrom, siblingTo };
  }, [from, to, active, siblingCount]);

  const onSlideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActiveSlide(+event.target.value);
  };

  if (to <= from) {
    return null;
  }

  return (
    <div
      className={clsx(
        'es-swiper-pagination',
        `es-swiper-pagination--direction--${direction}`,
        `es-swiper-pagination--position--${position}`,
        `es-swiper-pagination--variant--${variant}`,
        className
      )}
      style={style}
    >
      {bullets.map((index) => (
        <SwiperPaginationItem
          key={index}
          active={active}
          from={from}
          index={index}
          name={name}
          siblingFrom={siblingFrom}
          siblingTo={siblingTo}
          to={to}
          transition={transition}
          onSlideChange={onSlideChange}
        />
      ))}
    </div>
  );
};

SwiperPagination.count = 0;
