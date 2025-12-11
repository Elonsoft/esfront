import { forwardRef, memo } from 'react';

import { TableRowProps, TableRowTypeMap } from './TableRow.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { useTableContext } from '../Table.context';

export const TableRow = memo(
  forwardRef(function TableRow(inProps: TableRowProps, ref) {
    const {
      component: Component = 'div',
      children,
      className,
      style,
      selected,
      hover,
      ...props
    } = useDefaultProps({
      props: inProps,
      name: 'ESTableRow',
    });

    const { columns } = useTableContext();

    return (
      <div
        className={clsx(
          'es-table-row',
          selected && 'es-table-row--selected',
          hover && 'es-table-row--hover',
          className
        )}
        style={style}
      >
        <Component
          ref={ref}
          className={clsx('es-table-row__content', hover && 'es-table-row__content--hover')}
          role="row"
          style={{ gridTemplateColumns: columns.join(' ') }}
          {...props}
        >
          {children}
        </Component>
      </div>
    );
  })
) as OverridableComponent<TableRowTypeMap>;
