import { forwardRef } from 'react';

import { TableItemProps } from './TableItem.types';

import clsx from 'clsx';
import { getTableItemUtilityClass } from './TableItem.classes';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import composeClasses from '@mui/utils/composeClasses';

type TableItemOwnerState = {
  classes?: TableItemProps['classes'];
};

const useUtilityClasses = (ownerState: TableItemOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    content: ['content'],
    primary: ['primary'],
    secondary: ['secondary'],
  };

  return composeClasses(slots, getTableItemUtilityClass, classes);
};

const TableItemRoot = styled('div', {
  name: 'ESTableItem',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  overflow: 'hidden',
  display: 'flex',
  gap: '16px',
}));

const TableItemContent = styled('div', {
  name: 'ESTableItem',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content,
})(() => ({
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
}));

const TableItemPrimary = styled(Typography, {
  name: 'ESTableItem',
  slot: 'Primary',
  overridesResolver: (props, styles) => styles.primary,
})(() => ({
  wordBreak: 'break-word',
})) as typeof Typography;

const TableItemSecondary = styled(Typography, {
  name: 'ESTableItem',
  slot: 'Secondary',
  overridesResolver: (props, styles) => styles.secondary,
})(() => ({
  wordBreak: 'break-word',
})) as typeof Typography;

export const TableItem = forwardRef<HTMLDivElement, TableItemProps>(function TableItem(inProps, ref) {
  const { className, sx, avatar, primary, secondary, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTableItem',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableItemRoot ref={ref} className={clsx(classes.root, className)} sx={sx}>
      {avatar}
      <TableItemContent className={classes.content}>
        {!!primary && (
          <TableItemPrimary className={classes.primary} color="monoA.A900" component="div" variant="body100">
            {primary}
          </TableItemPrimary>
        )}
        {!!secondary && (
          <TableItemSecondary className={classes.secondary} color="monoA.A600" component="div" variant="caption">
            {secondary}
          </TableItemSecondary>
        )}
      </TableItemContent>
    </TableItemRoot>
  );
});
