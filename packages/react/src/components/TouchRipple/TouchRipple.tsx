'use client';

import { RefAttributes } from 'react';

import { TouchRippleProps } from './TouchRipple.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../theming';

/**
 * The touch ripple for ButtonBase component.
 */
export const TouchRipple = ({ ref, ...inProps }: TouchRippleProps & RefAttributes<HTMLDivElement>) => {
  const { className, style } = useDefaultProps({
    props: inProps,
    name: 'ESTouchRipple',
  });

  return <div ref={ref} className={clsx(className, 'es-touch-ripple')} style={style} />;
};
