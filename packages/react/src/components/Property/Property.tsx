import { PropertyProps } from './Property.types';

import clsx from 'clsx';
import { getPropertyUtilityClass, propertyClasses } from './Property.classes';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize } from '@mui/material';
import composeClasses from '@mui/utils/composeClasses';

type PropertyOwnerState = {
  classes?: PropertyProps['classes'];
  size: NonNullable<PropertyProps['size']>;
};

const useUtilityClasses = (ownerState: PropertyOwnerState) => {
  const { classes, size } = ownerState;

  const slots = {
    root: ['root', `size${capitalize(size)}`],
    name: ['name'],
    value: ['value'],
    divider: ['divider'],
  };

  return composeClasses(slots, getPropertyUtilityClass, classes);
};

const PropertyRoot = styled('div', {
  name: 'ESProperty',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { size },
    } = props;
    return [styles.root, styles[`size${capitalize(size)}`]];
  },
})<{ ownerState: PropertyOwnerState }>(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  gap: '8px',
  padding: '2px 0',

  variants: [
    {
      props: {
        size: 's',
      },
      style: {
        [`& .${propertyClasses.value}`]: {
          ...theme.typography.body100,
        },
      },
    },
    {
      props: {
        size: 'm',
      },
      style: {
        [`& .${propertyClasses.value}`]: {
          ...theme.typography.body200,
        },
      },
    },
  ],
}));

const PropertyName = styled('div', {
  name: 'ESProperty',
  slot: 'Name',
  overridesResolver: (props, styles) => styles.name,
})(({ theme }) => ({
  ...theme.typography.body100,
  alignItems: 'center',
  color: theme.vars.palette.monoA.A600,
  display: 'flex',
  gap: '4px',
}));

const PropertyValue = styled('div', {
  name: 'ESProperty',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.value,
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A800,
}));

const PropertyDivider = styled('div', {
  name: 'ESProperty',
  slot: 'Divider',
  overridesResolver: (props, styles) => styles.divider,
})(({ theme }) => ({
  borderBottom: `2px dotted ${theme.vars.palette.monoA.A150}`,
  flexGrow: 1,
}));

/**
 * Display attributes are characteristics that describe a entity.
 */
export const Property = (inProps: PropertyProps) => {
  const { name, value, className, sx, size = 'm', ...props } = useThemeProps({ props: inProps, name: 'ESProperty' });

  const ownerState = { ...props, size };
  const classes = useUtilityClasses(ownerState);

  return (
    <PropertyRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
      <PropertyName className={classes.name}>{name}</PropertyName>
      <PropertyDivider className={classes.divider} />
      <PropertyValue className={classes.value}>{value}</PropertyValue>
    </PropertyRoot>
  );
};
