'use client';

import { RefAttributes } from 'react';

import { FiltersFilterProps } from './FiltersFilter.types';

import clsx from 'clsx';

import { useBoolean } from '../../../hooks';
import { IconChevronDownLineW300, IconChevronUpLineW300 } from '../../../icons';
import { useDefaultProps } from '../../../theming';
import { InformationIcon } from '../../InformationIcon';
import { Tooltip } from '../../Tooltip';

import { useLocaleDefaultProps } from '@esfront/react/locale';

/**
 * @see `Filters`
 */
export const FiltersFilter = ({ ref, ...inProps }: FiltersFilterProps & RefAttributes<HTMLDivElement>) => {
  const resolvedProps = useDefaultProps({
    props: inProps,
    name: 'ESFiltersFilter',
  });

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
  } = useLocaleDefaultProps({
    props: resolvedProps,
    name: 'ESFiltersFilter',
  });

  const [open, toggleOpen] = useBoolean(true);

  return (
    <div ref={ref} className={clsx('es-filters-filter', className)} style={style}>
      <div className="es-filters-filter__header">
        <div className="es-filters-filter__container">
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events -- the nested toggle button receives the keyboard activation and bubbles it here */}
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
