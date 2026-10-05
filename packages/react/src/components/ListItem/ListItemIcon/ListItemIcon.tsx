'use client';

import { RefAttributes } from 'react';

import { ListItemIconProps } from './ListItemIcon.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `ListItem`
 */
export const ListItemIcon = ({ ref, ...inProps }: ListItemIconProps & RefAttributes<HTMLDivElement>) => {
  const { className, style, children } = useDefaultProps({
    props: inProps,
    name: 'ESListItemIcon',
  });

  return (
    <div ref={ref} className={clsx(className, 'es-list-item-icon')} style={style}>
      {children}
    </div>
  );
};
