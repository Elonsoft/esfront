import { forwardRef } from 'react';

import { TableItemProps } from './TableItem.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const TableItem = forwardRef<HTMLDivElement, TableItemProps>(function TableItem(inProps, ref) {
  const { className, style, avatar, primary, secondary } = useDefaultProps({
    props: inProps,
    name: 'ESTableItem',
  });

  return (
    <div ref={ref} className={clsx('es-table-item', className)} style={style}>
      {avatar}
      <div className="es-table-item__content">
        {!!primary && <div className="es-table-item__primary body100">{primary}</div>}
        {!!secondary && <div className="es-table-item__secondary caption">{secondary}</div>}
      </div>
    </div>
  );
});
