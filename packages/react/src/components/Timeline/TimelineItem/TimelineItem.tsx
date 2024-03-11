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
  isFirst?: TimelineItemProps['isFirst'];
  isLast?: TimelineItemProps['isLast'];
};

type TimelineItemLineOwnerState = {
  isTop?: boolean;
  isBottom?: boolean;
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
  padding: '8px 24px',
  position: 'relative'
}));

const TimelineItemContent = styled('div', {
  name: 'ESTimelineItem',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
}));

const TimelineItemContainer = styled('div', {
  name: 'ESTimelineItem',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
}));

const TimelineItemHeader = styled('div', {
  name: 'ESTimelineItem',
  slot: 'Header',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.monoA.A600
}));

const TimelineItemOppositeContent = styled('div', {
  name: 'ESTimelineItem',
  slot: 'OppositeContent',
  overridesResolver: (props, styles) => styles.root
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
  name: 'ESTimelineItem',
  slot: 'DividerLine',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: TimelineItemLineOwnerState }>(({ ownerState, theme }) => ({
  height: 'calc(50% - 6px)',
  width: '1px',
  background: theme.palette.monoA.A100,
  position: 'absolute',
  left: '94px',
  top: 'calc(50% + 6px)',
  ...(ownerState.isTop && {
    top: 0
  }),
  ...(ownerState.weight === 'sm' && {
    left: '95px'
  })
}));

const TimelineItemDivider = styled('div', {
  name: 'ESTimelineItem',
  slot: 'Divider',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  height: '100%'
}));

export const TimelineItem: OverridableComponent<TimelineItemTypeMap> = (inProps: TimelineItemProps) => {
  const { icon, header, isFirst, isLast, oppositeContent, children, className, sx, style, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTimelineItem'
  });

  const ownerState = { isLast, isFirst, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TimelineItemRoot className={clsx(classes.root, className)} ownerState={ownerState} style={style} sx={sx}>
      <TimelineItemOppositeContent ownerState={ownerState}>{oppositeContent}</TimelineItemOppositeContent>
      <TimelineItemDivider>
        {!isFirst && <TimelineItemLine ownerState={{ weight: ownerState.weight, isTop: true }} />}
        <TimelineItemPoint ownerState={ownerState} />
        {!isLast && <TimelineItemLine ownerState={{ weight: ownerState.weight, isBottom: true }} />}
      </TimelineItemDivider>
      <TimelineItemContent>
        {icon}
        <TimelineItemContainer>
          <TimelineItemHeader>{header}</TimelineItemHeader>
          {children}
        </TimelineItemContainer>
      </TimelineItemContent>
    </TimelineItemRoot>
  );
};
