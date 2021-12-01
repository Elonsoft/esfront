import { useRef } from 'react';

import { TableTextProps } from './TableText.types';

import clsx from 'clsx';
import { getTableTextUtilityClass } from './TableText.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type TableTextOwnerState = {
  classes?: TableTextProps['classes'];
};

const useUtilityClasses = (ownerState: TableTextOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getTableTextUtilityClass, classes);
};

const TableTextRoot = styled('div', {
  name: 'ESTableText',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}));

export const TableText = (inProps: TableTextProps) => {
  const { children, className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTableText'
  });

  const ref = useRef<HTMLDivElement | null>(null);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableTextRoot ref={ref} className={clsx(classes.root, className)} sx={sx}>
      {children}
    </TableTextRoot>
  );
};
