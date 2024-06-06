import { memo, MutableRefObject } from 'react';

import { TableTextProps } from './TableText.types';

import clsx from 'clsx';
import { getTableTextUtilityClass } from './TableText.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { TooltipEllipsis, TooltipEllipsisProps } from '../../TooltipEllipsis';

type TableTextOwnerState = {
  classes?: TableTextProps['classes'];
};

const useUtilityClasses = (ownerState: TableTextOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    tooltip: ['tooltip'],
  };

  return composeClasses(slots, getTableTextUtilityClass, classes);
};

const TableTextRoot = styled('div', {
  name: 'ESTableText',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  minWidth: 0,
}));

const TableTextTooltip = styled(
  ({ className, ...props }: TooltipEllipsisProps) => <TooltipEllipsis {...props} classes={{ popper: className }} />,
  {
    name: 'ESTableText',
    slot: 'Tooltip',
    overridesResolver: (props, styles) => styles.tooltip,
  }
)({});

export const TableText = memo(function TableText(inProps: TableTextProps) {
  const {
    children,
    className,
    sx,
    tooltip = true,
    TooltipProps,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESTableText',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  if (tooltip) {
    return (
      <TableTextTooltip
        arrow
        disableInteractive
        className={clsx(classes.tooltip)}
        placement="top"
        title={children || false}
        {...TooltipProps}
      >
        {({ ref }) => (
          <TableTextRoot
            ref={ref as MutableRefObject<HTMLDivElement | null>}
            className={clsx(classes.root, className)}
            sx={sx}
          >
            {children}
          </TableTextRoot>
        )}
      </TableTextTooltip>
    );
  }

  return (
    <TableTextRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </TableTextRoot>
  );
});
