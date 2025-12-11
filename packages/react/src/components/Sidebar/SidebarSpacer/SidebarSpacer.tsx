import { SidebarSpacerProps } from './SidebarSpacer.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const SidebarSpacer = (inProps: SidebarSpacerProps) => {
  const { className, style } = useDefaultProps({
    props: inProps,
    name: 'ESSidebarSpacer',
  });

  return <div className={clsx('es-sidebar-spacer', className)} style={style} />;
};
