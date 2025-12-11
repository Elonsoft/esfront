import { FiltersProps } from './Filters.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

/** The collection of components for building a ecommerce filters. */
export const Filters = (inProps: FiltersProps) => {
  const { children, className, style } = useDefaultProps({ props: inProps, name: 'ESFilters' });

  return (
    <div className={clsx('es-filters', className)} style={style}>
      {children}
    </div>
  );
};
