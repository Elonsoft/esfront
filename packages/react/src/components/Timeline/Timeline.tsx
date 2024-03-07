// import { Children, cloneElement, CSSProperties, Fragment, isValidElement, useRef, useState } from 'react';

import { TimelineProps } from './Timeline.types';

import clsx from 'clsx';
import {
  getTimelineUtilityClass
  //timelineClasses
} from './Timeline.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type TimelineOwnerState = {
  classes?: TimelineProps['classes'];
  open?: boolean;
};

const useUtilityClasses = (ownerState: TimelineOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    list: ['list'],
    buttonMore: ['buttonMore'],
    menu: ['menu'],
    menuItem: ['menuItem'],
    tooltip: ['tooltip']
  };

  return composeClasses(slots, getTimelineUtilityClass, classes);
};

const TimelineRoot = styled('div', {
  name: 'ESTimeline',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: TimelineOwnerState }>(() => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const Timeline = (inProps: TimelineProps) => {
  const { className, sx, ...props } = useThemeProps({ props: inProps, name: 'ESTimeline' });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TimelineRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx} {...props}></TimelineRoot>
  );
};
