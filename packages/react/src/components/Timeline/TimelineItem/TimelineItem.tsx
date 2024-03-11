import { TimelineItemProps } from './TimelineItem.types';

import clsx from 'clsx';
import { getTimelineItemUtilityClass, timelineItemClasses } from './TimelineItem.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type TimelineItemOwnerState = {
  classes?: TimelineItemProps['classes'];
  oppositeContent?: TimelineItemProps['oppositeContent'];
  weight?: TimelineItemProps['weight'];
};

const useUtilityClasses = (ownerState: TimelineItemOwnerState) => {
  const { classes, weight } = ownerState;

  const slots = {
    root: ['root', `weight${weight}`],
    oppositeContent: ['oppositeContent'],
    content: ['content'],
    container: ['container'],
    header: ['header'],
    divider: ['divider'],
    dividerPoint: ['dividerPoint'],
    dividerLine: ['dividerLine']
  };

  return composeClasses(slots, getTimelineItemUtilityClass, classes);
};

const TimelineItemRoot = styled('div', {
  name: 'ESTimelineItem',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: TimelineItemOwnerState }>(({ ownerState }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '8px 24px',
  position: 'relative',
  ...(ownerState.weight === 'sm' && {
    gap: '11px'
  }),
  '&:first-of-type': {
    [`& .${timelineItemClasses.dividerLine}:first-of-type`]: {
      display: 'none'
    }
  },
  '&:last-of-type': {
    [`& .${timelineItemClasses.dividerLine}:last-of-type`]: {
      display: 'none'
    }
  }
}));

const TimelineItemContent = styled('div', {
  name: 'ESTimelineItem',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
}));

const TimelineItemContainer = styled('div', {
  name: 'ESTimelineItem',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
}));

const TimelineItemHeader = styled('div', {
  name: 'ESTimelineItem',
  slot: 'Header',
  overridesResolver: (props, styles) => styles.header
})(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.monoA.A600
}));

const TimelineItemOppositeContent = styled('div', {
  name: 'ESTimelineItem',
  slot: 'OppositeContent',
  overridesResolver: (props, styles) => styles.oppositeContent
})<{ ownerState: TimelineItemOwnerState }>(({ theme, ownerState }) => ({
  ...theme.typography.caption,
  color: theme.palette.monoA.A600,
  width: '56px',
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'flex-end',

  ...(ownerState.weight === 'sm' && {
    ...theme.typography.body100Bold,
    color: theme.palette.monoA.A700
  })
}));

const TimelineItemPoint = styled('div', {
  name: 'ESTimelineItem',
  slot: 'DividerPoint',
  overridesResolver: (props, styles) => styles.dividerPoint
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
  name: 'ESTimelineItem',
  slot: 'DividerLine',
  overridesResolver: (props, styles) => styles.dividerLine
})(({ theme }) => ({
  height: 'calc(50% - 6px)',
  width: '1px',
  background: theme.palette.monoA.A100,
  position: 'absolute',
  left: '94px',
  top: 'calc(50% + 6px)',
  '&:first-of-type': {
    top: 0
  }
}));

const TimelineItemDivider = styled('div', {
  name: 'ESTimelineItem',
  slot: 'Divider',
  overridesResolver: (props, styles) => styles.divider
})(() => ({
  height: '100%'
}));

export const TimelineItem = (inProps: TimelineItemProps) => {
  const { icon, header, oppositeContent, children, className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTimelineItem'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TimelineItemRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
      <TimelineItemOppositeContent className={clsx(classes.oppositeContent, className)} ownerState={ownerState}>
        {oppositeContent}
      </TimelineItemOppositeContent>
      <TimelineItemDivider className={clsx(classes.divider, className)}>
        <TimelineItemLine className={clsx(classes.dividerLine, className)} />
        <TimelineItemPoint className={clsx(classes.dividerPoint, className)} ownerState={ownerState} />
        <TimelineItemLine className={clsx(classes.dividerLine, className)} />
      </TimelineItemDivider>
      <TimelineItemContent className={clsx(classes.content, className)}>
        {icon}
        <TimelineItemContainer className={clsx(classes.container, className)}>
          <TimelineItemHeader className={clsx(classes.header, className)}>{header}</TimelineItemHeader>
          {children}
        </TimelineItemContainer>
      </TimelineItemContent>
    </TimelineItemRoot>
  );
};
