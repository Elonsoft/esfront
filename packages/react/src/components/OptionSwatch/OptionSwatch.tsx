import * as React from 'react';

import { OptionSwatchProps } from './OptionSwatch.types';

import clsx from 'clsx';
import { getOptionSwatchUtilityClass, optionSwatchClasses } from './OptionSwatch.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { createChainedFunction } from '@mui/material';
import composeClasses from '@mui/utils/composeClasses';

import { ButtonBase } from '../ButtonBase';
import { useRadioGroup } from '../RadioGroup';

type OptionSwatchOwnerState = {
  classes?: OptionSwatchProps['classes'];
  checked?: OptionSwatchProps['checked'];
  disabled?: OptionSwatchProps['disabled'];
};

const useUtilityClasses = (ownerState: OptionSwatchOwnerState) => {
  const { classes, checked, disabled } = ownerState;

  const slots = {
    root: ['root', checked && 'checked', disabled && 'disabled'],
  };

  const composedClasses = composeClasses(slots, getOptionSwatchUtilityClass, classes);

  return {
    ...classes,
    ...composedClasses,
  };
};

const OptionSwatchRoot = styled(ButtonBase, {
  name: 'ESOptionSwatch',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.root, ownerState.checked && styles.checked, ownerState.disabled && styles.disabled];
  },
})<{ ownerState: OptionSwatchOwnerState }>(({ theme }) => ({
  background: 'transparent',
  color: theme.vars.palette.monoA.A600,
  '--hovered': theme.vars.palette.monoA.A50,
  '--pressed': theme.vars.palette.monoA.A150,

  [`&.${optionSwatchClasses.disabled}`]: {
    cursor: 'not-allowed',
    pointerEvents: 'auto',
  },

  variants: [
    {
      props: {
        checked: true,
      },
      style: {
        //
      },
    },
    {
      props: {
        disabled: true,
      },
      style: {
        //
      },
    },
  ],
}));

function areEqualValues(a: any, b: any) {
  if (typeof b === 'object' && b !== null) {
    return a === b;
  }

  // The value could be a number, the DOM will stringify it anyway.
  return String(a) === String(b);
}

export const OptionSwatch = React.forwardRef<HTMLButtonElement, OptionSwatchProps>(function OptionSwatch(inProps, ref) {
  const props = useDefaultProps({ props: inProps, name: 'ESOptionSwatch' });
  const {
    className,
    classes: classesProp,
    sx,

    checked: checkedProp,
    defaultChecked,
    disabled,

    id,
    name: nameProp,
    value,

    inputProps,
    inputRef,

    onChange: onChangeProp,
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
    classes: classesProp,
    checked,
    disabled,
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <OptionSwatchRoot
      ref={ref}
      TouchRippleProps={{ center: true }}
      className={clsx(classes.root, className)}
      classes={classes}
      disabled={disabled}
      ownerState={ownerState}
      sx={sx}
    >
      <input
        ref={inputRef}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={id}
        name={name}
        type="radio"
        value={value}
        onChange={onChange}
        {...inputProps}
      />
    </OptionSwatchRoot>
  );
});
