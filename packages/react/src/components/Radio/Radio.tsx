import * as React from 'react';

import { RadioProps } from './Radio.types';

import clsx from 'clsx';
import { getRadioUtilityClass, radioClasses } from './Radio.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize, createChainedFunction } from '@mui/material';

import { RadioIcon, radioIconClasses } from './RadioIcon';

import { useRadioGroup } from '../RadioGroup';
import { SwitchBase } from '../SwitchBase';

type RadioOwnerState = {
  classes?: RadioProps['classes'];
  color: NonNullable<RadioProps['color']>;
  size: NonNullable<RadioProps['size']>;
  disableRipple?: RadioProps['disableRipple'];
  checked?: RadioProps['checked'];
  disabled?: RadioProps['disabled'];
  error?: RadioProps['error'];
  variant: NonNullable<RadioProps['variant']>;
};

const useUtilityClasses = (ownerState: RadioOwnerState) => {
  const { classes, color, size, checked, disabled, variant, error } = ownerState;

  const slots = {
    root: [
      'root',
      checked && 'checked',
      error && 'error',
      disabled && 'disabled',
      `color${capitalize(color)}`,
      `size${capitalize(size)}`,
      `variant${capitalize(variant)}`,
    ],
  };

  const composedClasses = composeClasses(slots, getRadioUtilityClass, classes);

  return {
    ...classes,
    ...composedClasses,
  };
};

const rootShouldForwardProp = (prop: string) =>
  prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as' && prop !== 'classes';

const RadioRoot = styled(SwitchBase, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop as string) || prop === 'classes',
  name: 'ESRadio',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      ownerState.checked && styles.checked,
      ownerState.error && styles.error,
      ownerState.disabled && styles.disabled,
      styles[`size${capitalize(ownerState.size)}`],
      styles[`color${capitalize(ownerState.color)}`],
      styles[`variant${capitalize(ownerState.variant)}`],
    ];
  },
})<{ ownerState: RadioOwnerState }>(({ theme }) => ({
  '@media (hover: hover)': {
    [`&:not(.${radioClasses.checked}):not(.${radioClasses.disabled})`]: {
      '&:hover': {
        [`& .${radioIconClasses.circle}`]: {
          background: theme.vars.palette.monoA.A400,
        },
      },
      '&:active': {
        [`& .${radioIconClasses.circle}`]: {
          background: theme.vars.palette.monoA.A600,
        },
      },
    },
  },

  [`&.${radioClasses.sizeLarge}`]: {
    [`& .${radioIconClasses.root}`]: {
      height: '24px',
      width: '24px',
    },
    [`& .${radioIconClasses.circle}`]: {
      height: '7px',
      width: '7px',
    },
    '& svg': {
      fontSize: '24px',
      height: '24px !important',
      width: '24px !important',
    },
  },
  [`&.${radioClasses.sizeMedium}`]: {
    [`& .${radioIconClasses.root}`]: {
      height: '20px',
      width: '20px',
    },
    [`& .${radioIconClasses.circle}`]: {
      height: '6px',
      width: '6px',
    },
    '& svg': {
      fontSize: '20px',
      height: '20px !important',
      width: '20px !important',
    },
  },
  [`&.${radioClasses.sizeSmall}`]: {
    [`& .${radioIconClasses.root}`]: {
      height: '16px',
      width: '16px',
    },
    [`& .${radioIconClasses.circle}`]: {
      height: '5px',
      width: '5px',
    },
    '& svg': {
      fontSize: '16px',
      height: '16px !important',
      width: '16px !important',
    },
  },

  [`&.${radioClasses.variantOutlined}, &.${radioClasses.variantHybrid}`]: {
    [`& .${radioIconClasses.root}`]: {
      boxShadow: `inset 0 0 0 1px ${theme.vars.palette.monoA.A500}`,
    },
  },

  [`&.${radioClasses.checked}`]: {
    [`&.${radioClasses.variantContained}, &.${radioClasses.variantHybrid}`]: {
      [`& .${radioIconClasses.root}`]: {
        background: 'currentColor',
        boxShadow: 'none',
      },
      [`& .${radioIconClasses.circle}`]: {
        background: theme.vars.palette.monoB[500],
      },
    },
    [`&.${radioClasses.variantOutlined}`]: {
      [`& .${radioIconClasses.circle}`]: {
        background: 'currentColor',
      },
    },
  },

  background: 'transparent',
  color: theme.vars.palette.monoA.A600,
  '--hovered': theme.vars.palette.monoA.A50,
  '--pressed': theme.vars.palette.monoA.A150,

  [`&.${radioClasses.disabled}`]: {
    cursor: 'not-allowed',
    pointerEvents: 'auto',
    opacity: '30%',
  },

  [`&.${radioClasses.colorSuccess}`]: {
    [`&.${radioClasses.checked}`]: {
      color: theme.vars.palette.success[300],
      '--hovered': theme.vars.palette.success.A50,
      '--pressed': theme.vars.palette.success.A150,
    },
  },

  [`&.${radioClasses.colorMonoA}`]: {
    [`&, &.${radioClasses.checked}`]: {
      color: theme.vars.palette.monoA[500],
      '--hover': theme.vars.palette.monoA.A50,
      '--pressed': theme.vars.palette.monoA.A150,
    },
  },
  [`&.${radioClasses.colorMonoB}`]: {
    [`&, &.${radioClasses.checked}`]: {
      color: theme.vars.palette.monoB[500],
      '--hovered': theme.vars.palette.monoB.A50,
      '--pressed': theme.vars.palette.monoB.A150,
    },
    [`&.${radioClasses.checked}`]: {
      [`&.${radioClasses.variantContained}, &.${radioClasses.variantHybrid}`]: {
        [`& .${radioIconClasses.root}`]: { boxShadow: 'none' },
        [`& .${radioIconClasses.circle}`]: {
          background: theme.vars.palette.monoA[500],
        },
      },
    },
    [`&.${radioClasses.variantOutlined}, &.${radioClasses.variantHybrid}`]: {
      [`& .${radioIconClasses.root}`]: {
        boxShadow: `inset 0 0 0 1px ${theme.vars.palette.monoA.A500}`,
      },
    },
    [`&.${radioClasses.variantContained}`]: {
      [`& .${radioIconClasses.root}`]: {
        boxShadow: `inset 0 0 0 2px ${theme.vars.palette.monoB.A600}`,
      },
    },
  },
  [`&.${radioClasses.colorBlack}`]: {
    [`&, &.${radioClasses.checked}`]: {
      color: theme.vars.palette.black[500],
      '--hover': theme.vars.palette.black.A50,
      '--pressed': theme.vars.palette.black.A150,
    },
    [`&.${radioClasses.checked}`]: {
      [`&.${radioClasses.variantContained}, &.${radioClasses.variantHybrid}`]: {
        [`& .${radioIconClasses.circle}`]: {
          background: theme.vars.palette.white[500],
        },
      },
    },
    [`&.${radioClasses.variantOutlined}, &.${radioClasses.variantHybrid}`]: {
      [`& .${radioIconClasses.root}`]: {
        boxShadow: `inset 0 0 0 1px ${theme.vars.palette.black.A500}`,
      },
    },
    [`&.${radioClasses.variantContained}`]: {
      [`& .${radioIconClasses.root}`]: {
        boxShadow: `inset 0 0 0 2px ${theme.vars.palette.black.A600}`,
      },
    },
  },
  [`&.${radioClasses.colorWhite}`]: {
    [`&, &.${radioClasses.checked}`]: {
      color: theme.vars.palette.white[500],
      '--hover': theme.vars.palette.white.A50,
      '--pressed': theme.vars.palette.white.A150,
    },
    [`&.${radioClasses.checked}`]: {
      [`&.${radioClasses.variantContained}, &.${radioClasses.variantHybrid}`]: {
        [`& .${radioIconClasses.circle}`]: {
          background: theme.vars.palette.black[500],
        },
      },
    },
    [`&.${radioClasses.variantOutlined}, &.${radioClasses.variantHybrid}`]: {
      [`& .${radioIconClasses.root}`]: {
        boxShadow: `inset 0 0 0 1px ${theme.vars.palette.white.A500}`,
      },
    },
    [`&.${radioClasses.variantContained}`]: {
      [`& .${radioIconClasses.root}`]: {
        boxShadow: `inset 0 0 0 2px ${theme.vars.palette.white.A600}`,
      },
    },
  },
  [`&.${radioClasses.colorPrimary}`]: {
    [`&.${radioClasses.checked}`]: {
      color: theme.vars.palette.primary[300],
      '--hover': theme.vars.palette.primary.A50,
      '--pressed': theme.vars.palette.primary.A150,
    },
  },
  [`&.${radioClasses.colorSecondary}`]: {
    [`&.${radioClasses.checked}`]: {
      color: theme.vars.palette.secondary[300],
      '--hover': theme.vars.palette.secondary.A50,
      '--pressed': theme.vars.palette.secondary.A150,
    },
  },
  [`&.${radioClasses.colorWarning}`]: {
    [`&.${radioClasses.checked}`]: {
      color: theme.vars.palette.warning[300],
      '--hovered': theme.vars.palette.warning.A50,
      '--pressed': theme.vars.palette.warning.A150,
    },
  },
  [`&.${radioClasses.colorError}`]: {
    [`&.${radioClasses.checked}`]: {
      color: theme.vars.palette.error[300],
      '--hovered': theme.vars.palette.error.A50,
      '--pressed': theme.vars.palette.error.A150,
    },
  },
  [`&.${radioClasses.colorInfo}`]: {
    [`&.${radioClasses.checked}`]: {
      color: theme.vars.palette.info[300],
      '--hovered': theme.vars.palette.info.A50,
      '--pressed': theme.vars.palette.info.A150,
    },
  },
  [`&.${radioClasses.error}`]: {
    [`&, &.${radioClasses.checked}`]: {
      color: theme.vars.palette.error[300],
      '--hovered': theme.vars.palette.error.A50,
      '--pressed': theme.vars.palette.error.A150,
    },
    [`&.${radioClasses.checked}`]: {
      [`&.${radioClasses.variantContained}, &.${radioClasses.variantHybrid}`]: {
        [`& .${radioIconClasses.circle}`]: {
          background: theme.vars.palette.monoB[500],
        },
      },
    },
    [`&.${radioClasses.variantOutlined}, &.${radioClasses.variantHybrid}`]: {
      [`& .${radioIconClasses.root}`]: {
        boxShadow: `inset 0 0 0 1px ${theme.vars.palette.error[300]}`,
      },
    },
    [`&.${radioClasses.variantContained}`]: {
      [`& .${radioIconClasses.root}`]: {
        boxShadow: `inset 0 0 0 2px ${theme.vars.palette.error[300]}`,
      },
    },
  },
}));

function areEqualValues(a: any, b: any) {
  if (typeof b === 'object' && b !== null) {
    return a === b;
  }

  // The value could be a number, the DOM will stringify it anyway.
  return String(a) === String(b);
}

const defaultCheckedIcon = <RadioIcon />;
const defaultIcon = <RadioIcon />;

export const Radio = React.forwardRef<HTMLButtonElement, RadioProps>(function Radio(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'ESRadio' });
  const {
    checkedIcon = defaultCheckedIcon,
    color = 'primary',
    icon: iconProp = defaultIcon,
    inputProps,
    size = 'medium',
    className,
    checked: checkedProp,
    disabled,
    variant = 'contained',
    onChange: onChangeProp,
    name: nameProp,
    ...other
  } = props;

  const radioGroup = useRadioGroup();

  let checked = checkedProp;
  const onChange = createChainedFunction(onChangeProp as never, radioGroup?.onChange as never);
  let name = nameProp;

  if (radioGroup) {
    if (typeof checked === 'undefined') {
      checked = areEqualValues(radioGroup.value, props.value);
    }

    if (typeof name === 'undefined') {
      name = radioGroup.name;
    }
  }

  const ownerState = {
    ...props,
    color,
    size,
    checked,
    disabled,
    variant,
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <RadioRoot
      ref={ref}
      TouchRippleProps={{ center: true }}
      checked={checked}
      checkedIcon={checkedIcon}
      className={clsx(classes.root, className)}
      classes={classes}
      disabled={disabled}
      icon={iconProp}
      inputProps={{
        ...inputProps,
      }}
      name={name}
      ownerState={ownerState}
      type="radio"
      onChange={onChange}
      {...other}
    />
  );
});
