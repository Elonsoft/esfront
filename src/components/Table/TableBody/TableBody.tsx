import { memo } from 'react';

import { TableBodyProps } from './TableBody.types';

import clsx from 'clsx';
import { getTableBodyUtilityClass } from './TableBody.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useTableBodyContext } from './TableBody.context';

import { useTableContext } from '../Table.context';
import { tableCellClasses, TableCellContext } from '../TableCell';
import { tableRowClasses } from '../TableRow';

type TableBodyOwnerState = {
  classes?: TableBodyProps['classes'];
};

const useUtilityClasses = (ownerState: TableBodyOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    container: ['container']
  };

  return composeClasses(slots, getTableBodyUtilityClass, classes);
};

const TableBodyRoot = styled('div', {
  name: 'ESTableBody',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  overflow: 'auto',
  position: 'relative',
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
  zIndex: 1,
  scrollbarWidth: 'none',

  '&::-webkit-scrollbar': {
    display: 'none'
  },

  [`& .${tableRowClasses.root}:last-of-type`]: {
    [`& .${tableCellClasses.container}`]: {
      borderBottom: 0
    }
  }
}));

const TableBodyContainer = styled('div', {
  name: 'ESTableBody',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container
})(() => ({
  display: 'grid',
  minWidth: '100%',
  width: 'fit-content'
}));

const TABLE_CELL_CONTEXT_VALUE = { variant: 'body' as const };

export const TableBody = memo(function TableBody(inProps: TableBodyProps) {
  const { children, className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTableBody'
  });

  const { columns } = useTableContext();
  const { setRef } = useTableBodyContext();

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableCellContext.Provider value={TABLE_CELL_CONTEXT_VALUE}>
      <TableBodyRoot ref={setRef} className={clsx(classes.root, className)} role="rowgroup" sx={sx}>
        <TableBodyContainer className={classes.container} style={{ gridTemplateColumns: columns.join(' ') }}>
          {children}
        </TableBodyContainer>
      </TableBodyRoot>
    </TableCellContext.Provider>
  );
});
