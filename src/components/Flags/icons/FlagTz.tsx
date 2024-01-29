import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagTz = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#338AF3" />
      <path d="M0 16V0h24" fill="#6DA544" />
      <path d="M24 3.135V0h-4.703L0 12.865V16h4.703L24 3.135Z" fill="#FFDA44" />
      <path d="M24 0v1.88L2.822 16H0v-1.88L21.178 0H24Z" fill="#000" />
    </FlagRoot>
  );
};
