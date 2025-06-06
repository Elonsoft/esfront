import { PageHGroupHeadingProps } from './PageHGroupHeading.types';

import clsx from 'clsx';
import { getPageHGroupHeadingUtilityClass } from './PageHGroupHeading.classes';

import { styled } from '@mui/material-pigment-css';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

import { TooltipEllipsis, TooltipEllipsisProps } from '../../../components/TooltipEllipsis';

type PageHGroupHeadingOwnerState = {
  classes?: PageHGroupHeadingProps['classes'];
};

const useUtilityClasses = (ownerState: PageHGroupHeadingOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    title: ['title'],
    tooltip: ['tooltip'],
    endAdornment: ['endAdornment'],
  };

  return composeClasses(slots, getPageHGroupHeadingUtilityClass, classes);
};

const PageHGroupHeadingRoot = styled('div', {
  name: 'ESPageHGroupHeading',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root,
})(({ theme }) => ({
  ...theme.typography.h2,
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
}));

const PageHGroupHeadingTitle = styled('h1', {
  name: 'ESPageHGroupHeading',
  slot: 'Title',
  overridesResolver: (_props, styles) => styles.title,
})<{ ownerState: PageHGroupHeadingOwnerState }>(({ theme }) => ({
  font: 'inherit',
  letterSpacing: 'inherit',
  alignSelf: 'center',
  padding: 0,
  maxHeight: '100%',
  margin: 0,
  color: theme.vars.palette.monoA.A900,
  wordBreak: 'break-word',
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 'var(--ESPageHGroupHeading-maxLines)',
  WebkitBoxOrient: 'vertical',
}));

const PageHGroupHeadingTooltip = styled(
  ({ className, ...props }: TooltipEllipsisProps) => <TooltipEllipsis {...props} classes={{ popper: className }} />,
  {
    name: 'ESPageHGroupHeading',
    slot: 'Tooltip',
    overridesResolver: (_props, styles) => styles.tooltip,
  }
)({});

const PageHGroupHeadingEndAdornment = styled('div', {
  name: 'ESPageHGroupHeading',
  slot: 'EndAdornment',
  overridesResolver: (_props, styles) => styles.endAdornment,
})(() => ({
  alignItems: 'center',
  display: 'inline-flex',
  flexShrink: 0,
  height: '1lh',
  lineHeight: 'inherit',
}));

export const PageHGroupHeading = (inProps: PageHGroupHeadingProps) => {
  const {
    className,
    children,
    sx,
    maxLines = 1,
    endAdornment,
    TooltipProps,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESPageHGroupHeading',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <PageHGroupHeadingRoot className={clsx(classes.root, className)}>
      <PageHGroupHeadingTooltip
        arrow
        disableInteractive
        className={classes.tooltip}
        placement="top"
        title={children || false}
        {...TooltipProps}
      >
        {({ ref }) => (
          <PageHGroupHeadingTitle
            ref={ref as React.RefObject<HTMLHeadingElement>}
            className={classes.title}
            ownerState={ownerState}
            style={{ '--ESPageHGroupHeading-maxLines': maxLines } as React.CSSProperties}
            sx={sx}
          >
            {children}
          </PageHGroupHeadingTitle>
        )}
      </PageHGroupHeadingTooltip>
      {!!endAdornment && (
        <PageHGroupHeadingEndAdornment className={classes.endAdornment}>{endAdornment}</PageHGroupHeadingEndAdornment>
      )}
    </PageHGroupHeadingRoot>
  );
};
