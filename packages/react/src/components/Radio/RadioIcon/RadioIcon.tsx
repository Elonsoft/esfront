'use client';

import React, { RefAttributes } from 'react';

import { RadioIconProps } from './RadioIcon.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `Radio`
 */
export const RadioIcon = ({ ref, ...inProps }: RadioIconProps & RefAttributes<HTMLDivElement>) => {
  const { className, style } = useDefaultProps({ props: inProps, name: 'ESRadioIcon' });

  return (
    <div ref={ref} className={clsx('es-radio-icon', className)} style={style}>
      <div className="es-radio-icon__circle" />
    </div>
  );
};
