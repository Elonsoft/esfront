'use client';

import { RefAttributes } from 'react';

import { SwiperButtonProps } from './SwiperButton.types';

import clsx from 'clsx';

import {
  IconArrowDownLineW500,
  IconArrowLeftLineW500,
  IconArrowRightLineW500,
  IconArrowUpLineW500,
} from '../../../icons';
import { useDefaultProps } from '../../../theming';
import { Button } from '../../Button';
import { useSwiperContext } from '../Swiper.context';

import { useLocaleDefaultProps } from '@esfront/react/locale';

/**
 * @see `Swiper`
 */
export const SwiperButton = ({ ref, ...inProps }: SwiperButtonProps & RefAttributes<HTMLButtonElement>) => {
  const resolvedProps = useDefaultProps({
    props: inProps,
    name: 'ESSwiperButton',
  });

  const {
    className,
    style,
    step,
    labelPrev,
    labelNext,
    iconUp = <IconArrowUpLineW500 />,
    iconDown = <IconArrowDownLineW500 />,
    iconLeft = <IconArrowLeftLineW500 />,
    iconRight = <IconArrowRightLineW500 />,
  } = useLocaleDefaultProps({
    props: resolvedProps,
    name: 'ESSwiperButton',
  });

  const { direction, setActiveSlideByStep } = useSwiperContext();

  const onClick = () => {
    setActiveSlideByStep(step);
  };

  return (
    <Button
      ref={ref}
      aria-label={step < 0 ? labelPrev : labelNext}
      className={clsx(
        'es-swiper-button',
        step < 0 && 'es-swiper-button--prev',
        step > 0 && 'es-swiper-button--next',
        `es-swiper-button--direction--${direction}`,
        className
      )}
      color="white"
      style={style}
      onClick={onClick}
    >
      {direction === 'vertical' ? (step < 0 ? iconUp : iconDown) : step < 0 ? iconLeft : iconRight}
    </Button>
  );
};
