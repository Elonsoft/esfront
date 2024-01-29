import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagEe = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#000" />
      <path d="M24 0H0v5.333h24V0Z" fill="#0052B4" />
      <path d="M24 10.667H0V16h24v-5.333Z" fill="#F0F0F0" />
    </FlagRoot>
  );
};
