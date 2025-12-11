import { SpinnerProps } from '../Spinner.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const SpinnerFadingBars = (inProps: SpinnerProps) => {
  const {
    className,
    style,
    size = 40,
    color = 'primary',
  } = useDefaultProps({
    props: inProps,
    name: 'ESSpinnerFadingBars',
  });

  return (
    <svg
      className={clsx('es-spinner', `es-spinner--color--${color}`, 'es-spinner-fading-bars', className)}
      fill="none"
      height={size}
      style={style}
      viewBox="0 0 40 40"
      width={size}
    >
      <rect rx="2" x="18" />
      <rect rx="2" transform="rotate(45 32.7285 4.44336)" x="32.7285" y="4.44336" />
      <rect rx="2" transform="rotate(90 40 18)" x="40" y="18" />
      <rect rx="2" transform="rotate(135 35.5566 32.7275)" x="35.5566" y="32.7275" />
      <rect rx="2" transform="rotate(-180 22 40)" x="22" y="40" />
      <rect rx="2" transform="rotate(-135 7.27148 35.5566)" x="7.27148" y="35.5566" />
      <rect rx="2" transform="rotate(-90 0 22)" y="22" />
      <rect rx="2" transform="rotate(-45 4.44336 7.27246)" x="4.44336" y="7.27246" />
    </svg>
  );
};
