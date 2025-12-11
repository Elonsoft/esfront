import { SpinnerProps } from '../Spinner.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const SpinnerFadingDots = (inProps: SpinnerProps) => {
  const {
    className,
    style,
    size = 40,
    color = 'primary',
  } = useDefaultProps({
    props: inProps,
    name: 'ESSpinnerFadingDots',
  });

  return (
    <svg
      className={clsx('es-spinner', `es-spinner--color--${color}`, 'es-spinner-fading-dots', className)}
      fill="none"
      height={size}
      style={style}
      viewBox="0 0 40 40"
      width={size}
    >
      <circle cx="19" cy="3" r="3" />
      <circle cx="30.3145" cy="7.68652" r="3" />
      <circle cx="35" cy="19" r="3" />
      <circle cx="30.3145" cy="30.3135" r="3" />
      <circle cx="19" cy="35" r="3" />
      <circle cx="7.68555" cy="30.3135" r="3" />
      <circle cx="3" cy="19" r="3" />
      <circle cx="7.68555" cy="7.68652" r="3" />
    </svg>
  );
};
