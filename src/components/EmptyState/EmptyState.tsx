import { EmptyStateProps } from './EmptyState.types';

import clsx from 'clsx';
import { getEmptyStateUtilityClass } from './EmptyState.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type EmptyStateOwnerState = {
  classes?: EmptyStateProps['classes'];
};

const useUtilityClasses = (ownerState: EmptyStateOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    icon: ['icon'],
    text: ['text'],
    heading: ['heading'],
    subheading: ['subheading']
  };

  return composeClasses(slots, getEmptyStateUtilityClass, classes);
};

const EmptyStateRoot = styled('div', {
  name: 'ESEmptyState',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center'
}));

const EmptyStateIcon = styled('div', {
  name: 'ESEmptyState',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon
})(({ theme }) => ({
  color: theme.palette.monoA.A150,
  marginBottom: 12
}));

const EmptyStateText = styled('div', {
  name: 'ESEmptyState',
  slot: 'Text',
  overridesResolver: (props, styles) => styles.text
})(() => ({
  '&:not(:last-child)': {
    marginBottom: 20
  }
}));

const EmptyStateHeading = styled(Typography, {
  name: 'ESEmptyState',
  slot: 'Heading',
  overridesResolver: (props, styles) => styles.heading
})(({ theme }) => ({
  color: theme.palette.monoA.A900,
  display: 'block',
  '&:not(:last-child)': {
    marginBottom: 2
  }
}));

const EmptyStateSubheading = styled(Typography, {
  name: 'ESEmptyState',
  slot: 'Subheading',
  overridesResolver: (props, styles) => styles.subheading
})(({ theme }) => ({
  color: theme.palette.monoA.A600,
  display: 'block'
}));

/**
 * This component is a placeholder to use on pages without content.
 */
export const EmptyState = (inProps: EmptyStateProps) => {
  const { children, className, sx, icon, heading, subheading, ...props } = useThemeProps({
    props: inProps,
    name: 'ESEmptyState'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <EmptyStateRoot className={clsx(classes.root, className)} sx={sx}>
      {!!icon && (
        <EmptyStateIcon className={classes.icon} data-testid="icon">
          {icon}
        </EmptyStateIcon>
      )}
      <EmptyStateText className={classes.text}>
        {!!heading && (
          <EmptyStateHeading className={classes.heading} variant="body200">
            {heading}
          </EmptyStateHeading>
        )}
        {!!subheading && (
          <EmptyStateSubheading className={classes.subheading} variant="caption">
            {subheading}
          </EmptyStateSubheading>
        )}
      </EmptyStateText>
      {children}
    </EmptyStateRoot>
  );
};
