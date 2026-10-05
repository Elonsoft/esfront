'use client';

import { Children, RefAttributes, useRef, useState } from 'react';

import { FiltersFormGroupProps } from './FiltersFormGroup.types';

import { OverlayScrollbarsComponentRef } from 'overlayscrollbars-react';

import clsx from 'clsx';

import { useBoolean, useResizeObserver } from '../../../hooks';
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

  const [isScrollable, setScrollable] = useState(false);
  const [isBeforeScroll, setBeforeScroll] = useState(false);
  const [isAfterScroll, setAfterScroll] = useState(true);

  const ref = useRef<OverlayScrollbarsComponentRef | null>(null);

  // The viewport is published from `onInitialized` rather than read off the ref during render, which
  // would have made the observed element depend on a value that cannot trigger a re-render.
  const [viewport, setViewport] = useState<HTMLElement | null>(null);

  useResizeObserver({ current: viewport }, () => {
    if (viewport) {
      setScrollable(viewport.scrollHeight > viewport.clientHeight);
    }
  });

  const onInitialized = (instance: NonNullable<ReturnType<OverlayScrollbarsComponentRef['osInstance']>>) => {
    const element = instance.elements().viewport;

    setViewport(element ?? null);

    if (element) {
      setScrollable(element.scrollHeight > element.clientHeight);
    }
  };

  const onScroll = () => {
    if (!ref.current) {
      return;
    }

    const element = ref.current.osInstance()?.elements().viewport;

    if (!element) {
      return;
    }

    const { scrollTop, scrollHeight, clientHeight } = element;
    setBeforeScroll(scrollTop > 0);
    setAfterScroll(!(scrollTop >= scrollHeight - clientHeight));
  };

  return (
    <div ref={inRef} className={clsx('es-filters-form-group', className)} style={style}>
      {!!header && <div className="es-filters-form-group__header">{header}</div>}
      <OverlayScrollbars
        ref={ref}
        className={clsx(
          'es-filters-form-group__content',
          isScrollable && 'es-filters-form-group__content--scrollable',
          isBeforeScroll && 'es-filters-form-group__content--scroll-before',
          isAfterScroll && 'es-filters-form-group__content--scroll-after'
        )}
        color="mono-a"
        events={{
          initialized: onInitialized,
          scroll: onScroll,
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
