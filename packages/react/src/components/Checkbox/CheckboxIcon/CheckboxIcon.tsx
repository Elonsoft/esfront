'use client';

import { RefAttributes } from 'react';

import { CheckboxIconProps } from './CheckboxIcon.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `Checkbox`
 */
export const CheckboxIcon = ({ ref, ...inProps }: CheckboxIconProps & RefAttributes<HTMLDivElement>) => {
  const { className, ...props } = useDefaultProps({ props: inProps, name: 'ESCheckboxIcon' });

  return <div ref={ref} className={clsx(className, 'es-checkbox-icon')} {...props} />;
};
