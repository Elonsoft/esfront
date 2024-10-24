import { AlertContentProps } from './AlertContent.types';

import clsx from 'clsx';
import { getAlertContentUtilityClass } from './AlertContent.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type AlertContentOwnerState = {
  classes?: AlertContentProps['classes'];
  breakpoint?: AlertContentProps['breakpoint'];
};

const useUtilityClasses = (ownerState: AlertContentOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    message: ['message'],
  };

  return composeClasses(slots, getAlertContentUtilityClass, classes);
};

const AlertContentRoot = styled('div', {
  name: 'ESAlertContent',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: { breakpoint: AlertContentProps['breakpoint'] } }>(({ ownerState: { breakpoint }, theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',

  gap: '6px',
  flexGrow: 1,

  ...(!!breakpoint && {
    [theme.breakpoints.down(breakpoint)]: {
      flexDirection: 'column',
    },
  }),
}));

const AlertMessage = styled(Typography, {
  name: 'ESAlertContent',
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

export const AlertContent = (inProps: AlertContentProps) => {
  const { className, children, sx, actions, breakpoint, ...props } = useThemeProps({
    props: inProps,
    name: 'ESAlertContent',
  });

  const ownerState = { ...props, breakpoint };
  const classes = useUtilityClasses(ownerState);
  return (
    <AlertContentRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
      <AlertMessage className={classes.message} color="monoA.A900" component="div" variant="body100">
        {children}
      </AlertMessage>
      {actions}
    </AlertContentRoot>
  );
};
