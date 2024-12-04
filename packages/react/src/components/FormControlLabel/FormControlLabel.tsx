import { FormControlLabelProps } from './FormControlLabel.types';

import clsx from 'clsx';
import { formControlLabelClasses, getFormControlLabelUtilityClass } from './FormControlLabel.classes';

import { appendOwnerState, unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize, Typography } from '@mui/material';

import { checkboxClasses } from '../Checkbox';
import { radioClasses } from '../Radio';
import { switchBaseClasses } from '../SwitchBase';

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
})<{ ownerState: FormControlLabelOwnerState }>(({ theme }) => ({
  WebkitTapHighlightColor: 'transparent',
  alignItems: 'center',
  cursor: 'pointer',
  display: 'inline-flex',
  gap: '8px',
  verticalAlign: 'middle',

  [`& .${switchBaseClasses.root}`]: {
    flexShrink: 0,
  },

  [`&:has(.Mui-disabled)`]: {
    cursor: 'not-allowed',

    [`& .${formControlLabelClasses.label}`]: {
      color: theme.vars.palette.monoA.A500,
    },
  },

  [`& .${checkboxClasses.sizeLarge}, & .${radioClasses.sizeLarge}`]: {
    margin: '-8px',
  },
  [`& .${checkboxClasses.sizeMedium}, & .${radioClasses.sizeMedium}`]: {
    margin: '-8px',
  },
  [`& .${checkboxClasses.sizeSmall}, & .${radioClasses.sizeSmall}`]: {
    margin: '-10px',
  },

  variants: [
    {
      props: {
        labelPlacement: 'end',
      },
      style: {
        flexDirection: 'row',
      },
    },
    {
      props: {
        labelPlacement: 'start',
      },
      style: {
        flexDirection: 'row-reverse',
      },
    },
    {
      props: {
        labelPlacement: 'bottom',
      },
      style: {
        flexDirection: 'column',
      },
    },
    {
      props: {
        labelPlacement: 'top',
      },
      style: {
        flexDirection: 'column-reverse',
      },
    },
  ],
}));

const FormControlLabelLabel = styled(Typography, {
  name: 'ESFormControlLabel',
  slot: 'Label',
  overridesResolver: (_props, styles) => styles.label,
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A900,
})) as typeof Typography;

/**
 * Use this component if you want to display an extra label for the Checkbox or Radio.
 */
export const FormControlLabel = (inProps: FormControlLabelProps) => {
  const {
    className,
    sx,
    control,
    label,
    labelPlacement = 'end',
    slots = {},
    slotProps = {},
    ...props
  } = useThemeProps({ props: inProps, name: 'ESFormControlLabel' });

  const ownerState = { ...props, labelPlacement };
  const classes = useUtilityClasses(ownerState);

  const LabelComponent = slots.typography ?? FormControlLabelLabel;

  const labelProps = appendOwnerState(
    LabelComponent,
    {
      component: 'div',
      variant: 'subtitle1',
      ...slotProps.typography,
      className: clsx(classes.label, slotProps.typography?.className),
    },
    ownerState
  );

  return (
    <FormControlLabelRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
      {control}
      <LabelComponent {...labelProps}>{label}</LabelComponent>
    </FormControlLabelRoot>
  );
};
