import { forwardRef, useEffect, useRef } from 'react';

import { SnackbarProps, SnackbarPropsColor, SnackbarPropsSeverity } from './Snackbar.types';

import clsx from 'clsx';
import { getSnackbarUtilityClass, snackbarClasses } from './Snackbar.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { capitalize } from '@mui/material/utils';
import composeClasses from '@mui/utils/composeClasses';

import { useForkRef } from '../../hooks';
import { IconAlertW500, IconCheckCircleW500, IconErrorW500, IconInformation2W500 } from '../../icons';
import { buttonClasses } from '../Button';
import { buttonBaseClasses } from '../ButtonBase';
import { svgIconClasses } from '../SvgIcon';

type SnackbarOwnerState = {
  classes?: SnackbarProps['classes'];
  severity: NonNullable<SnackbarProps['severity']>;
  color: NonNullable<SnackbarProps['color']>;
  size: NonNullable<SnackbarProps['size']>;
};

const useUtilityClasses = (ownerState: SnackbarOwnerState) => {
  const { classes, severity, color, size } = ownerState;

  const slots = {
    root: ['root', `severity${capitalize(severity)}`, `color${capitalize(color)}`, `size${capitalize(size)}`],
    progress: ['progress'],
    content: ['content'],
    icon: ['icon'],
    message: ['message'],
    actions: ['actions'],
  };

  return composeClasses(slots, getSnackbarUtilityClass, classes);
};

const SnackbarRoot = styled('div', {
  name: 'ESSnackbar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: SnackbarOwnerState }>(({ theme }) => ({
  position: 'relative',
  backdropFilter: `blur(25px)`,
  borderRadius: '6px',
  color: theme.vars.palette.monoB[500],
  overflow: 'hidden',

  variants: [
    {
      props: {
        color: 'monoA',
      },
      style: {
        backgroundColor: theme.vars.palette.monoA.A800,
      },
    },
    {
      props: {
        color: 'success',
      },
      style: {
        backgroundColor: theme.vars.palette.success[300],
      },
    },
    {
      props: {
        color: 'warning',
      },
      style: {
        backgroundColor: theme.vars.palette.warning[300],
      },
    },
    {
      props: {
        color: 'error',
      },
      style: {
        backgroundColor: theme.vars.palette.error[300],
      },
    },
    {
      props: {
        color: 'info',
      },
      style: {
        backgroundColor: theme.vars.palette.info[300],
      },
    },
    {
      props: {
        size: 's',
      },
      style: {
        minHeight: '32px',
        maxWidth: 'max-content',

        [`& .${snackbarClasses.message}`]: {
          '&:first-of-type': {
            paddingLeft: '12px',
          },
        },

        [`& .${snackbarClasses.actions}`]: {
          padding: '4px 4px 4px 8px',
        },
      },
    },
    {
      props: {
        size: 'm',
      },
      style: {
        minHeight: '40px',

        [`& .${snackbarClasses.icon}`]: {
          padding: '8px 6px 8px 8px',
        },

        [`& .${snackbarClasses.message}`]: {
          '&:first-of-type': {
            paddingLeft: '12px',
          },
        },

        [`& .${snackbarClasses.actions}`]: {
          gap: '4px',
          padding: '4px 4px 4px 16px',
        },
      },
    },
    {
      props: {
        size: 'l',
      },
      style: {
        minHeight: '48px',

        [`& .${snackbarClasses.icon}`]: {
          padding: '12px 8px 12px 12px',
        },

        [`& .${snackbarClasses.message}`]: {
          '&:first-of-type': {
            paddingLeft: '12px',
          },
        },

        [`& .${snackbarClasses.actions}`]: {
          gap: '8px',
          padding: '8px 8px 8px 16px',

          [`& .${buttonClasses.variantText}.${buttonClasses.colorMonoB}`]: {
            ...theme.typography.body100Medium,
            '--background': theme.vars.palette.monoB.A100,
            '--text': theme.vars.palette.monoB[500],

            [`&.${buttonClasses.size400} .${buttonBaseClasses.wrapper}`]: {
              padding: '0 12px',

              [`& > .${svgIconClasses.root}`]: {
                margin: '0 -8px',
              },
            },
          },
        },
      },
    },
    {
      props: {
        size: 'xl',
      },
      style: {
        minHeight: '56px',

        [`& .${snackbarClasses.icon}`]: {
          padding: '16px 8px 16px 16px',
        },

        [`& .${snackbarClasses.message}`]: {
          '&:first-of-type': {
            paddingLeft: '16px',
          },
        },

        [`& .${snackbarClasses.actions}`]: {
          gap: '8px',
          padding: '12px 12px 12px 16px',

          [`& .${buttonClasses.variantText}.${buttonClasses.colorMonoB}`]: {
            ...theme.typography.body100Medium,
            '--background': theme.vars.palette.monoB.A100,
            '--text': theme.vars.palette.monoB[500],

            [`&.${buttonClasses.size400} .${buttonBaseClasses.wrapper}`]: {
              padding: '0 12px',

              [`& > .${svgIconClasses.root}`]: {
                margin: '0 -8px',
              },
            },
          },
        },
      },
    },
  ],
}));

const SnackbarProgress = styled('div', {
  name: 'ESSnackbar',
  slot: 'Progress',
  overridesResolver: (props, styles) => styles.progress,
})(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  bottom: 0,
  zIndex: 1,
  width: 'var(--ESSnackbar-progress, 100%)',
  transition: 'var(--ESSnackbar-transition, none)',
  backgroundColor: theme.vars.palette.monoB.A100,
}));

const SnackbarContent = styled('div', {
  name: 'ESSnackbar',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content,
})({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  zIndex: 2,
});

const SnackbarIcon = styled('div', {
  name: 'ESSnackbar',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon,
})({
  display: 'flex',
});

const SnackbarMessage = styled('div', {
  name: 'ESSnackbar',
  slot: 'Message',
  overridesResolver: (props, styles) => styles.message,
})(({ theme }) => ({
  ...theme.typography.caption,
  padding: '4px 0',
  minWidth: 0,
  wordBreak: 'break-word',

  '&:first-of-type': {
    paddingLeft: '12px',
  },
}));

const SnackbarActions = styled('div', {
  name: 'ESSnackbar',
  slot: 'Actions',
  overridesResolver: (props, styles) => styles.actions,
})(() => ({
  alignItems: 'center',
  display: 'flex',
  marginLeft: 'auto',
}));

const defaultColorMapping: Record<SnackbarPropsSeverity, SnackbarPropsColor> = {
  default: 'monoA',
  success: 'success',
  warning: 'warning',
  error: 'error',
  info: 'info',
};

const defaultIconMapping = {
  default: <IconCheckCircleW500 />,
  success: <IconCheckCircleW500 />,
  warning: <IconAlertW500 />,
  error: <IconErrorW500 />,
  info: <IconInformation2W500 />,
};

/** Snackbar is used for brief notifications of processes that have been or will be performed. */
export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(function Snackbar(inProps, ref) {
  const {
    className,
    sx,

    message,
    icon,

    autoHideDuration,
    persist,

    progress,

    severity = 'default',
    color,
    size = 'm',

    colorMapping = defaultColorMapping,
    iconMapping = defaultIconMapping,

    action,

    onClose,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSnackbar',
  });

  const rootRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useForkRef(rootRef, ref);

  useEffect(() => {
    if (!persist && autoHideDuration) {
      setTimeout(() => {
        if (rootRef.current) {
          rootRef.current.style.setProperty('--ESSnackbar-transition', `${autoHideDuration}ms linear`);
          rootRef.current.style.setProperty('--ESSnackbar-progress', `0%`);
        }
      }, 1);

      const timer = setTimeout(() => {
        if (onClose) {
          onClose();
        }
      }, autoHideDuration);

      return () => {
        if (rootRef.current) {
          rootRef.current.style.setProperty('--ESSnackbar-transition', 'none');
          rootRef.current.style.setProperty('--ESSnackbar-progress', '100%');
        }

        clearTimeout(timer);
      };
    }
  }, [persist, autoHideDuration]);

  const ownerState = { severity, color: color || colorMapping[severity], ...props, size };
  const classes = useUtilityClasses(ownerState);

  return (
    <SnackbarRoot ref={handleRef} className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
      {progress && <SnackbarProgress className={classes.progress} />}
      <SnackbarContent className={classes.content}>
        {size !== 's' && icon !== false && (
          <SnackbarIcon className={classes.icon}>{icon || iconMapping[severity]}</SnackbarIcon>
        )}
        <SnackbarMessage className={classes.message}>{message}</SnackbarMessage>
        <SnackbarActions className={classes.actions}>{!!action && action}</SnackbarActions>
      </SnackbarContent>
    </SnackbarRoot>
  );
});
