import { BadgeProps, BadgeTypeMap } from './Badge.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { ButtonBase } from '../ButtonBase';

export const Badge: OverridableComponent<BadgeTypeMap> = (inProps: BadgeProps) => {
  const {
    className,
    color = 'mono-a',
    size = '700',
    clickable = false,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESBadge',
  });

  const component = clickable ? ButtonBase : 'div';

  return (
    <ButtonBase
      className={clsx(
        'es-badge',
        `es-badge--color--${color}`,
        `es-badge--size--${size}`,
        clickable && 'es-badge--clickable',
        size === '400' ? 'mini100-w50' : 'mini200',
        className
      )}
      component={component}
      {...props}
    />
  );
};
