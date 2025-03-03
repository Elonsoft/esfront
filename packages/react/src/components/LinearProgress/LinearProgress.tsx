import { forwardRef } from 'react';

import { LinearProgressProps } from './LinearProgress.types';

import clsx from 'clsx';
import { getLinearProgressUtilityClass } from './LinearProgress.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { capitalize } from '@mui/material';
import { keyframes, styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

const TRANSITION_DURATION = 4;

const indeterminate1Keyframe = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`;

const indeterminate2Keyframe = keyframes`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`;

type LinearProgressOwnerState = {
  classes?: LinearProgressProps['classes'];
  variant: NonNullable<LinearProgressProps['variant']>;
  color: NonNullable<LinearProgressProps['color']>;
  width: NonNullable<LinearProgressProps['width']>;
};

const useUtilityClasses = (ownerState: LinearProgressOwnerState) => {
  const { classes, variant, color } = ownerState;

  const slots = {
    root: ['root', `color${capitalize(color)}`, variant],
    dashed: ['dashed', `dashedColor${capitalize(color)}`],
    bar1: [
      'bar',
      `barColor${capitalize(color)}`,
      variant === 'indeterminate' && 'bar1Indeterminate',
      variant === 'determinate' && 'bar1Determinate',
      variant === 'buffer' && 'bar1Buffer',
    ],
    bar2: [
      'bar',
      variant !== 'buffer' && `barColor${capitalize(color)}`,
      variant === 'buffer' && `color${capitalize(color)}`,
      variant === 'indeterminate' && 'bar2Indeterminate',
      variant === 'buffer' && 'bar2Buffer',
    ],
  };

  return composeClasses(slots, getLinearProgressUtilityClass, classes);
};

const LinearProgressRoot = styled('span', {
  name: 'ESLinearProgress',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.root, styles[`color${capitalize(ownerState.color)}`], styles[ownerState.variant]];
  },
})<{ ownerState: LinearProgressOwnerState }>(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  display: 'block',
  height: 'var(--ESLinearProgress-width)',
  borderRadius: 'calc(var(--ESLinearProgress-width) / 2)',
  zIndex: 0,

  '@media print': {
    colorAdjust: 'exact',
  },

  backgroundColor: theme.vars.palette.monoA.A200,

  variants: [
    {
      props: {
        color: 'inherit',
        variant: 'indeterminate',
      },
      style: {
        backgroundColor: 'none',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'transparent',
          opacity: 0.3,
        },
      },
    },
    {
      props: {
        color: 'inherit',
        variant: 'determinate',
      },
      style: {
        backgroundColor: 'none',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'transparent',
          opacity: 0.3,
        },
      },
    },
    {
      props: {
        variant: 'buffer',
      },
      style: {
        backgroundColor: 'transparent',
      },
    },
  ],
}));

const LinearProgressDashed = styled('span', {
  name: 'ESLinearProgress',
  slot: 'Dashed',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.dashed, styles[`dashedColor${capitalize(ownerState.color)}`]];
  },
})<{ ownerState: LinearProgressOwnerState }>(({ theme }) => {
  const backgroundColor = theme.vars.palette.monoA.A200;

  return {
    position: 'absolute',
    marginTop: 0,
    height: '100%',
    width: '100%',
    backgroundImage: `radial-gradient(${backgroundColor} 0%, ${backgroundColor} 20%, transparent 0%)`,
    backgroundSize: 'calc(var(--ESLinearProgress-width) * 3) calc(var(--ESLinearProgress-width) * 3)',
    backgroundPosition: '0 calc(var(--ESLinearProgress-width) * 2)',

    variants: [
      {
        props: {
          color: 'inherit',
        },
        style: {
          opacity: 0.3,
        },
      },
    ],
  };
});

const LinearProgressBar1 = styled('span', {
  name: 'ESLinearProgress',
  slot: 'Bar1',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.bar,
      styles[`barColor${capitalize(ownerState.color)}`],
      (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && styles.bar1Indeterminate,
      ownerState.variant === 'determinate' && styles.bar1Determinate,
      ownerState.variant === 'buffer' && styles.bar1Buffer,
    ];
  },
})<{ ownerState: LinearProgressOwnerState }>(({ theme }) => ({
  width: '100%',
  position: 'absolute',
  left: 0,
  bottom: 0,
  top: 0,
  transition: 'transform 0.2s linear',
  transformOrigin: 'left',
  borderRadius: 'calc(var(--ESLinearProgress-width) / 2)',
  backgroundColor: 'currentColor',

  variants: [
    {
      props: {
        color: 'primary',
      },
      style: {
        backgroundColor: theme.vars.palette.primary[300],
      },
    },
    {
      props: {
        color: 'secondary',
      },
      style: {
        backgroundColor: theme.vars.palette.secondary[300],
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
        color: 'warning',
      },
      style: {
        backgroundColor: theme.vars.palette.warning[300],
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
        color: 'success',
      },
      style: {
        backgroundColor: theme.vars.palette.success[300],
      },
    },
    {
      props: {
        variant: 'determinate',
      },
      style: {
        transition: `transform .${TRANSITION_DURATION}s linear`,
      },
    },
    {
      props: {
        variant: 'buffer',
      },
      style: {
        zIndex: 1,
        transition: `transform .${TRANSITION_DURATION}s linear`,
      },
    },
    {
      props: {
        variant: 'indeterminate',
      },
      style: {
        width: 'auto',
        animation: `${indeterminate1Keyframe} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`,
      },
    },
  ],
}));

const LinearProgressBar2 = styled('span', {
  name: 'ESLinearProgress',
  slot: 'Bar2',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.bar,
      styles[`barColor${capitalize(ownerState.color)}`],
      (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && styles.bar2Indeterminate,
      ownerState.variant === 'buffer' && styles.bar2Buffer,
    ];
  },
})<{ ownerState: LinearProgressOwnerState }>(({ theme }) => ({
  width: '100%',
  position: 'absolute',
  left: 0,
  bottom: 0,
  top: 0,
  transition: `transform .${TRANSITION_DURATION}s linear`,
  transformOrigin: 'right',
  borderRadius: 'calc(var(--ESLinearProgress-width) / 2)',

  variants: [
    {
      props: {
        variant: 'determinate',
        color: 'inherit',
      },
      style: {
        backgroundColor: 'currentColor',
      },
    },
    {
      props: {
        variant: 'determinate',
        color: 'primary',
      },
      style: {
        backgroundColor: theme.vars.palette.primary.A400,
      },
    },
    {
      props: {
        variant: 'determinate',
        color: 'secondary',
      },
      style: {
        backgroundColor: theme.vars.palette.secondary.A400,
      },
    },
    {
      props: {
        variant: 'determinate',
        color: 'error',
      },
      style: {
        backgroundColor: theme.vars.palette.error.A400,
      },
    },
    {
      props: {
        variant: 'determinate',
        color: 'warning',
      },
      style: {
        backgroundColor: theme.vars.palette.warning.A400,
      },
    },
    {
      props: {
        variant: 'determinate',
        color: 'info',
      },
      style: {
        backgroundColor: theme.vars.palette.info.A400,
      },
    },
    {
      props: {
        variant: 'determinate',
        color: 'success',
      },
      style: {
        backgroundColor: theme.vars.palette.success.A400,
      },
    },
    {
      props: {
        variant: 'buffer',
      },
      style: {
        backgroundColor: theme.vars.palette.monoA.A200,
      },
    },
    {
      props: {
        variant: 'indeterminate',
      },
      style: {
        width: 'auto',
        animation: `${indeterminate2Keyframe} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`,
      },
    },
    {
      props: {
        variant: 'indeterminate',
      },
      style: {
        transition: 'transform 0.2s linear',
      },
    },
  ],
}));

/** Express an unspecified wait time or display the length of a process. */
export const LinearProgress = forwardRef<HTMLButtonElement, LinearProgressProps>(function LinearProgress(
  inProps: LinearProgressProps,
  ref
) {
  const props = useDefaultProps({ props: inProps, name: 'ESLinearProgress' });

  const { className, width = 4, color = 'primary', value, valueBuffer, variant = 'indeterminate', ...other } = props;

  const ownerState = {
    ...props,
    color,
    variant,
    width,
  };

  const classes = useUtilityClasses(ownerState);

  const rootProps = {};
  const inlineStyles = { bar1: {}, bar2: {}, dashed: {} };

  if (variant === 'determinate' || variant === 'buffer') {
    if (value !== undefined) {
      if (value <= 100) {
        const transform = value - 100;
        inlineStyles.bar1 = { transform: `translateX(${transform}%)` };
      }
    }

    if (valueBuffer !== undefined) {
      if (valueBuffer <= 100) {
        const transform = (valueBuffer || 0) - 100;
        inlineStyles.bar2 = { transform: `translateX(${transform}%)` };
      }
    }
  }

  if (variant === 'buffer') {
    if (value !== undefined) {
      const transform = value;
      inlineStyles.dashed = { transform: `translateX(${transform}%)` };
    }

    if (valueBuffer !== undefined) {
      const transform = valueBuffer;
      inlineStyles.dashed = { transform: `translateX(${transform}%)` };
    }
  }

  return (
    <LinearProgressRoot
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      role="progressbar"
      style={
        {
          '--ESLinearProgress-width': `${width}px`,
        } as React.CSSProperties
      }
      {...rootProps}
      ref={ref}
      {...other}
    >
      {variant === 'buffer' ? (
        <LinearProgressDashed className={classes.dashed} ownerState={ownerState} style={inlineStyles.dashed} />
      ) : null}
      <LinearProgressBar1 className={classes.bar1} ownerState={ownerState} style={inlineStyles.bar1} />
      {valueBuffer && <LinearProgressBar2 className={classes.bar2} ownerState={ownerState} style={inlineStyles.bar2} />}
    </LinearProgressRoot>
  );
});
