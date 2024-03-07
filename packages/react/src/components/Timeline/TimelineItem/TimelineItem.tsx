import { TimelineItemProps, TimelineItemTypeMap } from './TimelineItem.types';

import clsx from 'clsx';
import { getTimelineItemUtilityClass } from './TimelineItem.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type TimelineItemOwnerState = {
  classes?: TimelineItemProps['classes'];
  oppositeContent?: TimelineItemProps['oppositeContent'];
  weight?: TimelineItemProps['weight'];
};

const useUtilityClasses = (ownerState: TimelineItemOwnerState) => {
  const { classes, weight } = ownerState;

  const slots = {
    root: ['root', `weight${weight}`],
    oppositeContent: ['oppositeContent']
  };

  return composeClasses(slots, getTimelineItemUtilityClass, classes);
};

const TimelineItemRoot = styled('div', {
  name: 'ESTimelineItem',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: TimelineItemOwnerState }>(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '16px 24px',
  position: 'relative'
}));

const TimelineItemOppositeContent = styled('div', {
  name: 'ESTimelineItem',
  slot: 'OppositeContent',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: TimelineItemOwnerState }>(({ theme, ownerState }) => ({
  ...theme.typography.caption,
  color: theme.palette.monoA.A600,
  width: '60px',
  display: 'flex',
  justifyContent: 'flex-end',

  ...(ownerState.weight === 'sm' && {
    ...theme.typography.body100Bold,
    color: theme.palette.monoA.A700
  })
}));

const TimelineItemPoint = styled('div', {
  name: 'ESTimelineItemDivider',
  slot: 'Point',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: TimelineItemOwnerState }>(({ theme, ownerState }) => ({
  height: '5px',
  width: '5px',
  borderRadius: '50%',
  background: theme.palette.monoA.A500,
  ...(ownerState.weight === 'sm' && {
    height: '7px',
    width: '7px',
    background: theme.palette.monoA.A600
  })
}));

const TimelineItemLine = styled('div', {
  name: 'ESTimelineItemDivider',
  slot: 'Line',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: TimelineItemOwnerState }>(({ theme }) => ({
  height: '100%',
  width: '1px',
  background: theme.palette.monoA.A100,
  position: 'absolute',
  left: '98px'
}));

const TimelineItemDivider = styled('div', {
  name: 'ESTimelineItemDivider',
  slot: 'Divider',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: TimelineItemOwnerState }>(() => ({
  height: '100%'
}));

export const TimelineItem: OverridableComponent<TimelineItemTypeMap> = (inProps: TimelineItemProps) => {
  const { oppositeContent, children, className, sx, style, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTimelineItem'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TimelineItemRoot className={clsx(classes.root, className)} ownerState={ownerState} style={style} sx={sx}>
      {oppositeContent && (
        <TimelineItemOppositeContent ownerState={ownerState}>{oppositeContent}</TimelineItemOppositeContent>
      )}
      <TimelineItemDivider ownerState={ownerState}>
        <TimelineItemLine ownerState={ownerState} />
        <TimelineItemPoint ownerState={ownerState} />
      </TimelineItemDivider>
      {children}
    </TimelineItemRoot>
  );
};
