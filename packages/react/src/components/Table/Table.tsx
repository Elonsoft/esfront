import { forwardRef, memo, useMemo, useRef } from 'react';

import { TableProps } from './Table.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { useForkRef } from '@mui/material/utils';

import { TableContext } from './Table.context';
import { TableBodyContext } from './TableBody';
import { TableCellContext } from './TableCell';
import { TableHeadContext } from './TableHead';
import { TableScrollbarContext } from './TableScrollbar';
import { useTableScrollSync } from './useTableScrollSync';
import { useTableStickyOffset } from './useTableStickyOffset';

const TABLE_CELL_CONTEXT_VALUE = { variant: 'body' as const };

/** Tables display information in a way that's easy to scan, so that users can look for patterns and insights. */
export const Table = memo(
  forwardRef<HTMLDivElement, TableProps>(function Table(inProps, inRef) {
    const { children, className, columns, style } = useDefaultProps({
      props: inProps,
      name: 'ESTable',
    });

    const ref = useRef<HTMLDivElement | null>(null);
    const rootRef = useForkRef(ref, inRef);

    const value = useMemo(() => {
      return { columns };
    }, [columns]);

    const { bodyContextValue, headContextValue, scrollbarContextValue } = useTableScrollSync();
    useTableStickyOffset(ref);

    return (
      <TableContext.Provider value={value}>
        <TableCellContext.Provider value={TABLE_CELL_CONTEXT_VALUE}>
          <TableBodyContext.Provider value={bodyContextValue}>
            <TableHeadContext.Provider value={headContextValue}>
              <TableScrollbarContext.Provider value={scrollbarContextValue}>
                <div ref={rootRef} className={clsx('es-table', className)} role="table" style={style}>
                  {children}
                </div>
              </TableScrollbarContext.Provider>
            </TableHeadContext.Provider>
          </TableBodyContext.Provider>
        </TableCellContext.Provider>
      </TableContext.Provider>
    );
  })
);
