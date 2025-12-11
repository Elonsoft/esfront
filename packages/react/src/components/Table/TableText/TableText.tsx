import { forwardRef, memo, MutableRefObject } from 'react';

import { TableTextProps } from './TableText.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { TooltipEllipsis } from '../../TooltipEllipsis';

export const TableText = memo(
  forwardRef<HTMLDivElement, TableTextProps>(function TableText(inProps, ref) {
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
            <div
              ref={ref as MutableRefObject<HTMLDivElement | null>}
              className={clsx('es-table-text', className)}
              style={style}
            >
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
  })
);
