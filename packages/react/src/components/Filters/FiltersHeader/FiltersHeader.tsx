import { FiltersHeaderProps } from './FiltersHeader.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { Button } from '../../Button';

export const FiltersHeader = (inProps: FiltersHeaderProps) => {
  const { children, className, style, onClear, labelFilters, labelReset } = useDefaultProps({
    props: inProps,
    name: 'ESFiltersHeader',
  });

  return (
    <div className={clsx('es-filters-header', className)} style={style}>
      <div className="es-filters-header__title h5">
        {labelFilters}
        {!!onClear && (
          <Button color="tertiary" size="300" variant="text" onClick={onClear}>
            {labelReset}
          </Button>
        )}
      </div>
      {!!children && <div className="es-filters-header__children">{children}</div>}
    </div>
  );
};
