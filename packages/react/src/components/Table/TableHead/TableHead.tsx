import { memo, useState } from 'react';

import { TableHeadProps } from './TableHead.types';

import clsx from 'clsx';
import { getTableHeadUtilityClass } from './TableHead.classes';

import { styled, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';

import { useTableHeadContext } from './TableHead.context';

import { useIntersectionObserver } from '../../../hooks';
import { TableCellContext } from '../TableCell';

type TableHeadOwnerState = {
  classes?: TableHeadProps['classes'];
  isSticky: boolean;
  isStuck: boolean;
};

const useUtilityClasses = (ownerState: TableHeadOwnerState) => {
  const { classes, isSticky, isStuck } = ownerState;

  const slots = {
    root: ['root', isSticky && 'sticky', isSticky && isStuck && 'stuck'],
    container: ['container'],
  };

  return composeClasses(slots, getTableHeadUtilityClass, classes);
};

const TableHeadRoot = styled('div', {
  name: 'ESTableHead',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { isSticky, isStuck },
    } = props;
    return [styles.root, isSticky && styles.sticky, isSticky && isStuck && styles.stuck];
  },
})<{ ownerState: TableHeadOwnerState }>({
  overflow: 'auto',
  position: 'relative',
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
  zIndex: 2,
  borderTopLeftRadius: '6px',
  borderTopRightRadius: '6px',
  scrollbarWidth: 'none',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  variants: [
    {
      props: {
        isSticky: true,
      },
      style: {
        position: 'sticky',
        top: 'var(--ESTableHead-top)',
      },
    },
    {
      props: {
        isSticky: true,
        isStuck: true,
      },
      style: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      },
    },
  ],
});

const TableHeadContainer = styled('div', {
  name: 'ESTableBody',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container,
})(() => ({
  minWidth: '100%',
  width: 'fit-content',
}));

const TABLE_CELL_CONTEXT_VALUE = { variant: 'head' as const };

export const TableHead = memo(function TableHead(inProps: TableHeadProps) {
  const { children, className, sticky, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTableHead',
  });

  const [isStuck, setStuck] = useState(false);

  const { ref, setRef } = useTableHeadContext();

  useIntersectionObserver(
    { current: ref },
    (entries) => {
      setStuck(entries[0].intersectionRatio < 1);
    },
    { threshold: [1], rootMargin: `-${(sticky || 0) + 1}px 0px 0px` }
  );

  const ownerState = { isSticky: sticky !== undefined, isStuck: sticky !== undefined && isStuck, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableCellContext.Provider value={TABLE_CELL_CONTEXT_VALUE}>
      <TableHeadRoot
        ref={setRef}
        className={clsx(classes.root, className)}
        ownerState={ownerState}
        role="rowgroup"
        style={sticky === undefined ? undefined : ({ '--ESTableHead-top': `${sticky || 0}px` } as React.CSSProperties)}
        sx={sx}
      >
        <TableHeadContainer className={classes.container}>{children}</TableHeadContainer>
      </TableHeadRoot>
    </TableCellContext.Provider>
  );
});
