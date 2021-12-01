import { useRef } from 'react';

import { TableFootProps } from './TableFoot.types';

import clsx from 'clsx';
import { getTableFootUtilityClass } from './TableFoot.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useSticky } from '../../../hooks';

type TableFootOwnerState = {
  classes?: TableFootProps['classes'];
  sticky?: number;
};

const useUtilityClasses = (ownerState: TableFootOwnerState) => {
  const { classes, sticky } = ownerState;

  const slots = {
    root: ['root', sticky !== undefined && 'sticky']
  };

  return composeClasses(slots, getTableFootUtilityClass, classes);
};

const TableFootRoot = styled('div', {
  name: 'ESTableFoot',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [styles.root, ownerState.sticky !== undefined && 'sticky'];
  }
})<{ ownerState: TableFootOwnerState }>(({ theme }) => ({
  backgroundColor: theme.palette.surface[100],
  borderTop: `1px solid ${theme.palette.monoA.A100}`,
  position: 'relative',
  zIndex: 1
}));

export const TableFoot = (inProps: TableFootProps) => {
  const { children, className, sticky, relativeTo, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTableFoot'
  });

  const ref = useRef<HTMLDivElement | null>(null);
  useSticky(ref, { bottom: sticky, relativeTo });

  const ownerState = { sticky, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableFootRoot ref={ref} className={clsx(classes.root, className)} ownerState={ownerState}>
      {children}
    </TableFootRoot>
  );
};
