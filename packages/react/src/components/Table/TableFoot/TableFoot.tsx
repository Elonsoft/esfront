import { memo, useRef, useState } from 'react';

import { TableFootProps } from './TableFoot.types';

import clsx from 'clsx';
import { getTableFootUtilityClass } from './TableFoot.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useIntersectionObserver } from '../../../hooks';

type TableFootOwnerState = {
  classes?: TableFootProps['classes'];
  isSticky: boolean;
  isStuck: boolean;
};

const useUtilityClasses = (ownerState: TableFootOwnerState) => {
  const { classes, isSticky, isStuck } = ownerState;

  const slots = {
    root: ['root', isSticky && 'sticky', isSticky && isStuck && 'stuck'],
  };

  return composeClasses(slots, getTableFootUtilityClass, classes);
};

const TableFootRoot = styled('div', {
  name: 'ESTableFoot',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { isSticky, isStuck },
    } = props;
    return [styles.root, isSticky && styles.sticky, isSticky && isStuck && styles.stuck];
  },
})<{ ownerState: TableFootOwnerState }>(({ theme }) => ({
  backgroundColor: theme.vars.palette.surface[100],
  borderTop: `1px solid ${theme.vars.palette.monoA.A100}`,
  position: 'relative',
  zIndex: 2,
  borderBottomLeftRadius: '6px',
  borderBottomRightRadius: '6px',

  variants: [
    {
      props: {
        isSticky: true,
      },
      style: {
        position: 'sticky',
        bottom: 'var(--ESTableFoot-bottom)',
      },
    },
    {
      props: {
        isSticky: true,
        isStuck: true,
      },
      style: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
  ],
}));

export const TableFoot = memo(function TableFoot(inProps: TableFootProps) {
  const { children, className, sticky, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTableFoot',
  });

  const [isStuck, setStuck] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver(
    ref,
    (entries) => {
      setStuck(entries[0].intersectionRatio < 1);
    },
    { threshold: [1], rootMargin: `0px 0px -${(sticky || 0) + 1}px` }
  );

  const ownerState = { isSticky: sticky !== undefined, isStuck: sticky !== undefined && isStuck, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableFootRoot
      ref={ref}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      style={sticky === undefined ? undefined : ({ '--ESTableFoot-bottom': `${sticky || 0}px` } as React.CSSProperties)}
      sx={sx}
    >
      {children}
    </TableFootRoot>
  );
});
