import { AlertContentProps } from './AlertContent.types';

import clsx from 'clsx';
import { getAlertContentUtilityClass } from './AlertContent.classes';

import { Breakpoint, styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import Typography from '@mui/material/Typography';
import composeClasses from '@mui/utils/composeClasses';

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
})<{ ownerState: { breakpoint: AlertContentProps['breakpoint'] } }>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  columnGap: '8px',
  rowGap: '6px',
  flexGrow: 1,
  gridArea: 'content',

  variants: [
    {
      props: (props: { breakpoint: AlertContentProps['breakpoint'] }) => !!props.breakpoint,
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
  const { className, children, sx, actions, breakpoint, ...props } = useDefaultProps({
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
