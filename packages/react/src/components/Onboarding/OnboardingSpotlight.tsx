import React from 'react';

interface Props {
  rect?: DOMRect | null;
  padding?: number;
}

export const OnboardingSpotlight: React.FC<Props> = ({ rect, padding = 5 }) => {
  if (!rect) return null;

  const styles: React.CSSProperties = {
    position: 'absolute',
    background: 'grey',
    borderRadius: '4px',
    top: rect.top - padding,
    left: rect.left - padding,
    width: rect.width + padding * 2,
    height: rect.height + padding * 2
  };

  return (
    <div
      key="OnboardingSpotlight"
      className="react-onboarding__spotlight"
      data-onboarding-id="spotlight"
      style={styles}
    />
  );
};
