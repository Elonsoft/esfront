import { FiltersContentProps } from './FiltersContent.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

/**
 * @see `Filters`
 */
export const FiltersContent = (inProps: FiltersContentProps) => {
  const { children, className, style } = useDefaultProps({ props: inProps, name: 'ESFiltersContent' });

  return (
    <div className={clsx('es-filters-content', className)} style={style}>
      {children}
    </div>
  );
};
