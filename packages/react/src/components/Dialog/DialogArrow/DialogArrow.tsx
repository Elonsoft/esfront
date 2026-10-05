'use client';

import { RefAttributes } from 'react';

import { DialogArrowProps } from './DialogArrow.types';

import clsx from 'clsx';

import { IconArrowLeftLineW500, IconArrowRightLineW500 } from '../../../icons';
import { useDefaultProps } from '../../../theming';
import { Button } from '../../Button';

/**
 * @see `Dialog`
 */
export const DialogArrow = ({ ref, ...inProps }: DialogArrowProps & RefAttributes<HTMLDivElement>) => {
  const {
    className,
    style,
    direction,
    onClick,
    labelPrev,
    labelNext,
    iconPrev = <IconArrowLeftLineW500 />,
    iconNext = <IconArrowRightLineW500 />,
  } = useDefaultProps({
    props: inProps,
    name: 'ESDialogArrow',
  });

  return (
    <div ref={ref} className={clsx('es-dialog-arrow', `es-dialog-arrow--${direction}`, className)} style={style}>
      <Button
        aria-label={direction === 'prev' ? labelPrev : labelNext}
        className="es-dialog-arrow__button"
        color="white"
        variant="text"
        onClick={onClick}
      >
        {direction === 'prev' ? iconPrev : iconNext}
      </Button>
    </div>
  );
};
