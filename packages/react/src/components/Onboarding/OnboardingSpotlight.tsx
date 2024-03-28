import React from 'react';
import Box  from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface Props {
  rect?: DOMRect | null;
  padding?: number;
}

const StyledOnboardingSpotlight = styled(Box, {
  name: 'OnboardingSpotlight',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
 })<{ rect?: DOMRect | null; padding?: number }>(({ rect, padding = 5 }) => ({
  position: 'absolute',
  background: 'grey',
  borderRadius: '4px',
  top: rect ? rect.top - padding : 'auto',
  left: rect ? rect.left - padding : 'auto',
  width: rect ? rect.width + padding * 2 : 'auto',
  height: rect ? rect.height + padding * 2 : 'auto',
 }));

export const OnboardingSpotlight: React.FC<Props> = ({ rect, padding }) => {
  if (!rect) {
    return null;
  }

  return (
    <StyledOnboardingSpotlight
      key="OnboardingSpotlight"
      className="react-onboarding__spotlight"
      data-onboarding-id="spotlight"
      rect={rect}
      padding={padding}
    />
  );
};
