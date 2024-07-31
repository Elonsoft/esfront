import { KbdProps } from './Kbd.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

/**
 * Display keyboard button or keys combination.
 */
export const Kbd = (inProps: KbdProps) => {
  const { children, className, style, variant = 'raised' } = useDefaultProps({ props: inProps, name: 'ESKbd' });

  return (
    <kbd
      className={clsx(
        `es-kbd es-kbd--${variant}`,
        variant === 'mono-a' || variant === 'mono-b' ? 'caption' : 'body100',
        className
      )}
      style={style}
    >
      {children}
    </kbd>
  );
};
