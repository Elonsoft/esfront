import { forwardRef, memo } from 'react';

import { TableActionsProps } from './TableActions.types';

import clsx from 'clsx';
import { getTableActionsUtilityClass } from './TableActions.classes';

import { styled } from '@mui/material-pigment-css';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { dividerClasses } from '@mui/material';
import Typography from '@mui/material/Typography';
import composeClasses from '@mui/utils/composeClasses';

import { buttonClasses } from '../../Button';

type TableActionsOwnerState = {
  classes?: TableActionsProps['classes'];
};

const useUtilityClasses = (ownerState: TableActionsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    text: ['text'],
    children: ['children'],
  };

  return composeClasses(slots, getTableActionsUtilityClass, classes);
};

const TableActionsRoot = styled('div', {
  name: 'ESTableActions',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.vars.palette.secondary.A100,
  display: 'flex',
  padding: 8,
  paddingLeft: 24,
}));

const TableActionsText = styled(Typography, {
  name: 'ESTableActions',
  slot: 'Text',
  overridesResolver: (props, styles) => styles.text,
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A900,
  fontWeight: 500,
  marginRight: 'auto',
}));

const TableActionsChildren = styled('div', {
  name: 'ESTableActions',
  slot: 'Children',
  overridesResolver: (props, styles) => styles.children,
})(({ theme }) => ({
  alignItems: 'center',
  alignSelf: 'stretch',
  display: 'grid',
  gap: 2,
  gridAutoFlow: 'column',

  [`& .${buttonClasses.root}`]: {
    '--icon': theme.vars.palette.monoA.A700,
  },
  [`& .${dividerClasses.root}`]: {
    backgroundColor: theme.vars.palette.monoA.A200,
    margin: '0 6px',
  },
}));

/**
 * This component displays actions for the selected table rows.
 */
export const TableActions = memo(
  forwardRef<HTMLDivElement, TableActionsProps>(function TableActions(inProps, ref) {
    const { className, sx, label, count, children, ...props } = useDefaultProps({
      props: inProps,
      name: 'ESTableActions',
    });

    const ownerState = { ...props };
    const classes = useUtilityClasses(ownerState);

    return (
      <TableActionsRoot ref={ref} className={clsx(classes.root, className)} sx={sx}>
        <TableActionsText className={classes.text} variant="body200">
          {label} {count}
        </TableActionsText>
        <TableActionsChildren className={classes.children}>{children}</TableActionsChildren>
      </TableActionsRoot>
    );
  })
);
