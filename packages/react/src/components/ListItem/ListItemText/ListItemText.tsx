import { ListItemTextProps } from './ListItemText.types';

import clsx from 'clsx';
import { getListItemTextUtilityClass, listItemTextClasses } from './ListItemText.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

type ListItemTextOwnerState = {
  classes?: ListItemTextProps['classes'];
  inset?: boolean;
  primary?: boolean;
  secondary?: boolean;
};

const useUtilityClasses = (ownerState: ListItemTextOwnerState) => {
  const { classes, inset, primary, secondary } = ownerState;

  const slots = {
    root: ['root', inset && 'inset', primary && secondary && 'multiline'],
    primary: ['primary'],
    secondary: ['secondary'],
  };

  return composeClasses(slots, getListItemTextUtilityClass, classes);
};

const ListItemTextRoot = styled('div', {
  name: 'ESListItemText',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      { [`& .${listItemTextClasses.primary}`]: styles.primary },
      { [`& .${listItemTextClasses.secondary}`]: styles.secondary },
      styles.root,
      ownerState.inset && styles.inset,
      ownerState.primary && ownerState.secondary && styles.multiline,
    ];
  },
})(() => ({
  flex: '1 1 auto',
  flexShrink: 0,
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
}));

export const ListItemText = (inProps: ListItemTextProps) => {
  const {
    className,
    children,

    disableTypography,
    inset,
    primary: inPrimary = null,
    primaryTypographyProps,
    secondary: inSecondary = null,
    secondaryTypographyProps,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESListItemText',
  });
  let primary = inPrimary === null ? children : inPrimary;
  let secondary = inSecondary;

  const ownerState = { ...props, inset, primary: !!primary, secondary: !!secondary };
  const classes = useUtilityClasses(ownerState);

  if (primary !== null && !disableTypography) {
    primary = (
      <Typography
        className={classes.primary}
        color="inherit"
        component={primaryTypographyProps?.variant ? undefined : 'span'}
        display="block"
        variant="inherit"
        {...primaryTypographyProps}
      >
        {primary}
      </Typography>
    );
  }

  if (secondary !== null && !disableTypography) {
    secondary = (
      <Typography
        className={classes.secondary}
        color="monoA.A600"
        display="block"
        variant="caption"
        {...secondaryTypographyProps}
      >
        {secondary}
      </Typography>
    );
  }

  return (
    <ListItemTextRoot className={clsx(classes.root, className)}>
      {primary}
      {secondary}
    </ListItemTextRoot>
  );
};
