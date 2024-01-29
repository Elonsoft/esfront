import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagTl = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="M12 8 0 .25v2.074L7.304 8 0 13.675v2.073L12 8Z" fill="#FFDA44" />
      <path d="M0 .25v15.498L8.87 8 0 .25Z" fill="#000" />
      <path
        d="m2.072 6.001 1.167 1.106 1.412-.77-.69 1.453L5.13 8.895l-1.594-.208-.69 1.452-.296-1.58L.955 8.35l1.412-.77-.295-1.58Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
