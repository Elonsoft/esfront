import { forwardRef, memo } from 'react';

import { TableRowProps, TableRowTypeMap } from './TableRow.types';

import clsx from 'clsx';
import { getTableRowUtilityClass, tableRowClasses } from './TableRow.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { styled } from '@mui/material-pigment-css';
import Box from '@mui/material-pigment-css/Box';
import composeClasses from '@mui/utils/composeClasses';

import { useTableContext } from '../Table.context';
import { tableCellClasses } from '../TableCell';

type TableRowOwnerState = {
  classes?: TableRowProps['classes'];
  hover?: boolean;
  selected?: boolean;
};

const useUtilityClasses = (ownerState: TableRowOwnerState) => {
  const { classes, hover, selected } = ownerState;

  const slots = {
    root: ['root', hover && 'hover', selected && 'selected'],
    content: ['content'],
    overlap: ['overlap'],
  };

  return composeClasses(slots, getTableRowUtilityClass, classes);
};

const TableRowRoot = styled('div', {
  name: 'ESTableRow',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [styles.root, ownerState.hover && styles.hover, ownerState.selected && styles.selected];
  },
})<{ ownerState: TableRowOwnerState }>(({ theme }) => ({
  variants: [
    {
      props: {
        selected: true,
      },
      style: {
        [`& .${tableCellClasses.container}`]: {
          backgroundColor: theme.vars.palette.secondary.A100,
        },
      },
    },
    {
      props: {
        hover: true,
      },
      style: {
        '&:hover': {
          [`& .${tableCellClasses.content}`]: {
            backgroundColor: theme.vars.palette.monoA.A50,
          },
        },
      },
    },
  ] as never,
}));

const TableRowContent = styled(Box, {
  name: 'ESTableRow',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content,
})<{ ownerState: TableRowOwnerState }>(({ theme }) => ({
  display: 'grid',
  gridAutoRows: 'max-content',
  minWidth: '100%',
  border: 0,
  padding: 0,
  margin: 0,
  background: 'none',
  outline: 'none',
  textDecoration: 'none',

  variants: [
    {
      props: {
        hover: true,
      },
      style: {
        cursor: 'pointer',

        '&:focus-visible': {
          [`&, & + .${tableRowClasses.overlap}`]: {
            [`& .${tableCellClasses.content}.${tableCellClasses.content}`]: {
              backgroundColor: theme.vars.palette.monoA.A50,
            },
          },
        },

        '&:active': {
          [`&, & + .${tableRowClasses.overlap}`]: {
            [`& .${tableCellClasses.content}.${tableCellClasses.content}`]: {
              backgroundColor: theme.vars.palette.monoA.A100,
            },
          },
        },
      },
    },
  ] as never,
}));

export const TableRow = memo(
  forwardRef(function TableRow(inProps: TableRowProps, ref) {
    const { children, className, sx, selected, hover, ...props } = useDefaultProps({
      props: inProps,
      name: 'ESTableRow',
    });

    const { columns } = useTableContext();

    const ownerState = { selected, hover, ...props };
    const classes = useUtilityClasses(ownerState);

    return (
      <TableRowRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
        <TableRowContent
          ref={ref}
          className={classes.content}
          ownerState={ownerState}
          role="row"
          style={{ gridTemplateColumns: columns.join(' ') }}
          {...props}
        >
          {children}
        </TableRowContent>
      </TableRowRoot>
    );
  })
) as OverridableComponent<TableRowTypeMap>;
