import { RibbonBadgeProps, RibbonBadgeTypeMap } from './RibbonBadge.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { ButtonBase } from '../ButtonBase';

export const RibbonBadge: OverridableComponent<RibbonBadgeTypeMap> = (inProps: RibbonBadgeProps) => {
  const {
    className,
    color = 'success',
    orientation = 'left',
    clickable,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESRibbonBadge',
  });

  const component = clickable ? ButtonBase : 'div';

  return (
    <ButtonBase
      className={clsx(
        'es-ribbon-badge',
        `es-ribbon-badge--color--${color}`,
        `es-ribbon-badge--orientation--${orientation}`,
        clickable && 'es-ribbon-badge--clickable',
        'caption',
        className
      )}
      component={component}
      {...props}
    />
  );
};
