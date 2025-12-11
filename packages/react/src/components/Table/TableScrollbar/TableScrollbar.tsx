import { forwardRef, memo } from 'react';

import { TableScrollbarProps } from './TableScrollbar.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { useForkRef } from '@mui/material/utils';

import { useTableScrollbarContext } from './TableScrollbar.context';

export const TableScrollbar = memo(
  forwardRef<HTMLDivElement, TableScrollbarProps>(function TableScrollbar(inProps, inRef) {
    const { className, style } = useDefaultProps({
      props: inProps,
      name: 'ESTableScrollbar',
    });

    const { width, setRef } = useTableScrollbarContext();

    const rootRef = useForkRef(setRef, inRef);

    return (
      <div ref={rootRef} className={clsx('es-table-scrollbar', 'scrollbar-thin-mono-a', className)} style={style}>
        <div style={{ width: `${width}px`, height: '1px' }} />
      </div>
    );
  })
);
