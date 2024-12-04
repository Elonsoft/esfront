import { FormControlLabelProps } from './FormControlLabel.types';

import clsx from 'clsx';
import { formControlLabelClasses, getFormControlLabelUtilityClass } from './FormControlLabel.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize } from '@mui/material';

import { checkboxClasses } from '../Checkbox';
import { radioClasses } from '../Radio';

type FormControlLabelOwnerState = {
  classes?: FormControlLabelProps['classes'];
  labelPlacement: NonNullable<FormControlLabelProps['labelPlacement']>;
};

const useUtilityClasses = (ownerState: FormControlLabelOwnerState) => {
  const { classes, labelPlacement } = ownerState;

  const slots = {
    root: ['root', `labelPlacement${capitalize(labelPlacement)}`],
    label: ['label'],
  };

  return composeClasses(slots, getFormControlLabelUtilityClass, classes);
};

const FormControlLabelRoot = styled('label', {
  name: 'ESFormControlLabel',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { labelPlacement },
    } = props;
    return [styles.root, styles[`labelPlacement${capitalize(labelPlacement)}`]];
  },
})(() => ({
  alignItems: 'center',
  cursor: 'pointer',
  display: 'flex',
  gap: '8px',

  [`&.${formControlLabelClasses.labelPlacementEnd}`]: {
    flexDirection: 'row',
  },

  [`&.${formControlLabelClasses.labelPlacementStart}`]: {
    flexDirection: 'row-reverse',
  },

  [`&.${formControlLabelClasses.labelPlacementBottom}`]: {
    flexDirection: 'column',
  },

  [`&.${formControlLabelClasses.labelPlacementTop}`]: {
    flexDirection: 'column-reverse',
  },

  [`& .${checkboxClasses.sizeLarge}, & .${radioClasses.sizeLarge}`]: {
    margin: '-9px',
  },
  [`& .${checkboxClasses.sizeMedium}, & .${radioClasses.sizeMedium}`]: {
    margin: '-9px',
  },
  [`& .${checkboxClasses.sizeSmall}, & .${radioClasses.sizeSmall}`]: {
    margin: '-9px',
  },
}));

const FormControlLabelLabel = styled('div', {
  name: 'ESFormControlLabel',
  slot: 'Label',
  overridesResolver: (_props, styles) => styles.root,
})(({ theme }) => ({
  ...theme.typography.subtitle1,
  color: theme.vars.palette.monoA.A900,
}));

/**
 * .
 */
export const FormControlLabel = (inProps: FormControlLabelProps) => {
  const {
    className,
    sx,
    control,
    label,
    labelPlacement = 'end',
    ...props
  } = useThemeProps({ props: inProps, name: 'ESFormControlLabel' });

  const ownerState = { ...props, labelPlacement };
  const classes = useUtilityClasses(ownerState);

  return (
    <FormControlLabelRoot className={clsx(classes.root, className)} sx={sx}>
      {control}
      <FormControlLabelLabel className={classes.label}>{label}</FormControlLabelLabel>
    </FormControlLabelRoot>
  );
};
