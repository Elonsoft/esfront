'use client';

import { RefAttributes } from 'react';

import { KbdProps } from './Kbd.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../theming';

/**
 * Display keyboard button or keys combination.
 */
export const Kbd = ({ ref, ...inProps }: KbdProps & RefAttributes<HTMLElement>) => {
  const { children, className, style, variant = 'raised' } = useDefaultProps({ props: inProps, name: 'ESKbd' });

  return (
    <kbd
      ref={ref}
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
