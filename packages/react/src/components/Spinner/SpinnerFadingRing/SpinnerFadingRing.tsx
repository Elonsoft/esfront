import { useMemo } from 'react';

import { SpinnerProps } from '../Spinner.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const SpinnerFadingRing = (inProps: SpinnerProps) => {
  const {
    className,
    style,
    size = 40,
    color = 'primary',
  } = useDefaultProps({
    props: inProps,
    name: 'ESSpinnerFadingRing',
  });

  const id = useMemo(() => `SpinnerFadingRing-${SpinnerFadingRing.count++}`, []);

  return (
    <svg
      className={clsx('es-spinner', `es-spinner--color--${color}`, 'es-spinner-fading-ring', className)}
      fill="none"
      height={size}
      style={style}
      viewBox="0 0 40 40"
      width={size}
    >
      <clipPath id={id}>
        <path
          clipRule="evenodd"
          d="M20 4C11.1634 4 4 11.1634 4 20C4 27.5387 9.21559 33.8641 16.2376 35.5556L15.3009 39.4444C6.52338 37.33 0 29.4292 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C18.8954 40 18 39.1046 18 38C18 36.8954 18.8954 36 20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4Z"
          fillRule="evenodd"
        />
      </clipPath>
      <foreignObject clipPath={`url(#${id})`} height="40" width="40">
        <div />
      </foreignObject>
    </svg>
  );
};

SpinnerFadingRing.count = 0;
