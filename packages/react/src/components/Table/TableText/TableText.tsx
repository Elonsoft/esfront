'use client';

import { memo, RefAttributes, RefObject } from 'react';

import { TableTextProps } from './TableText.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';
import { TooltipEllipsis } from '../../TooltipEllipsis';

/**
 * @see `Table`
 */
export const TableText = memo(function TableText({ ref, ...inProps }: TableTextProps & RefAttributes<HTMLDivElement>) {
  const {
    children,
    className,
    style,
    tooltip = true,
    TooltipProps,
  } = useDefaultProps({
    props: inProps,
    name: 'ESTableText',
  });

  if (tooltip) {
    return (
      <TooltipEllipsis
        arrow
        disableInteractive
        placement="top"
        title={children || false}
        {...TooltipProps}
        slotProps={{
          ...TooltipProps?.slotProps,
          popper: {
            ...TooltipProps?.slotProps?.popper,
            className: clsx('es-table-text__tooltip', TooltipProps?.slotProps?.popper?.className),
          },
        }}
      >
        {({ ref }) => (
          <div ref={ref as RefObject<HTMLDivElement | null>} className={clsx('es-table-text', className)} style={style}>
            {children}
          </div>
        )}
      </TooltipEllipsis>
    );
  }

  return (
    <div ref={ref} className={clsx('es-table-text', className)} style={style}>
      {children}
    </div>
  );
});
