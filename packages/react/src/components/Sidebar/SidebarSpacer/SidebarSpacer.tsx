'use client';

import { RefAttributes } from 'react';

import { SidebarSpacerProps } from './SidebarSpacer.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `Sidebar`
 */
export const SidebarSpacer = ({ ref, ...inProps }: SidebarSpacerProps & RefAttributes<HTMLDivElement>) => {
  const { className, style } = useDefaultProps({
    props: inProps,
    name: 'ESSidebarSpacer',
  });

  return <div ref={ref} className={clsx('es-sidebar-spacer', className)} style={style} />;
};
