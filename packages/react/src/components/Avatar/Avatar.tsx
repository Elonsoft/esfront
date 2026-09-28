'use client';

import { CSSProperties, ReactNode, useEffect, useState } from 'react';

import { AvatarProps } from './Avatar.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../theming';

function useLoaded(src: string): 'loaded' | 'error' | null {
  const [result, setResult] = useState<{ src: string; status: 'loaded' | 'error' } | null>(null);

  useEffect(() => {
    if (!src) {
      return undefined;
    }

    let active = true;
    const image = new Image();

    image.onload = () => {
      if (!active) {
        return;
      }

      setResult({ src, status: 'loaded' });
    };

    image.onerror = () => {
      if (!active) {
        return;
      }

      setResult({ src, status: 'error' });
    };

    image.src = src;

    return () => {
      active = false;
    };
  }, [src]);

  // The result carries the `src` it belongs to, so a result left over from a previous `src` reads as
  // "not loaded yet" instead of having to be cleared by a synchronous setState in the effect.
  return result?.src === src ? result.status : null;
}

/** Avatar is used to represent users or things. */
export const Avatar = (inProps: AvatarProps) => {
  const {
    className,
    style,
    children,
    variant = 'square',
    src,
    alt,
    size = 40,
    outlined = false,
  } = useDefaultProps({
    props: inProps,
    name: 'ESAvatar',
  });

  const hasImgLoaded = useLoaded(src || '') === 'loaded';
  const hasImgNotFailing = src ? hasImgLoaded : false;

  let child: ReactNode = null;

  if (hasImgNotFailing) {
    child = <img className="es-avatar__image" src={src} />;
  } else if (!!children || children === 0) {
    child = children;
  } else if (src && alt) {
    child = alt;
  }

  return (
    <div
      className={clsx(className, 'es-avatar', `es-avatar--variant--${variant}`, outlined && 'es-avatar--outlined')}
      style={{ '--es-avatar-size': `${size}px`, ...style } as CSSProperties}
    >
      {child}
    </div>
  );
};
