import { ListItemIconProps } from './ListItemIcon.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

export const ListItemIcon = (inProps: ListItemIconProps) => {
  const { className, style, children } = useDefaultProps({
    props: inProps,
    name: 'ESListItemIcon',
  });

  return (
    <div className={clsx(className, 'es-list-item-icon')} style={style}>
      {children}
    </div>
  );
};
