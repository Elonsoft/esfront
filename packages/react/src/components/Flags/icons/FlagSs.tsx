import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagSs = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 11.13H0V16h24v-4.87Z" fill="#496E2D" />
      <path d="M24 0H0v4.9h24V0Z" fill="#000" />
      <path d="M24 5.885H0v4.202h24V5.885Z" fill="#A2001D" />
      <path d="M12 8 0 16V0l12 8Z" fill="#0052B4" />
      <path
        d="m3.43 5.806.977 1.362 1.598-.507-.994 1.35.976 1.362-1.59-.528-.995 1.35.011-1.677-1.59-.529 1.597-.507.01-1.676Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
