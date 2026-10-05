'use client';

import { RefAttributes } from 'react';

import { TextFieldGroupProps } from './TextFieldGroup.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../theming';

/**
 * This component allows to group multiple text fields for related information.
 */
export const TextFieldGroup = ({ ref, ...inProps }: TextFieldGroupProps & RefAttributes<HTMLDivElement>) => {
  const {
    children,
    className,
    style,
    breakpoint = 'sm',
  } = useDefaultProps({
    props: inProps,
    name: 'ESTextFieldGroup',
  });

  return (
    <div
      ref={ref}
      className={clsx('es-text-field-group', `es-text-field-group--breakpoint--${breakpoint}`, className)}
      style={style}
    >
      {children}
    </div>
  );
};
