import { KbdProps } from './Kbd.types';

import clsx from 'clsx';

import { useThemeProps } from '@mui/material/styles';

/**
 * Display keyboard button or keys combination.
 */
export const Kbd = (inProps: KbdProps) => {
  const { children, className, variant = 'raised' } = useThemeProps({ props: inProps, name: 'ESKbd' });

  return <kbd className={clsx('es-kbd', `es-kbd--${variant}`, className)}>{children}</kbd>;
};
