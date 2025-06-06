import { forwardRef, memo, useMemo } from 'react';

import { TableBodyProps } from './TableBody.types';

import clsx from 'clsx';
import { getTableBodyUtilityClass } from './TableBody.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { useForkRef } from '@mui/material/utils';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

import { useTableBodyContext } from './TableBody.context';

import { tableCellClasses, TableCellContext } from '../TableCell';
import { tableRowClasses } from '../TableRow';

type TableBodyOwnerState = {
  classes?: TableBodyProps['classes'];
  striped?: boolean;
};

const useUtilityClasses = (ownerState: TableBodyOwnerState) => {
  const { classes, striped } = ownerState;

  const slots = {
    root: ['root', striped && 'striped'],
    container: ['container'],
  };

  return composeClasses(slots, getTableBodyUtilityClass, classes);
};

const TableBodyRoot = styled('div', {
  name: 'ESTableBody',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.root, ownerState.striped && styles.striped];
  },
})<{ ownerState: TableBodyOwnerState }>(({ theme }) => ({
  overflow: 'auto',
  position: 'relative',
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
  zIndex: 1,
  scrollbarWidth: 'none',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  [`& .${tableRowClasses.root}:last-of-type`]: {
    [`& .${tableCellClasses.container}`]: {
      borderBottom: 0,
    },
  },

  variants: [
    {
      props: {
        striped: true,
      },
      style: {
        [`& .${tableRowClasses.root}:nth-of-type(odd)`]: {
          [`.${tableCellClasses.wrapper}`]: {
            backgroundColor: theme.vars.palette.monoA.A25,
          },
        },
      },
    },
  ] as never,
}));

const TableBodyContainer = styled('div', {
  name: 'ESTableBody',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container,
})({
  minWidth: '100%',
  width: 'fit-content',
});

const TABLE_CELL_CONTEXT_VALUE = { variant: 'body' as const };

export const TableBody = memo(
  forwardRef<HTMLDivElement, TableBodyProps>(function TableBody(inProps, ref) {
    const {
      children,
      className,
      sx,
      rowDividers = true,
      colDividers = false,
      striped,
      ...props
    } = useDefaultProps({
      props: inProps,
      name: 'ESTableBody',
    });

    const { setRef } = useTableBodyContext();

    const rootRef = useForkRef(setRef, ref);

    const value = useMemo(() => {
      return { ...TABLE_CELL_CONTEXT_VALUE, rowDividers, colDividers };
    }, [rowDividers, colDividers]);

    const ownerState = { striped, ...props };
    const classes = useUtilityClasses(ownerState);

    return (
      <TableCellContext.Provider value={value}>
        <TableBodyRoot
          ref={rootRef}
          className={clsx(classes.root, className)}
          ownerState={ownerState}
          role="rowgroup"
          sx={sx}
        >
          <TableBodyContainer className={classes.container}>{children}</TableBodyContainer>
        </TableBodyRoot>
      </TableCellContext.Provider>
    );
  })
);
