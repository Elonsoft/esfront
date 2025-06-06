import { SidebarDividerProps } from './SidebarDivider.types';

import clsx from 'clsx';
import { getSidebarDividerUtilityClass } from './SidebarDivider.classes';

import { styled } from '@mui/material-pigment-css';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

import { Divider } from '../../Divider';
import { useSidebarContext } from '../Sidebar.context';

type SidebarDividerOwnerState = {
  classes?: SidebarDividerProps['classes'];
  color?: 'default' | 'primary' | 'secondary';
  open?: boolean;
};

const useUtilityClasses = (ownerState: SidebarDividerOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    line: ['line'],
  };

  return composeClasses(slots, getSidebarDividerUtilityClass, classes);
};

const SidebarDividerRoot = styled('div', {
  name: 'ESSidebarDivider',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: SidebarDividerOwnerState }>(({ theme }) => ({
  padding: '0 8px',
  transitionDuration: `${theme.transitions.duration.shortest}ms`,
  transitionTimingFunction: theme.transitions.easing.easeOut,
  transitionProperty: 'padding',

  variants: [
    {
      props: {
        open: true,
      },
      style: {
        padding: '0 16px',
      },
    },
  ],
}));

const SidebarDividerLine = styled(Divider, {
  name: 'ESSidebarDivider',
  slot: 'Line',
  overridesResolver: (props, styles) => styles.line,
})<{ ownerState: SidebarDividerOwnerState }>(({ theme }) => ({
  color: theme.vars.palette.monoA.A100,

  variants: [
    {
      props: {
        color: 'primary',
      },
      style: {
        color: theme.vars.palette.monoB.A200,
      },
    },
  ],
}));

export const SidebarDivider = (inProps: SidebarDividerProps) => {
  const { className, sx, ...props } = useDefaultProps({
    props: inProps,
    name: 'ESSidebarDivider',
  });

  const { color, open } = useSidebarContext();

  const ownerState = { color, open, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SidebarDividerRoot className={clsx(className, classes.root)} ownerState={ownerState} sx={sx}>
      <SidebarDividerLine className={clsx(className)} ownerState={ownerState} />
    </SidebarDividerRoot>
  );
};
