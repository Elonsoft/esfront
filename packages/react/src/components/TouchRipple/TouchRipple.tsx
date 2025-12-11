import { forwardRef } from 'react';

import { TouchRippleProps } from './TouchRipple.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

/**
 * The TouchRipple.
 */
export const TouchRipple = forwardRef<HTMLDivElement, TouchRippleProps>(function TouchRipple(inProps, ref) {
  const { className, style } = useDefaultProps({
    props: inProps,
    name: 'ESTouchRipple',
  });

  return <div ref={ref} className={clsx(className, 'es-touch-ripple')} style={style} />;
});
