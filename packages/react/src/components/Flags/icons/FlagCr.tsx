import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagCr = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 5.913H0v4.173h24V5.913Z" fill="#D80027" />
      <path d="M24 12.522H0V16h24v-3.478ZM24 0H0v3.478h24V0Z" fill="#0052B4" />
    </FlagRoot>
  );
};
