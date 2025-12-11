import { SFSFiltersGroupProps } from './SFSFiltersGroup.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const SFSFiltersGroup = (inProps: SFSFiltersGroupProps) => {
  const { className, children, style, title } = useDefaultProps({
    props: inProps,
    name: 'ESSFSFiltersGroup',
  });

  return (
    <div className={clsx('es-sfs-filters-group', className)} style={style}>
      {!!title && <div className="es-sfs-filters-group__title body200-medium">{title}</div>}
      {children}
    </div>
  );
};
