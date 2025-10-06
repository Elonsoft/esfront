import { AlertProps } from './Alert.types';

import clsx from 'clsx';
import { alertClasses, getAlertUtilityClass } from './Alert.classes';

import { Breakpoint, styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { capitalize } from '@mui/material/utils';
import composeClasses from '@mui/utils/composeClasses';

import { IconAlertW500, IconCheckCircleW500, IconErrorW500, IconInformation2W500 } from '../../icons';

type AlertOwnerState = {
  classes?: AlertProps['classes'];
  breakpoint?: AlertProps['breakpoint'];
  color?: AlertProps['color'];
  severity: 'success' | 'warning' | 'error' | 'info';
  variant: 'standard';
};

const useUtilityClasses = (ownerState: AlertOwnerState) => {
  const { classes, color, variant, severity } = ownerState;

  const slots = {
    root: ['root', `${variant}${capitalize(color || severity)}`, `${variant}`],
    icon: ['icon'],
    action: ['action'],
  };

  return composeClasses(slots, getAlertUtilityClass, classes);
};

const AlertRoot = styled('div', {
  name: 'ESAlert',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { color, variant, severity },
    } = props;

    return [styles.root, styles[variant], styles[`${variant}${capitalize(color || severity)}`]];
  },
})<{ ownerState: AlertOwnerState }>(({ theme }) => ({
  display: 'grid',
  gridTemplateAreas: '"icon content action"',
  gridTemplateColumns: 'auto 1fr auto',
  alignItems: 'flex-start',
  borderRadius: '4px',
  padding: '7px 15px',
  position: 'relative',

  variants: [
    {
      props: (props: { breakpoint: AlertProps['breakpoint'] }) => !!props.breakpoint,
      style: (props: { breakpoint: number | Breakpoint }) => ({
        [theme.breakpoints.down(props.breakpoint)]: {
          gridTemplateAreas: '"icon . action" "content content content"',
          paddingBottom: '11px',
        },
      }),
    },
  ],

  [`&.${alertClasses.standardSuccess}`]: {
    backgroundColor: theme.vars.palette.success.A100,
    border: `1px solid ${theme.vars.palette.success.A200}`,
    color: theme.vars.palette.success[300],
  },
  [`&.${alertClasses.standardWarning}`]: {
    backgroundColor: theme.vars.palette.warning.A100,
    border: `1px solid ${theme.vars.palette.warning.A200}`,
    color: theme.vars.palette.warning[300],
  },
  [`&.${alertClasses.standardError}`]: {
    backgroundColor: theme.vars.palette.error.A100,
    border: `1px solid ${theme.vars.palette.error.A200}`,
    color: theme.vars.palette.error[300],
  },
  [`&.${alertClasses.standardInfo}`]: {
    backgroundColor: theme.vars.palette.info.A100,
    border: `1px solid ${theme.vars.palette.info.A200}`,
    color: theme.vars.palette.info[300],
  },
  [`&.${alertClasses.standardMonoA}`]: {
    backgroundColor: theme.vars.palette.monoA.A50,
    border: `1px solid ${theme.vars.palette.monoA.A100}`,
    color: theme.vars.palette.monoA.A500,
  },
}));

const AlertIcon = styled('div', {
  name: 'ESAlert',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon,
})(() => ({
  display: 'flex',
  margin: '8px 8px 8px 0',
  gridArea: 'icon',
}));

const AlertAction = styled('div', {
  name: 'ESAlert',
  slot: 'Action',
  overridesResolver: (props, styles) => styles.action,
})(() => ({
  display: 'flex',
  margin: '8px 0 8px 8px',
  gridArea: 'action',
}));

const defaultIconMapping = {
  success: <IconCheckCircleW500 />,
  warning: <IconAlertW500 />,
  error: <IconErrorW500 />,
  info: <IconInformation2W500 />,
};

/**
 * An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.
 */
export const Alert = (inProps: AlertProps) => {
  const {
    className,
    children,
    sx,
    icon,
    variant = 'standard',
    severity = 'success',
    action,
    color,
    breakpoint,
    iconMapping = defaultIconMapping,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESAlert',
  });

  const ownerState = { ...props, variant, severity, color, breakpoint };
  const classes = useUtilityClasses(ownerState);

  return (
    <AlertRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
      {icon !== false && <AlertIcon className={classes.icon}>{icon || iconMapping[severity]}</AlertIcon>}
      {children}
      {!!action && <AlertAction className={classes.action}>{action}</AlertAction>}
    </AlertRoot>
  );
};
