import { forwardRef, memo, useMemo, useState } from 'react';

import { TableHeadProps } from './TableHead.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { useForkRef } from '@mui/material/utils';

import { useTableHeadContext } from './TableHead.context';

import { useIntersectionObserver } from '../../../hooks';
import { TableCellContext } from '../TableCell';

const TABLE_CELL_CONTEXT_VALUE = { variant: 'head' as const };

export const TableHead = memo(
  forwardRef<HTMLDivElement, TableHeadProps>(function TableHead(inProps, inRef) {
    const {
      children,
      className,
      sticky,
      style,
      rowDividers = true,
      colDividers = false,
    } = useDefaultProps({
      props: inProps,
      name: 'ESTableHead',
    });

    const [isStuck, setStuck] = useState(false);

    const { ref, setRef } = useTableHeadContext();
    const rootRef = useForkRef(setRef, inRef);

    useIntersectionObserver(
      { current: ref },
      (entries) => {
        setStuck(entries[0].intersectionRatio < 1);
      },
      { threshold: [1], rootMargin: `-${(sticky || 0) + 1}px 0px 0px` }
    );

    const value = useMemo(() => {
      return { ...TABLE_CELL_CONTEXT_VALUE, rowDividers, colDividers };
    }, [rowDividers, colDividers]);

    return (
      <TableCellContext.Provider value={value}>
        <div
          ref={rootRef}
          className={clsx(
            'es-table-head',
            sticky !== undefined && 'es-table-head--sticky',
            sticky !== undefined && isStuck && 'es-table-head--stuck',
            className
          )}
          role="rowgroup"
          style={
            {
              '--es-table-head-top': sticky === undefined ? undefined : `${sticky || 0}px`,
              ...style,
            } as React.CSSProperties
          }
        >
          <div className="es-table-head__container">{children}</div>
        </div>
      </TableCellContext.Provider>
    );
  })
);
