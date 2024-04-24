import { useEffect, useState } from 'react';

import { OnboardingPopperProps } from './OnboardingPopper.types';

import clsx from 'clsx';
import { getOnboardingPopperUtilityClass } from './OnboardingPopper.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { Button, Popper, Typography } from '@mui/material';

import { IconCloseW500, IconInformation2W500 } from '../../../icons';
import { Link } from '../../Link';

type OnboardingPopperOwnerState = {
  classes?: OnboardingPopperProps['classes'];
};

const useUtilityClasses = (ownerState: OnboardingPopperOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    icon: ['icon'],
    button: ['button'],
    container: ['container']
  };

  return composeClasses(slots, getOnboardingPopperUtilityClass, classes);
};

const OnboardingPopperRoot = styled('div', {
  name: 'ESOnboardingPopper',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})<OnboardingPopperProps>(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.monoB[500],
  width: '100%',
  minWidth: '256px',
  minHeight: '124px',
  borderRadius: '4px',
  padding: '12px',
  gap: '8px',

  '&::before': {
    backgroundColor: theme.palette.surface[400],
    content: '""',
    display: 'block',
    position: 'absolute',
    width: 12,
    height: 12,
    top: -6,
    transform: 'rotate(45deg)',
    left: 'calc(50% - 6px)'
  }
}));

const OnboardingPopperContent = styled('div', {
  name: 'ESOnboardingPopper',
  slot: 'Content',
  overridesResolver: (_, styles) => styles.root
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px'
}));

const OnboardingPopperContainer = styled('div', {
  name: 'ESOnboardingPopper',
  slot: 'Container',
  overridesResolver: (_, styles) => styles.container
})(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '196px'
}));

const OnboardingPopperButton = styled(Button, {
  name: 'ESOnboardingPopper',
  slot: 'Button',
  overridesResolver: (_, styles) => styles.button
})(() => ({
  textTransform: 'none'
}));

const OnboardingPopperButtonGroup = styled('div', {
  name: 'ESOnboardingPopper',
  slot: 'Container',
  overridesResolver: (_, styles) => styles.container
})(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

const OnboardingPopperIconClose = styled('div', {
  name: 'ESOnboardingPopper',
  slot: 'Button',
  overridesResolver: (_, styles) => styles.icon
})(() => ({
  cursor: 'pointer'
}));

export const OnboardingPopper = (inProps: OnboardingPopperProps) => {
  const {
    className,
    onStepChange,
    step,
    title,
    steps,
    currentStep,
    subtitle,
    labelNextButton,
    labelBackButton,
    iconClose = <IconCloseW500 />,
    iconInformation = <IconInformation2W500 />,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESOnboardingPopper'
  });

  const [open, setOpen] = useState<boolean>(false);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  useEffect(() => {
    setOpen(true);
  }, []);

  if (
    !steps ||
    !Array.isArray(steps) ||
    currentStep === undefined ||
    currentStep >= steps.length ||
    !steps[currentStep]?.element
  ) {
    return null;
  }

  const handleNext = () => {
    if (onStepChange) {
      if (step !== null && step !== undefined && step < steps.length - 1) {
        onStepChange(step + 1);
      } else {
        onStepChange(null);
      }
    }
  };

  const handlePrev = () => {
    if (onStepChange) {
      if (step !== null && step !== undefined && step > 0) {
        onStepChange(step - 1);
      }
    }
  };

  return (
    <Popper
      anchorEl={steps[currentStep]?.element?.() ?? null}
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [0, 8]
          }
        }
      ]}
      open={open}
    >
      <OnboardingPopperRoot className={clsx(classes.root, className)}>
        {iconInformation}
        <OnboardingPopperContent>
          <OnboardingPopperContainer className={classes.container}>
            <Typography color="monoA.A900" variant="body100">
              {title}
            </Typography>
            <OnboardingPopperIconClose
              className={classes.icon}
              color="tertiary"
              onClick={() => onStepChange && onStepChange(null)}
            >
              {iconClose}
            </OnboardingPopperIconClose>
          </OnboardingPopperContainer>
          <OnboardingPopperContainer>
            <Typography color="monoA.A900" variant="body100">
              {subtitle}
            </Typography>
          </OnboardingPopperContainer>
          <Link variant="body100">Узнать больше</Link>
          <OnboardingPopperButtonGroup>
            {currentStep !== undefined && currentStep > 0 && (
              <OnboardingPopperButton className={classes.button} variant="contained" onClick={() => handlePrev()}>
                {labelBackButton}
              </OnboardingPopperButton>
            )}
            <OnboardingPopperButton className={classes.button} variant="contained" onClick={() => handleNext()}>
              {labelNextButton}
            </OnboardingPopperButton>
            <Typography color="monoA.A500">
              {currentStep && currentStep + 1} из {steps.length}
            </Typography>
          </OnboardingPopperButtonGroup>
        </OnboardingPopperContent>
      </OnboardingPopperRoot>
    </Popper>
  );
};
