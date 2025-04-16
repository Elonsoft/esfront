import { EmptyStateCompactProps } from './EmptyStateCompact.types';

import clsx from 'clsx';
import { getEmptyStateUtilityClass } from './EmptyStateCompact.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

type EmptyStateCompactOwnerState = {
  classes?: EmptyStateCompactProps['classes'];
};

const useUtilityClasses = (ownerState: EmptyStateCompactOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getEmptyStateUtilityClass, classes);
};

const EmptyStateCompactRoot = styled(Typography, {
  name: 'ESEmptyStateCompact',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root];
  },
})(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  padding: '11px',
  borderRadius: '6px',
  border: `1px dashed ${theme.vars.palette.monoA.A300}`,
  color: theme.vars.palette.monoA.A550,
})) as typeof Typography;

/**
 * This component is a placeholder to use on pages without content.
 */
export const EmptyStateCompact = (inProps: EmptyStateCompactProps) => {
  const { children, className, ...props } = useDefaultProps({
    props: inProps,
    name: 'ESEmptyStateCompact',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <EmptyStateCompactRoot className={clsx(classes.root, className)} component="div" variant="caption">
      {children}
    </EmptyStateCompactRoot>
  );
};
