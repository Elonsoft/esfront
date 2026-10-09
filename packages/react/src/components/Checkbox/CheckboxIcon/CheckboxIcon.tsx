'use client';

import { RefAttributes } from 'react';

import { CheckboxIconProps } from './CheckboxIcon.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `Checkbox`
 */
export const CheckboxIcon = ({ ref, ...inProps }: CheckboxIconProps & RefAttributes<HTMLSpanElement>) => {
  const { className, ...props } = useDefaultProps({ props: inProps, name: 'ESCheckboxIcon' });

  return <span ref={ref} className={clsx(className, 'es-checkbox-icon')} {...props} />;
};
