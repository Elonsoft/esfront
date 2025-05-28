import { StepProps } from './Step.types';

import clsx from 'clsx';
import { getStepUtilityClass } from './Step.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize } from '@mui/material';

import { IconCheckW500, IconExclamation } from '../../../icons';
import { ButtonBase, buttonBaseClasses } from '../../ButtonBase';

type StepOwnerState = {
  classes?: StepProps['classes'];
  error?: boolean;
  completed?: boolean;
  size?: string;
  activeStep?: number;
  disabled?: boolean;
  position?: 'default' | 'bottom';
  orientation?: 'horizontal' | 'vertical';
};

const useUtilityClasses = (ownerState: StepOwnerState) => {
  const { classes, completed, error, size, position, orientation } = ownerState;

  const slots = {
    root: [
      'root',
      completed && 'completed',
      error && 'error',
      `size${size}`,
      position && `position${capitalize(position)}`,
      orientation,
    ],
    button: ['button'],
    circle: ['circle'],
  };

  return composeClasses(slots, getStepUtilityClass, classes);
};

const StepRoot = styled(ButtonBase, {
  name: 'ESStep',
  slot: 'Root',
  overridesResolver: (_props, styles) => {
    const {
      ownerState: { orientation, position },
    } = _props;
    return [styles.root, styles[orientation], position && styles[`position${capitalize(position)}`]];
  },
})<{ ownerState: StepOwnerState }>(({ theme }) => ({
  minHeight: '57px',
  height: '100%',
  position: 'relative',
  '--text': theme.vars.palette.monoA.A800,
  '--hovered': theme.vars.palette.monoA.A100,
  '--pressed': theme.vars.palette.monoA.A200,
  padding: '16px 28px 16px 20px',
  borderRadius: '3px',

  [`&.${buttonBaseClasses.disabled}`]: {
    '--text': theme.vars.palette.monoA.A400,
    '--icon': theme.vars.palette.monoA.A400,
  },

  [`& .${buttonBaseClasses.wrapper}`]: {
    display: 'flex',
    justifyContent: 'flex-start',
  },

  variants: [
    {
      props: {
        position: 'bottom',
        orientation: 'horizontal',
      },
      style: {
        marginTop: '21px',
        padding: '16px 20px',

        [`& .${buttonBaseClasses.wrapper}`]: {
          flexDirection: 'column',
          height: 'auto',
        },
      },
    },
    {
      props: {
        error: true,
      },
      style: {
        '--text': theme.vars.palette.error[300],
      },
    },
  ],
}));

const StepCircle = styled('div', {
  name: 'ESStep',
  slot: 'Circle',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { completed, error, disabled },
    } = props;
    return [styles.circle, completed && styles.completed, error && styles.error, disabled && styles.disabled];
  },
})<{ ownerState: StepOwnerState }>(({ theme }) => ({
  marginRight: '12px',
  marginLeft: '8px',
  borderRadius: '50%',
  color: theme.vars.palette.monoB[500],
  height: '32px',
  width: '32px',
  minWidth: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.vars.palette.monoA.A500,

  variants: [
    {
      props: {
        size: '24',
      },
      style: {
        height: '24px',
        width: '24px',
        minWidth: '24px',
      },
    },
    {
      props: {
        completed: true,
      },
      style: {
        background: theme.vars.palette.primary[300],
      },
    },
    {
      props: {
        activeStep: true,
      },
      style: {
        background: theme.vars.palette.primary[300],
      },
    },
    {
      props: {
        error: true,
      },
      style: {
        background: theme.vars.palette.error[300],
      },
    },
    {
      props: {
        disabled: true,
      },
      style: {
        background: theme.vars.palette.monoA.A300,
      },
    },
  ],
}));

export const Step = (inProps: StepProps) => {
  const {
    sx,
    className,
    disabled,
    children,
    error,
    stepIndex,
    completed,
    activeStep,
    position,
    size = '32',
    orientation,
    iconCompleted = <IconCheckW500 size={size} />,
    iconError = <IconExclamation size={size} />,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESStep',
  });
  const ownerState = {
    ...props,
    size,
    error,
    completed,
    activeStep,
    disabled,
    position,
    orientation,
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <StepRoot className={clsx(className, classes.root)} disabled={disabled} ownerState={ownerState} sx={sx}>
      <StepCircle className={classes.circle} ownerState={ownerState}>
        {completed ? iconCompleted : error ? iconError : stepIndex}
      </StepCircle>
      {children}
    </StepRoot>
  );
};
