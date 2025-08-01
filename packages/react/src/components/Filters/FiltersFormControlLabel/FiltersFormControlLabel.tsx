import { FiltersFormControlLabelProps } from './FiltersFormControlLabel.types';

import clsx from 'clsx';
import { getFiltersFormControlLabelUtilityClass } from './FiltersFormControlLabel.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

import { checkboxClasses } from '../../Checkbox';
import { FormControlLabel, formControlLabelClasses } from '../../FormControlLabel';
import { radioClasses } from '../../Radio';

type FiltersFormControlLabelOwnerState = {
  classes?: FiltersFormControlLabelProps['classes'];
};

const useUtilityClasses = (ownerState: FiltersFormControlLabelOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    count: ['count'],
  };

  return composeClasses(slots, getFiltersFormControlLabelUtilityClass, classes);
};

const FiltersFormControlLabelRoot = styled(FormControlLabel, {
  name: 'ESFiltersFormControlLabel',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root,
})({
  minHeight: '32px',

  [`&.${formControlLabelClasses.root}`]: {
    [`& .${checkboxClasses.sizeLarge}, & .${radioClasses.sizeLarge}`]: {
      padding: '6px',
      margin: '-6px',
    },
    [`& .${checkboxClasses.sizeMedium}, & .${radioClasses.sizeMedium}`]: {
      padding: '6px',
      margin: '-6px',
    },
    [`& .${checkboxClasses.sizeSmall}, & .${radioClasses.sizeSmall}`]: {
      padding: '8px',
      margin: '-8px',
    },
  },
});

const FiltersFormControlLabelCount = styled('span', {
  name: 'ESFiltersFormControlLabel',
  slot: 'Count',
  overridesResolver: (_props, styles) => styles.count,
})(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.vars.palette.monoA.A600,
  lineHeight: 'inherit',
  marginLeft: '8px',
}));

export const FiltersFormControlLabel = (inProps: FiltersFormControlLabelProps) => {
  const {
    className,
    classes: inClasses,
    label,
    count,
    ...props
  } = useDefaultProps({ props: inProps, name: 'ESFiltersFormControlLabel' });

  const ownerState = { classes: inClasses };
  const classes = useUtilityClasses(ownerState);

  return (
    <FiltersFormControlLabelRoot
      className={clsx(classes.root, className)}
      label={
        <>
          {label}
          <FiltersFormControlLabelCount className={classes.count}>{count}</FiltersFormControlLabelCount>
        </>
      }
      {...props}
      slotProps={{ ...props.slotProps, typography: { variant: 'body100', ...props.slotProps?.typography } }}
    />
  );
};
