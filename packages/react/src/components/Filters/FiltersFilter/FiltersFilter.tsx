import { FiltersFilterProps } from './FiltersFilter.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useBoolean } from '../../../hooks';
import { IconChevronDownLineW300, IconChevronUpLineW300 } from '../../../icons';
import { InformationIcon } from '../../InformationIcon';
import { Tooltip } from '../../Tooltip';

export const FiltersFilter = (inProps: FiltersFilterProps) => {
  const {
    children,
    className,
    style,
    title,
    endAdornment,
    TooltipProps,
    labelHide,
    labelShow,
    iconHide = <IconChevronDownLineW300 container containerSize="20px" />,
    iconShow = <IconChevronUpLineW300 container containerSize="20px" />,
  } = useDefaultProps({
    props: inProps,
    name: 'ESFiltersFilter',
  });

  const [open, toggleOpen] = useBoolean(true);

  return (
    <div className={clsx('es-filters-filter', className)} style={style}>
      <div className="es-filters-filter__header">
        <div className="es-filters-filter__container">
          <div className="es-filters-filter__title body200-w40" onClick={toggleOpen}>
            {title}
            {!!children && (
              <button aria-label={open ? labelHide : labelShow} className="es-filters-filter__toggle">
                {open ? iconHide : iconShow}
              </button>
            )}
          </div>
          {!!TooltipProps && (
            <Tooltip {...TooltipProps}>
              <InformationIcon className="es-filters-filter__information-icon" variant="question" />
            </Tooltip>
          )}
        </div>
        {!!endAdornment && <div className="es-filters-filter__end-adornment">{endAdornment}</div>}
      </div>
      {!!open && !!children && <div className="es-filters-filter__content">{children}</div>}
    </div>
  );
};
