import React from 'react';

import { StepperProps } from './Stepper.types';

import clsx from 'clsx';
import { getStepperUtilityClass, stepperClasses } from './Stepper.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type StepperOwnerState = {
  classes?: StepperProps['classes'];
  orientation?: 'horizontal' | 'vertical';
  activeStep?: StepperProps['activeStep'];
  size?: StepperProps['size'];
  position?: 'default' | 'bottom';
  size24?: boolean;
};

const useUtilityClasses = (ownerState: StepperOwnerState) => {
  const { classes, orientation, size24 } = ownerState;

  const slots = {
    root: ['root', orientation, size24 && 'size24'],
    container: ['container'],
    activeStep: ['activeStep'],
    size: ['size'],
  };

  return composeClasses(slots, getStepperUtilityClass, classes);
};

const StepperRoot = styled('div', {
  name: 'ESStepper',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { orientation },
    } = props;

    return [styles.root, styles[orientation]];
  },
})<{ ownerState: StepperOwnerState }>(() => ({
  display: 'flex',
  [`&.${stepperClasses.horizontal}`]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  [`&.${stepperClasses.vertical}`]: {
    flexDirection: 'column',
    alignItems: 'initial',
    gap: '8px',
  },
}));

const StepperContainer = styled('div', {
  name: 'ESStepper',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container,
})(() => ({}));

const StepperConnectorRoot = styled('div', {
  name: 'ESStepperConnector',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  position: 'relative',
  width: '100%',
}));

const StepperConnectorLine = styled('div', {
  name: 'ESStepperConnector',
  slot: 'Line',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { orientation, size, size24 },
    } = props;

    return [styles.line, styles[orientation], styles[size], styles[size24]];
  },
})<{ ownerState: StepperOwnerState & { isActive: boolean } }>(({ theme }) => ({
  position: 'absolute',
  height: '1px',
  backgroundColor: theme.vars.palette.monoA.A300,

  variants: [
    {
      props: {
        isActive: true,
      },
      style: {
        backgroundColor: theme.vars.palette.primary[300],
      },
    },
    {
      props: {
        orientation: 'horizontal',
      },
      style: {
        width: 'calc(100% + 40px)',
        left: '-20px',
      },
    },
    {
      props: {
        orientation: 'vertical',
      },
      style: {
        left: '27px',
        width: '34px',
        transform: 'rotate(90deg)',
      },
    },
    {
      props: {
        orientation: 'vertical',
        size24: true,
      },
      style: {
        left: '24px',
        width: '34px',
        transform: 'rotate(90deg)',
      },
    },
  ],
}));

export const Stepper = (inProps: StepperProps) => {
  const {
    className,
    sx,
    children,
    activeStep,
    orientation = 'horizontal',
    position = 'default',
    size = '32',
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESStepper',
  });

  const ownerState = {
    ...props,
    position,
    orientation,
    activeStep,
    size,
    size24: size === '24',
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <StepperRoot className={clsx(className, classes.root)} ownerState={ownerState} sx={sx}>
      {React.Children.map(children, (child, index) => (
        <>
          <StepperContainer key={index}>
            {React.cloneElement(child as React.ReactElement, {
              ...props,
              activeStep: activeStep === index,
              orientation,
              position,
              size,
              stepIndex: index + 1,
            })}
          </StepperContainer>
          {index < React.Children.count(children) - 1 && (
            <StepperConnectorRoot>
              <StepperConnectorLine
                className={clsx(className, classes.root)}
                ownerState={{ ...ownerState, isActive: index < activeStep }}
              />
            </StepperConnectorRoot>
          )}
        </>
      ))}
    </StepperRoot>
  );
};
