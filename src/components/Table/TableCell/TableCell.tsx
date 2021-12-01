import { MouseEvent, useRef } from 'react';

import { TableCellProps } from './TableCell.types';

import clsx from 'clsx';
import { getTableCellUtilityClass } from './TableCell.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useTableCellContext } from './TableCell.context';

type TableCellOwnerState = {
  classes?: TableCellProps['classes'];
  variant: NonNullable<TableCellProps['variant']>;
  padding: NonNullable<TableCellProps['padding']>;
  colSpan?: number;
  overlap?: boolean;
};

const useUtilityClasses = (ownerState: TableCellOwnerState) => {
  const { classes, variant, padding, overlap } = ownerState;

  const slots = {
    root: [
      'root',
      variant,
      padding === 'none' && 'paddingNone',
      padding === 'normal' && 'paddingNormal',
      padding === 'checkbox' && 'paddingCheckbox',
      overlap && 'overlap'
    ],
    container: ['container'],
    content: ['content']
  };

  return composeClasses(slots, getTableCellUtilityClass, classes);
};

const TableCellRoot = styled('div', {
  name: 'ESTableCell',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      styles.root,
      styles[ownerState.variant],
      ownerState.padding === 'none' && 'paddingNone',
      ownerState.padding === 'normal' && 'paddingNormal',
      ownerState.padding === 'checkbox' && 'paddingCheckbox',
      ownerState.overlap && 'overlap'
    ];
  }
})<{ ownerState: TableCellOwnerState }>(({ theme, ownerState }) => ({
  position: 'relative',
  height: '100%',

  ...(ownerState.variant === 'head' && {
    ...theme.typography.caption,
    color: theme.palette.monoA.A600,
    backgroundColor: theme.palette.surface[100],
    position: 'relative',
    zIndex: 1,
    userSelect: 'none',
    height: '49px',

    ...(ownerState.overlap && {
      transform: 'translateY(-48px)'
    })
  }),

  ...(ownerState.variant === 'body' && {
    ...theme.typography.body100,
    color: theme.palette.monoA.A900,
    backgroundColor: theme.palette.surface[100],
    height: '57px',

    ...(ownerState.overlap && {
      transform: 'translateY(-57px)'
    })
  }),

  ...(ownerState.colSpan && {
    gridColumnEnd: `span ${ownerState.colSpan}`
  }),

  ...(ownerState.padding === 'normal' && {
    '& .ESTableCell-content': {
      padding: '0 16px'
    }
  }),
  ...(ownerState.padding === 'checkbox' && {
    '& .ESTableCell-content': {
      padding: '0 4px'
    },
    '&:first-of-type .ESTableCell-content': {
      paddingLeft: '16px'
    },
    '&:last-of-type .ESTableCell-content': {
      paddingRight: '16px'
    }
  })
}));

const TableCellContainer = styled('div', {
  name: 'ESTableCell',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container
})(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.monoA.A100}`,
  transition: `${theme.transitions.duration.short}ms`,
  width: '100%',
  height: '100%',
  display: 'flex'
}));

const TableCellContent = styled('div', {
  name: 'ESTableCell',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})<{ ownerState: TableCellOwnerState }>(({ theme }) => ({
  transition: `${theme.transitions.duration.short}ms`,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center'
}));

export const TableCell = (inProps: TableCellProps) => {
  const context = useTableCellContext();

  const {
    children,
    className,
    variant = context.variant,
    padding = 'normal',
    id,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESTableCell'
  });

  const ref = useRef<HTMLDivElement | null>(null);

  const ownerState = { variant, padding, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableCellRoot
      ref={ref}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      id={id}
      role={variant === 'head' ? 'columnheader' : 'cell'}
    >
      <TableCellContainer className={classes.container}>
        <TableCellContent className={classes.content} ownerState={ownerState}>
          {children}
        </TableCellContent>
      </TableCellContainer>
    </TableCellRoot>
  );
};
