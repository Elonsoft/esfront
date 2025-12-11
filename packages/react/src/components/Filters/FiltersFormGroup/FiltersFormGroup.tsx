import { Children, useRef, useState } from 'react';

import { FiltersFormGroupProps } from './FiltersFormGroup.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useBoolean, useResizeObserver } from '../../../hooks';
import { Link } from '../../Link';

export const FiltersFormGroup = (inProps: FiltersFormGroupProps) => {
  const { children, header, className, style, maxLines, labelShow, labelHide } = useDefaultProps({
    props: inProps,
    name: 'ESFiltersFormGroup',
  });

  const [open, toggleOpen] = useBoolean(false);

  const [isScrollable, setScrollable] = useState(false);
  const [isBeforeScroll, setBeforeScroll] = useState(false);
  const [isAfterScroll, setAfterScroll] = useState(true);

  const ref = useRef<HTMLDivElement | null>(null);

  useResizeObserver(ref, () => {
    if (ref.current) {
      setScrollable(ref.current?.scrollHeight > ref.current?.clientHeight);
    }
  });

  const onScroll = () => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      setBeforeScroll(scrollTop > 0);
      setAfterScroll(!(scrollTop >= scrollHeight - clientHeight));
    }
  };

  return (
    <div className={clsx('es-filters-form-group', className)} style={style}>
      {!!header && <div className="es-filters-form-group__header">{header}</div>}
      <div
        ref={ref}
        className={clsx(
          'es-filters-form-group__content',
          isScrollable && 'es-filters-form-group__content--scrollable',
          isBeforeScroll && 'es-filters-form-group__content--scroll-before',
          isAfterScroll && 'es-filters-form-group__content--scroll-after',
          'scrollbar-overlay-mono-a'
        )}
        onScroll={onScroll}
      >
        {!!maxLines && !open ? Children.toArray(children).slice(0, maxLines) : children}
      </div>
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
