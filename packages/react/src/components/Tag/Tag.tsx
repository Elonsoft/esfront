import { TagProps } from './Tag.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { ButtonBase } from '../ButtonBase';

/**
 * The Tag component is used to categorize content.
 */
export const Tag = (inProps: TagProps) => {
  const {
    children,
    className,

    clickable = false,
    color = 'primary',
    variant = 'overline',
    startIcon,
    endIcon,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESTag',
  });

  const component = clickable ? 'button' : 'div';

  return (
    <ButtonBase
      className={clsx(
        className,
        'es-tag',
        `es-tag--color--${color}`,
        `es-tag--variant--${variant}`,
        clickable && 'es-tag--clickable'
      )}
      component={component}
      {...props}
    >
      {!!startIcon && <span className="es-tag__icon es-tag__start-icon">{startIcon}</span>}
      <span className={clsx('es-tag__children', variant)}>{children}</span>
      {!!endIcon && <span className="es-tag__icon es-tag__end-icon">{endIcon}</span>}
    </ButtonBase>
  );
};
