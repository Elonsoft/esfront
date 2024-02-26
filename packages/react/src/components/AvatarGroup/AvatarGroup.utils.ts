import { AvatarGroupProps } from '.';

export const getCuttingOffset = (
  size: number,
  direction: AvatarGroupProps['direction'],
  spacing: number,
  cutoutWidth: number
) => {
  const spacingOffset = spacing >= 0 ? 0 : Math.abs(spacing);

  return direction === 'ltr' ? `${size + spacingOffset + cutoutWidth}px` : `${size - spacingOffset - cutoutWidth}px`;
};
