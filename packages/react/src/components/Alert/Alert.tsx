import { AlertProps } from './Alert.types';

import clsx from 'clsx';
import { alertClasses, getAlertUtilityClass } from './Alert.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import Typography from '@mui/material/Typography';
import { capitalize } from '@mui/material/utils';
import { Breakpoint, styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

import { IconAlertW500, IconCheckCircleW500, IconErrorW500, IconInformation2W500 } from '../../icons';

type AlertOwnerState = {
  classes?: AlertProps['classes'];
  breakpoint?: AlertProps['breakpoint'];
  color?: AlertProps['color'];
  severity: 'success' | 'warning' | 'error' | 'info';
  variant: 'standard';
  isWithActions?: boolean;
};

const useUtilityClasses = (ownerState: AlertOwnerState) => {
  const { classes, color, variant, severity } = ownerState;

  const slots = {
    root: ['root', `${variant}${capitalize(color || severity)}`, `${variant}`],
    icon: ['icon'],
    content: ['content'],
    message: ['message'],
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
  display: 'flex',
  borderRadius: '4px',
  padding: '7px 15px',

  variants: [
    {
      props: {
        isWithActions: true,
      },
      style: {
        padding: '11px 15px',
      },
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
  paddingTop: '8px',
  marginRight: '8px',
}));

const AlertContent = styled('div', {
  name: 'ESAlert',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content,
})<{ ownerState: { breakpoint: AlertProps['breakpoint'] } }>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  flexGrow: 1,

  variants: [
    {
      props: (props: { breakpoint: AlertProps['breakpoint'] }) => !!props.breakpoint,
      style: (props: { breakpoint: number | Breakpoint }) => ({
        [theme.breakpoints.up(props.breakpoint)]: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
      }),
    },
  ],
}));

const AlertMessage = styled(Typography, {
  name: 'ESAlert',
  slot: 'Message',
  overridesResolver: (props, styles) => styles.message,
})(() => ({
  wordBreak: 'break-word',
  marginRight: 'auto',
  minHeight: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})) as typeof Typography;

const AlertAction = styled('div', {
  name: 'ESAlert',
  slot: 'Action',
  overridesResolver: (props, styles) => styles.action,
})<{ ownerState: AlertOwnerState }>(() => ({
  margin: '8px 0 0 8px',

  variants: [
    {
      props: {
        isWithActions: true,
      },
      style: {
        margin: '4px 0 0 8px',
      },
    },
  ],
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
    actions,
    color,
    breakpoint,
    iconMapping = defaultIconMapping,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESAlert',
  });

  const isWithActions = Array.isArray(children)
    ? children.some((elem) => (typeof elem === 'object' ? elem.type?.displayName === 'AlertActions' : false))
    : false;

  const ownerState = { ...props, variant, severity, color, isWithActions, breakpoint };
  const classes = useUtilityClasses(ownerState);

  return (
    <AlertRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
      {icon !== false && <AlertIcon className={classes.icon}>{icon || iconMapping[severity]}</AlertIcon>}
      <AlertContent className={classes.content} ownerState={{ breakpoint }}>
        <AlertMessage className={classes.message} color="monoA.A900" component="div" variant="body100">
          {children}
        </AlertMessage>
        {actions}
      </AlertContent>
      {!!action && (
        <AlertAction className={classes.action} ownerState={ownerState}>
          {action}
        </AlertAction>
      )}
    </AlertRoot>
  );
};
