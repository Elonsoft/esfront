import { CSSProperties, ReactNode, useEffect, useState } from 'react';

import { AvatarProps } from './Avatar.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

function useLoaded(src: string): 'loaded' | 'error' | null {
  const [loaded, setLoaded] = useState<'loaded' | 'error' | null>(null);

  useEffect(() => {
    if (!src) {
      return undefined;
    }

    setLoaded(null);

    let active = true;
    const image = new Image();

    image.onload = () => {
      if (!active) {
        return;
      }

      setLoaded('loaded');
    };

    image.onerror = () => {
      if (!active) {
        return;
      }

      setLoaded('error');
    };

    image.src = src;

    return () => {
      active = false;
    };
  }, [src]);

  return loaded;
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
