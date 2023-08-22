import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';

import { TableProps } from './Table.types';

import clsx from 'clsx';
import { getTableUtilityClass } from './Table.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { useForkRef } from '@mui/material/utils';

import { TableContext } from './Table.context';
import { tableBodyClasses, TableBodyContext } from './TableBody';
import { TableCellContext } from './TableCell';
import { TableHeadContext } from './TableHead';
import { TableScrollbarContext } from './TableScrollbar';

import { useLatest, useResizeObserver, useScrollSync } from '../../hooks';

type TableOwnerState = {
  classes?: TableProps['classes'];
};

const useUtilityClasses = (ownerState: TableOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getTableUtilityClass, classes);
};

const TableRoot = styled('div', {
  name: 'ESTable',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  backgroundColor: theme.palette.surface[100],
  boxShadow: theme.palette.shadow.down[100],
  borderRadius: '6px'
}));

const TABLE_CELL_CONTEXT_VALUE = { variant: 'body' as const };

export const Table = forwardRef<HTMLDivElement, TableProps>((inProps, inRef) => {
  const { children, className, columns, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTable'
  });

  const ref = useRef<HTMLDivElement | null>(null);
  const rootRef = useForkRef(ref, inRef);

  const [bodyRef, setBodyRef] = useState<HTMLDivElement | null>(null);
  const [headRef, setHeadRef] = useState<HTMLDivElement | null>(null);

  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const [scrollbarRef, setScrollbarRef] = useState<HTMLDivElement | null>(null);

  const value = useMemo(() => {
    return { columns };
  }, [columns]);

  const bodyValue = useMemo(() => {
    return { ref: bodyRef, setRef: setBodyRef };
  }, [bodyRef]);

  const headValue = useMemo(() => {
    return { ref: headRef, setRef: setHeadRef };
  }, [headRef]);

  const scrollbarValue = useMemo(() => {
    return { width: scrollbarWidth, setWidth: setScrollbarWidth, ref: scrollbarRef, setRef: setScrollbarRef };
  }, [scrollbarWidth, scrollbarRef]);

  const onResizeLatest = useLatest(() => {
    if (ref.current) {
      const body = ref.current.querySelector(`.${tableBodyClasses.root}`);
      if (body) {
        setScrollbarWidth(body.scrollWidth);
      }
    }
  });

  useResizeObserver(ref, () => {
    onResizeLatest.current();
  });

  useEffect(() => {
    onResizeLatest.current();
  }, [columns]);

  useScrollSync({ current: bodyRef }, { current: headRef }, { current: scrollbarRef });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableContext.Provider value={value}>
      <TableCellContext.Provider value={TABLE_CELL_CONTEXT_VALUE}>
        <TableBodyContext.Provider value={bodyValue}>
          <TableHeadContext.Provider value={headValue}>
            <TableScrollbarContext.Provider value={scrollbarValue}>
              <TableRoot ref={rootRef} className={clsx(classes.root, className)} role="table" sx={sx}>
                {children}
              </TableRoot>
            </TableScrollbarContext.Provider>
          </TableHeadContext.Provider>
        </TableBodyContext.Provider>
      </TableCellContext.Provider>
    </TableContext.Provider>
  );
});

Table.displayName = 'Table';
