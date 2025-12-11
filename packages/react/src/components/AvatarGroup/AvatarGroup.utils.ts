import { AvatarGroupProps } from './AvatarGroup.types';

export const getCuttingOffset = (
  size: number,
  direction: AvatarGroupProps['direction'],
  spacing: number,
  cutoutWidth: number
) => {
  const spacingOffset = spacing >= 0 ? 0 : Math.abs(spacing);

  return direction === 'ltr' ? `${size + spacingOffset + cutoutWidth}px` : `${size - spacingOffset - cutoutWidth}px`;
};

export const getMaskImage = (size: number) => {
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${size} ${size}'%3E%3Ccircle cx='${
    size / 2
  }' cy='${size / 2}' r='${
    size / 2
  }' fill='black' /%3E%3C/svg%3E"), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${size} ${size}'%3E%3Ccircle cx='${
    size / 2
  }' cy='${size / 2}' fill='white' r='${size / 2}'/%3E%3C/svg%3E")`;
};
