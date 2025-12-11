import React, { CSSProperties } from 'react';

import { AvatarGroupProps } from './AvatarGroup.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { getCuttingOffset, getMaskImage } from './AvatarGroup.utils';

/**
 * AvatarGroup renders its children as a stack.
 */
export const AvatarGroup = (inProps: AvatarGroupProps) => {
  const {
    className,
    style,
    children,
    direction = 'rtl',
    spacing = -6,
    cutoutWidth = 2,
    size = 32,
  } = useDefaultProps({
    props: inProps,
    name: 'ESAvatarGroup',
  });

  return (
    <div
      className={clsx('es-avatar-group', `es-avatar-group--direction--${direction}`, className)}
      style={
        {
          ...style,
          '--es-avatar-group-size': `${size}px`,
          '--es-avatar-group-spacing': `${spacing}px`,
          '--es-avatar-group-mask-image': getMaskImage(size),
          '--es-avatar-group-mask-position': `${getCuttingOffset(size, direction, spacing, cutoutWidth)}, center`,
          '--es-avatar-group-mask-size': `${cutoutWidth === 0 ? size : size + cutoutWidth * 2}px, ${size}px`,
          '--es-avatar-group-mask-size-firefox': `${+size + cutoutWidth * 2}px, ${+size + 0.5}px`,
          '--es-avatar-group-mask-size-safari': `${+size + cutoutWidth * 2}px, ${+size}px`,
        } as CSSProperties
      }
    >
      {React.Children.map(children, (child: any, i: number) => (
        <div key={i} className="es-avatar-group__avatar">
          {child}
        </div>
      ))}
    </div>
  );
};
