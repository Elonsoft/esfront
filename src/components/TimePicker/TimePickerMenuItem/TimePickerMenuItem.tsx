import React, { FC } from 'react';

import { TimePickerMenuItemProps } from './TimePickerMenuItem.types';

import clsx from 'clsx';
import { getTimePickerMenuItemUtilityClass } from './TimePickerMenuItem.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

type TimePickerMenuItemOwnerState = {
  classes?: TimePickerMenuItemProps['classes'];
};

const useUtilityClasses = (ownerState: TimePickerMenuItemOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    typography: ['typography']
  };

  return composeClasses(slots, getTimePickerMenuItemUtilityClass, classes);
};

const TimePickerMenuItemRoot = styled('div', {
  name: 'ESTimePickerMenuItem',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  width: 108,
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '256px',
  overflowY: 'scroll'
}));
const TimePickerMenuItemTitle = styled(Typography, {
  name: 'ESTimePickerMenuItem',
  slot: 'Typography',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  position: 'sticky',
  top: 0,
  textAlign: 'center',
  backgroundColor: theme.palette.surface[400],
  zIndex: 10,
  padding: '8px 0 4px 0',
  color: theme.palette.monoA.A600
}));

export const TimePickerMenuItem: FC<TimePickerMenuItemProps> = (inProps) => {
  const { className, limit, title, onChange, selectedIndex, minTime, maxTime, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTimePickerMenuItem'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TimePickerMenuItemRoot className={clsx(classes.root, className)}>
      <TimePickerMenuItemTitle variant="caption">{title}</TimePickerMenuItemTitle>

      {[...Array(+limit)].map((item, index) => (
        <MenuItem
          key={index}
          onClick={() => onChange(index)}
          sx={{ color: 'monoA.A900', justifyContent: 'center' }}
          selected={selectedIndex === index}
          disabled={(!!maxTime && maxTime <= index - 1) || (!!minTime && minTime >= index + 1)}
        >
          {index < 10 ? `0${index}` : index}
        </MenuItem>
      ))}
    </TimePickerMenuItemRoot>
  );
};
