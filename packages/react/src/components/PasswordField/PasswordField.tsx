import React from 'react';

import { PasswordFieldProps } from './PasswordField.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { useControlled } from '../../hooks';
import { IconEyeLineW500, IconEyeOffLineW500 } from '../../icons';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';

/**
 * The PasswordField allows users to input passwords with ability to toggle password visibility.
 */
export const PasswordField = (inProps: PasswordFieldProps) => {
  const {
    className,

    visible: inVisible,
    onVisibilityChange,

    labelHidePassword,
    labelShowPassword,

    iconHidePassword = <IconEyeOffLineW500 />,
    iconShowPassword = <IconEyeLineW500 />,

    InputProps,
    TooltipProps,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESPasswordField',
  });

  const [visible, setVisible] = useControlled(false, inVisible);

  const onClick = () => {
    setVisible(!visible);

    if (onVisibilityChange) {
      onVisibilityChange(!visible);
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    // Prevent input from losing focus.
    e.preventDefault();
  };

  const onMouseUp = (e: React.MouseEvent) => {
    // Prevent caret from changing position.
    e.preventDefault();
  };

  return (
    <TextField
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Tooltip
              arrow
              disableInteractive
              placement="top-end"
              title={visible ? labelHidePassword : labelShowPassword}
              {...TooltipProps}
            >
              <Button
                rounded
                aria-label={visible ? labelHidePassword : labelShowPassword}
                onClick={onClick}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
              >
                {visible ? iconHidePassword : iconShowPassword}
              </Button>
            </Tooltip>
          </InputAdornment>
        ),
        ...InputProps,
      }}
      className={clsx('es-password-field', className)}
      type={visible ? 'text' : 'password'}
      {...props}
    />
  );
};
