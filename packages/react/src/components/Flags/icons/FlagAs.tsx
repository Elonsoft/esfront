import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagAs = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#0052B4" />
      <path d="M24 1.144 2.798 8.106 24 15.068V16L0 8.106 24 .213v.931Z" fill="#D80027" />
      <path d="M24 13.495v1.573L2.8 8.106 24 1.145v1.573" fill="#F0F0F0" />
      <path
        d="M23.123 7.884H21.75a1.075 1.075 0 0 0-.067-1.456 1.075 1.075 0 0 0 0-1.53l-.025.026c.425-.422.451-1.132.025-1.554l-6.167 6.117a1.082 1.082 0 0 0 1.53-.005l.118-.108 2.953-.266v1.26h1.002v-1.35l1.503-.136.5-.998Z"
        fill="#A2001D"
      />
      <path d="m15.611 10.793-1.002-.496 1.002-.497h6.512v.993H15.61Z" fill="#FFDA44" />
    </FlagRoot>
  );
};
