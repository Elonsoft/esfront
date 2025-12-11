import { SpinnerProps } from '../Spinner.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const SpinnerDashRing = (inProps: SpinnerProps) => {
  const {
    className,
    style,
    size = 40,
    color = 'primary',
  } = useDefaultProps({
    props: inProps,
    name: 'ESSpinnerDashRing',
  });

  return (
    <svg
      className={clsx('es-spinner', `es-spinner--color--${color}`, 'es-spinner-dash-ring', className)}
      fill="none"
      height={size}
      style={style}
      viewBox="0 0 40 40"
      width={size}
    >
      <circle cx="20" cy="20" opacity="0.3" r="18" strokeWidth="4" />
      <circle cx="20" cy="20" r="18" strokeWidth="4" />
    </svg>
  );
};
