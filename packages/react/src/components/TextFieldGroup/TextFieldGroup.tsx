import { TextFieldGroupProps } from './TextFieldGroup.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

/**
 * This component allows to group multiple text fields for related information.
 */
export const TextFieldGroup = (inProps: TextFieldGroupProps) => {
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
      className={clsx('es-text-field-group', `es-text-field-group--breakpoint--${breakpoint}`, className)}
      style={style}
    >
      {children}
    </div>
  );
};
