'use client';

import { RefAttributes } from 'react';

import { PropertyProps } from './Property.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../theming';

/**
 * Display attributes are characteristics that describe a entity.
 */
export const Property = ({ ref, ...inProps }: PropertyProps & RefAttributes<HTMLDivElement>) => {
  const { name, value, className, style, size = 'm' } = useDefaultProps({ props: inProps, name: 'ESProperty' });

  return (
    <div
      ref={ref}
      className={clsx(className, 'es-property', `es-property--size--${size}`, size === 's' ? 'body100' : 'body200')}
      style={style}
    >
      <div className="es-property__name">{name}</div>
      <div className="es-property__divider" />
      <div className="es-property__value">{value}</div>
    </div>
  );
};
