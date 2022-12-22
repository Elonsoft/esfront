import { useEffect, useState } from 'react';

import { SidebarToggleProps } from './SidebarToggle.types';

import clsx from 'clsx';
import { getSidebarToggleUtilityClass } from './SidebarToggle.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useTheme, useThemeProps } from '@mui/material/styles';
import { svgIconClasses } from '@mui/material';
import IconButton, { iconButtonClasses } from '@mui/material/IconButton';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';

import { IconChevronLeftMedium } from '../../../icons';
import { useSidebarContext } from '../Sidebar.context';
import { SidebarDivider } from '../SidebarDivider';

type SidebarToggleOwnerState = {
  color?: 'default' | 'primary';
  classes?: SidebarToggleProps['classes'];
  open?: boolean;
};

const useUtilityClasses = (ownerState: SidebarToggleOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    button: ['button'],
    tooltip: ['tooltip']
  };

  return composeClasses(slots, getSidebarToggleUtilityClass, classes);
};

const SidebarToggleRoot = styled('div', {
  name: 'ESSidebarToggle',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  position: 'relative',
  zIndex: '10'
}));

const SidebarToggleTooltip = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    name: 'ESidebarToggle',
    slot: 'Tooltip',
    overridesResolver: (props, styles) => styles.tooltip
  }
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    ...theme.typography.caption
  }
}));

const SidebarToggleButton = styled(IconButton, {
  name: 'ESSidebarToggle',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})<{ ownerState: SidebarToggleOwnerState }>(({ theme, ownerState }) => ({
  [`&.${iconButtonClasses.root}`]: {
    transition: 'none',
    width: '20px',
    height: '20px',
    marginLeft: ownerState.open ? '7px' : 0,
    boxShadow: `inset 0 0 0 1px ${theme.palette.monoA.A100}`,
    borderRadius: '20px',
    zIndex: '4',
    overflow: 'hidden',
    position: 'absolute',
    right: '-11px',
    top: '-9px',

    [`& .${svgIconClasses.root}`]: {
      transform: `rotate(${ownerState.open ? '' : '18'}0deg)`
    },

    ...(ownerState.color === 'default' && {
      ...theme.mixins.button({
        background: theme.palette.common.background2,
        color: theme.palette.monoA.A500,
        hover: theme.palette.monoA.A50,
        focus: theme.palette.monoA.A150,
        active: theme.palette.monoA.A150
      })
    }),

    ...(ownerState.color === 'primary' && {
      ...theme.mixins.button({
        background: theme.palette.primary[300],
        color: theme.palette.monoB[500],
        hover: theme.palette.monoB.A50,
        focus: theme.palette.monoA.A150,
        active: theme.palette.monoA.A150
      })
    })
  }
}));

export const SidebarToggle = (inProps: SidebarToggleProps) => {
  const {
    className,
    sx,
    open,
    icon = <IconChevronLeftMedium />,
    labelOpen,
    labelHide,
    onClick,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSidebarToggle'
  });

  const theme = useTheme();

  const [isTooltipOpen, setTooltipOpen] = useState(false);

  const { color } = useSidebarContext();

  const ownerState = { color, open, ...props };
  const classes = useUtilityClasses(ownerState);

  useEffect(() => {
    setTooltipOpen(false);
  }, [open]);

  const onCloseTooltip = () => {
    setTooltipOpen(false);
  };

  const onClickToggle = () => {
    onCloseTooltip();
    onClick && onClick();
  };

  return (
    <SidebarToggleRoot className={clsx(classes.root, className)} sx={sx}>
      <SidebarDivider />

      <SidebarToggleTooltip
        className={clsx(classes.tooltip)}
        enterDelay={100}
        enterNextDelay={200}
        open={isTooltipOpen}
        onOpen={() => setTooltipOpen(true)}
        onClose={onCloseTooltip}
        disableInteractive
        arrow
        title={<>{open ? labelHide : labelOpen}</>}
        placement="right"
        TransitionProps={{ timeout: { enter: theme.transitions.duration.enteringScreen, exit: 0 } }}
      >
        <SidebarToggleButton
          className={clsx(classes.button)}
          onClick={onClickToggle}
          ownerState={ownerState}
          aria-label={open ? labelHide : labelOpen}
        >
          {icon}
        </SidebarToggleButton>
      </SidebarToggleTooltip>
    </SidebarToggleRoot>
  );
};
