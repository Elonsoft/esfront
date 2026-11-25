'use client';

import { memo, RefAttributes } from 'react';

import { TableActionsProps } from './TableActions.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

import { useLocaleDefaultProps } from '@esfront/react/locale';

/**
 * This component displays actions for the selected table rows.
 * @see `Table`
 */
export const TableActions = memo(function TableActions({
  ref,
  ...inProps
}: TableActionsProps & RefAttributes<HTMLDivElement>) {
  const resolvedProps = useDefaultProps({
    props: inProps,
    name: 'ESTableActions',
  });

  const { className, style, label, count, children } = useLocaleDefaultProps({
    props: resolvedProps,
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
});
