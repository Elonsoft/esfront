import { forwardRef, memo, useMemo } from 'react';

import { TableBodyProps } from './TableBody.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { useForkRef } from '@mui/material/utils';

import { useTableBodyContext } from './TableBody.context';

import { TableCellContext } from '../TableCell';

const TABLE_CELL_CONTEXT_VALUE = { variant: 'body' as const };

export const TableBody = memo(
  forwardRef<HTMLDivElement, TableBodyProps>(function TableBody(inProps, ref) {
    const {
      children,
      className,
      style,
      rowDividers = true,
      colDividers = false,
      striped,
    } = useDefaultProps({
      props: inProps,
      name: 'ESTableBody',
    });

    const { setRef } = useTableBodyContext();

    const rootRef = useForkRef(setRef, ref);

    const value = useMemo(() => {
      return { ...TABLE_CELL_CONTEXT_VALUE, rowDividers, colDividers };
    }, [rowDividers, colDividers]);

    return (
      <TableCellContext.Provider value={value}>
        <div
          ref={rootRef}
          className={clsx('es-table-body', striped && 'es-table-body--striped', className)}
          role="rowgroup"
          style={style}
        >
          <div className="es-table-body__container">{children}</div>
        </div>
      </TableCellContext.Provider>
    );
  })
);
