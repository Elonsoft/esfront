import { AutocompleteHeaderProps } from './AutocompleteHeader.types';

import clsx from 'clsx';
import { getAutocompleteHeaderUtilityClass } from './AutocompleteHeader.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
type AutocompleteHeaderOwnerState = {
  classes?: AutocompleteHeaderProps['classes'];
};

const useUtilityClasses = (ownerState: AutocompleteHeaderOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getAutocompleteHeaderUtilityClass, classes);
};

const AutocompleteHeaderRoot = styled('div', {
  name: 'ESAutocompleteHeader',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.monoA.A600,
  padding: '6px 16px 5px',
  borderBottom: `1px solid ${theme.palette.monoA.A100}`
}));

export const AutocompleteHeader = (inProps: AutocompleteHeaderProps) => {
  const {
    className,
    sx,

    children,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAutocompleteHeader'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AutocompleteHeaderRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </AutocompleteHeaderRoot>
  );
};
