import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagBs = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path d="M24 0H0v5.333h24V0ZM24 10.666H0V16h24v-5.333Z" fill="#338AF3" />
      <path d="M12 8 0 16V0l12 8Z" fill="#000" />
    </FlagRoot>
  );
};
