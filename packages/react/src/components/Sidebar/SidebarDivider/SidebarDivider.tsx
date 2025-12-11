import { SidebarDividerProps } from './SidebarDivider.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { Divider } from '../../Divider';
import { useSidebarContext } from '../Sidebar.context';

export const SidebarDivider = (inProps: SidebarDividerProps) => {
  const { className, style } = useDefaultProps({
    props: inProps,
    name: 'ESSidebarDivider',
  });

  const { color, open } = useSidebarContext();

  return (
    <div className={clsx(className, 'es-sidebar-divider', open && 'es-sidebar-divider--open')} style={style}>
      <Divider className={clsx('es-sidebar-divider__line', `'es-sidebar-divider__line--color--${color}'`)} />
    </div>
  );
};
