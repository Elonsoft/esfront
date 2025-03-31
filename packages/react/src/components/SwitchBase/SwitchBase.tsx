import { forwardRef } from 'react';

import { SwitchBaseProps } from './SwitchBase.types';

import clsx from 'clsx';
import { getSwitchBaseUtilityClass, switchBaseClasses } from './SwitchBase.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize, useFormControl } from '@mui/material';

import { useControlled, useEvent } from '../../hooks';
import { ButtonBase } from '../ButtonBase';

type SwitchBaseOwnerState = {
  classes: SwitchBaseProps['classes'];
  disabled: SwitchBaseProps['disabled'];
  edge: SwitchBaseProps['edge'];
  checked: SwitchBaseProps['checked'];
};

const useUtilityClasses = (ownerState: SwitchBaseOwnerState) => {
  const { classes, checked, disabled, edge } = ownerState;

  const slots = {
    root: ['root', checked && 'checked', disabled && 'disabled', edge && `edge${capitalize(edge)}`],
    input: ['input'],
  };

  return composeClasses(slots, getSwitchBaseUtilityClass, classes);
};

const SwitchBaseRoot = styled(ButtonBase, {
  name: 'ESSwitchBase',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { disabled, edge, checked },
    } = props;

    return [
      styles.root,
      checked && styles.checked,
      disabled && styles.disabled,
      edge && styles[`edge${capitalize(edge)}`],
    ];
  },
})(({ theme }) => ({
  padding: 9,
  borderRadius: '50%',
  [`&.${switchBaseClasses.edgeStart}`]: {
    marginLeft: -12,
  },
  [`&.${switchBaseClasses.edgeEnd}`]: {
    marginRight: -12,
  },

  [`&:not(:disabled):has(:focus-visible)`]: {
    outline: `2px solid ${theme.vars.palette.monoA[500]}`,
  },
})) as typeof ButtonBase;

const SwitchBaseInput = styled('input', {
  name: 'ESSwitchBase',
  slot: 'Input',
  overridesResolver: (props, styles) => styles.input,
})({
  cursor: 'inherit',
  position: 'absolute',
  opacity: 0,
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1,
});

export const SwitchBase = forwardRef<HTMLButtonElement | null, SwitchBaseProps>(function SwitchBase(
  inProps: SwitchBaseProps,
  ref
) {
  const {
    classes: inClasses,
    autoFocus,
    checked: checkedProp,
    checkedIcon,
    className,
    defaultChecked,
    disabled: disabledProp,
    disableFocusRipple = false,
    edge = false,
    icon,
    id,
    inputProps,
    inputRef,
    name,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    required = false,
    tabIndex,
    type,
    value,
    ...other
  } = useThemeProps({
    props: inProps,
    name: 'ESSwitchBase',
  });

  const [checked, setCheckedState] = useControlled(Boolean(defaultChecked), checkedProp);

  const muiFormControl = useFormControl();

  const handleFocus = useEvent((event: React.FocusEvent<HTMLButtonElement, Element>) => {
    if (onFocus) {
      onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event as never);
    }
  });

  const handleBlur = useEvent((event: React.FocusEvent<HTMLButtonElement, Element>) => {
    if (onBlur) {
      onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event as never);
    }
  });

  const handleInputChange = useEvent((event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.nativeEvent.defaultPrevented) {
      return;
    }

    const newChecked = event.target.checked;

    setCheckedState(newChecked);

    if (onChange) {
      onChange(event, newChecked);
    }
  });

  let disabled = disabledProp;

  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }

  const hasLabelFor = type === 'checkbox' || type === 'radio';

  const ownerState = {
    classes: inClasses,
    checked,
    disabled,
    disableFocusRipple,
    edge,
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <SwitchBaseRoot
      ref={ref}
      centerRipple
      className={clsx(classes.root, className)}
      component="span"
      disabled={disabled}
      focusRipple={!disableFocusRipple}
      ownerState={ownerState}
      role={undefined}
      tabIndex={null}
      onBlur={handleBlur}
      onFocus={handleFocus}
      {...other}
    >
      <SwitchBaseInput
        ref={inputRef}
        autoFocus={autoFocus}
        checked={checkedProp}
        className={classes.input}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={hasLabelFor ? id : undefined}
        name={name}
        readOnly={readOnly}
        required={required}
        tabIndex={tabIndex}
        type={type}
        value={value}
        onChange={handleInputChange}
        //{...(type === 'checkbox' && value === undefined ? {} : { value })}
        {...inputProps}
      />
      {checked ? checkedIcon : icon}
    </SwitchBaseRoot>
  );
});
