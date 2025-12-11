import { forwardRef, memo, useRef, useState } from 'react';

import { TableFootProps } from './TableFoot.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { useForkRef } from '@mui/material/utils';

import { useIntersectionObserver } from '../../../hooks';

export const TableFoot = memo(
  forwardRef<HTMLDivElement, TableFootProps>(function TableFoot(inProps, inRef) {
    const { children, className, sticky, style } = useDefaultProps({
      props: inProps,
      name: 'ESTableFoot',
    });

    const [isStuck, setStuck] = useState(false);

    const ref = useRef<HTMLDivElement | null>(null);

    const rootRef = useForkRef(ref, inRef);

    useIntersectionObserver(
      ref,
      (entries) => {
        setStuck(entries[0].intersectionRatio < 1);
      },
      { threshold: [1], rootMargin: `0px 0px -${(sticky || 0) + 1}px` }
    );

    return (
      <div
        ref={rootRef}
        className={clsx(
          'es-table-foot',
          sticky !== undefined && 'es-table-foot--sticky',
          sticky !== undefined && isStuck && 'es-table-foot--stuck',
          className
        )}
        style={
          {
            '--es-table-foot-bottom': sticky === undefined ? undefined : `${sticky || 0}px`,
            ...style,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    );
  })
);
