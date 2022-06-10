import { FC } from 'react';

import { TimePickerProps } from './TimePicker.types';

import clsx from 'clsx';
import { getTimePickerUtilityClass } from './TimePicker.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { TimePickerMenu } from './TimePickerMenu';

type TimePickerOwnerState = {
  classes?: TimePickerProps['classes'];
};

const useUtilityClasses = (ownerState: TimePickerOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    layout: ['layout']
  };

  return composeClasses(slots, getTimePickerUtilityClass, classes);
};

const TimePickerRoot = styled('div', {
  name: 'ESTimePicker',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  backgroundColor: theme.palette.monoA.A50,
  padding: 16
}));

const TimePickerLayout = styled('div', {
  name: 'ESTimePicker',
  slot: 'Layout',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  backgroundColor: theme.palette.surface[400],
  borderRadius: 4,
  boxShadow: theme.palette.shadow.down[600],
  display: 'flex',
  flexDirection: 'column'
}));

/**
 * This component allow the user to select a single time.
 */
export const TimePicker: FC<TimePickerProps> = (inProps) => {
  const { className, renderInput, onChange, label, value, minTime, maxTime, inputProps, inputFormat, ...props } =
    useThemeProps({
      props: inProps,
      name: 'ESTimePicker'
    });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TimePickerRoot className={clsx(classes.root, className)}>
      <TimePickerLayout>
        <TimePickerMenu
          onChange={onChange}
          value={value}
          renderInput={renderInput}
          label={label}
          inputProps={inputProps}
          minTime={minTime}
          maxTime={maxTime}
          inputFormat={inputFormat}
        />
      </TimePickerLayout>
    </TimePickerRoot>
  );
};
