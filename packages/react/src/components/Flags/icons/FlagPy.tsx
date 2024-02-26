import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagPy = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 0H0v5.333h24V0Z" fill="#D80027" />
      <path d="M24 10.667H0V16h24v-5.333Z" fill="#0052B4" />
      <path d="m13.573 6.16-.59.59a1.391 1.391 0 1 1-1.967 0l-.59-.59a2.226 2.226 0 1 0 3.148 0Z" fill="#6DA544" />
      <path
        d="m12 6.899.208.638h.67l-.542.394.207.637-.542-.394-.543.394.207-.637-.542-.394h.67l.208-.638Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
