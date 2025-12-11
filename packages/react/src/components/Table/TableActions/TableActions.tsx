import { forwardRef, memo } from 'react';

import { TableActionsProps } from './TableActions.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

/**
 * This component displays actions for the selected table rows.
 */
export const TableActions = memo(
  forwardRef<HTMLDivElement, TableActionsProps>(function TableActions(inProps, ref) {
    const { className, style, label, count, children } = useDefaultProps({
      props: inProps,
      name: 'ESTableActions',
    });

    return (
      <div ref={ref} className={clsx('es-table-actions', className)} style={style}>
        <div className="es-table-actions__text body200">
          {label} {count}
        </div>
        <div className="es-table-actions__children">{children}</div>
      </div>
    );
  })
);
