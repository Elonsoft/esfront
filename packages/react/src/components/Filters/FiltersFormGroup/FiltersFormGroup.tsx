'use client';

import { Children, RefAttributes } from 'react';

import { FiltersFormGroupProps } from './FiltersFormGroup.types';

import { OverlayScrollbarsComponentRef } from 'overlayscrollbars-react';

import clsx from 'clsx';

import { useBoolean, useRefState, useScrollPosition } from '../../../hooks';
import { useDefaultProps } from '../../../theming';
import { Link } from '../../Link';
import { OverlayScrollbars } from '../../OverlayScrollbars';

/**
 * @see `Filters`
 */
export const FiltersFormGroup = ({ ref: inRef, ...inProps }: FiltersFormGroupProps & RefAttributes<HTMLDivElement>) => {
  const { children, header, className, style, maxLines, labelShow, labelHide } = useDefaultProps({
    props: inProps,
    name: 'ESFiltersFormGroup',
  });

  const [open, toggleOpen] = useBoolean(false);

  // The viewport is published from `onInitialized` rather than read off the ref during render, which
  // would have made the observed element depend on a value that cannot trigger a re-render.
  const [viewport, setViewport] = useRefState<HTMLElement>();

  const { isScrollableY, isAtTop, isAtBottom } = useScrollPosition(viewport);

  const onInitialized = (instance: NonNullable<ReturnType<OverlayScrollbarsComponentRef['osInstance']>>) => {
    setViewport(instance.elements().viewport ?? null);
  };

  return (
    <div ref={inRef} className={clsx('es-filters-form-group', className)} style={style}>
      {!!header && <div className="es-filters-form-group__header">{header}</div>}
      <OverlayScrollbars
        className={clsx(
          'es-filters-form-group__content',
          isScrollableY && 'es-filters-form-group__content--scrollable',
          !isAtTop && 'es-filters-form-group__content--scroll-before',
          !isAtBottom && 'es-filters-form-group__content--scroll-after'
        )}
        color="mono-a"
        events={{
          initialized: onInitialized,
        }}
      >
        {!!maxLines && !open ? Children.toArray(children).slice(0, maxLines) : children}
      </OverlayScrollbars>
      {!!maxLines && Children.count(children) > maxLines && (
        <div className="es-filters-form-group__footer">
          <Link
            color="var(--es-mono-a-a600)"
            component="button"
            type="button"
            underline="none"
            variant="caption"
            onClick={toggleOpen}
          >
            {open ? labelHide : labelShow}
          </Link>
        </div>
      )}
    </div>
  );
};
