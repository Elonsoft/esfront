import { FiltersFooterProps } from './FiltersFooter.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

/**
 * @see `Filters`
 */
export const FiltersFooter = (inProps: FiltersFooterProps) => {
  const { children, className, style } = useDefaultProps({ props: inProps, name: 'ESFiltersFooter' });

  return (
    <div className={clsx('es-filters-footer', className)} style={style}>
      {children}
    </div>
  );
};
