import { useEffect, useState } from 'react';

import { OnboardingProps } from './Onboarding.types';

import { styled, useThemeProps } from '@mui/material/styles';
import { Box, Button, Popper, Typography } from '@mui/material';

import { IconCloseW500, IconInformation2W500 } from '../../icons';
import { Link } from '../Link';

const OnboardingRoot = styled(Box, {
  name: 'ESOnboarding',
  slot: 'Root',
  overridesResolver: () => {
    return [];
  }
})(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.monoB[500],
  width: '100%',
  minWidth: '256px',
  minHeight: '124px',
  borderRadius: '4px',
  padding: '12px',
  gap: '8px',

  '&::before': {
    backgroundColor: 'white',
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

export const OnboardingPopper = (inProps: OnboardingProps) => {
  const { onNext, title, steps, currentStep, setIsOpen, subtitle, onPrev } = useThemeProps({
    props: inProps,
    name: 'ESOnboarding'
  });

  const [open, setOpen] = useState<boolean>(false);

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
      <OnboardingRoot>
        <IconInformation2W500 sx={{ color: 'monoA.A500' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography color="monoA.A900" variant="body100">
              {title}
            </Typography>
            <Box sx={{ cursor: 'pointer', height: 0 }} onClick={() => setIsOpen && setIsOpen(false)}>
              <IconCloseW500 sx={{ color: 'monoA.A500' }} />
            </Box>
          </Box>

          <Box sx={{ width: '196px', marginBottom: '8px', display: 'flex', flexDirection: 'column' }}>
            <Typography color="monoA.A900" variant="body100">
              {subtitle}
            </Typography>
            <Link variant="body100">Узнать больше</Link>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {currentStep !== undefined && currentStep > 0 && (
              <Button style={{ textTransform: 'none' }} variant="contained" onClick={onPrev}>
                Назад
              </Button>
            )}
            <Button style={{ textTransform: 'none' }} variant="contained" onClick={onNext}>
              Далее
            </Button>
            <Typography color="monoA.A500">
              {currentStep && currentStep + 1} из {steps.length}
            </Typography>
          </Box>
        </Box>
      </OnboardingRoot>
    </Popper>
  );
};
