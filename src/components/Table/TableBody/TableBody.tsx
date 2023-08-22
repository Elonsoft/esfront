import { TableBodyProps } from './TableBody.types';

import clsx from 'clsx';
import { getTableBodyUtilityClass } from './TableBody.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useTableBodyContext } from './TableBody.context';

import { tableCellClasses, TableCellContext } from '../TableCell';
import { tableRowClasses } from '../TableRow';

type TableBodyOwnerState = {
  classes?: TableBodyProps['classes'];
};

const useUtilityClasses = (ownerState: TableBodyOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
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
  zIndex: 1,
  scrollbarWidth: 'none',

  '&::-webkit-scrollbar': {
    display: 'none'
  },

  [`& >  .${tableRowClasses.root}:last-of-type`]: {
    [`& .${tableCellClasses.container}`]: {
      borderBottom: 0
    }
  }
}));

const TABLE_CELL_CONTEXT_VALUE = { variant: 'body' as const };

export const TableBody = (inProps: TableBodyProps) => {
  const { children, className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTableBody'
  });

  const { setRef } = useTableBodyContext();

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableCellContext.Provider value={TABLE_CELL_CONTEXT_VALUE}>
      <TableBodyRoot ref={setRef} className={clsx(classes.root, className)} role="rowgroup" sx={sx}>
        {children}
      </TableBodyRoot>
    </TableCellContext.Provider>
  );
};
