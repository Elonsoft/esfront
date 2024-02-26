import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagTg = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path d="M24 0H0v3.2h24V0ZM24 12.8H0V16h24v-3.2ZM24 6.4H0v3.2h24V6.4Z" fill="#496E2D" />
      <path d="M9.565 0H0v9.565h9.565V0Z" fill="#D80027" />
      <path
        d="m4.782 2.278.621 1.913h2.012L5.787 5.374l.622 1.913-1.627-1.182-1.628 1.182.622-1.913L2.148 4.19H4.16l.622-1.913Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
