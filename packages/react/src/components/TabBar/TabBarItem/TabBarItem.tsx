import { TabBarItemProps, TabBarItemTypeMap } from './TabBarItem.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { Button } from '../../Button';

export const TabBarItem: OverridableComponent<TabBarItemTypeMap> = (inProps: TabBarItemProps) => {
  const {
    className,
    icon,
    label,
    selected,
    // eslint-disable-next-line
    color,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESTabBarItem',
  });

  return (
    <Button
      className={clsx(className, 'es-tab-bar-item', selected && 'es-tab-bar-item--selected')}
      color="tertiary"
      {...props}
    >
      {!!icon && <span className="es-tab-bar-item__icon">{icon}</span>}
      {!!label && <span className="es-tab-bar-item__label micro">{label}</span>}
    </Button>
  );
};
