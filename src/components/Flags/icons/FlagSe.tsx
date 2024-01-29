import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagSe = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#0052B4" />
      <path d="M9 0H6v6.5H0v3h6V16h3V9.5h15v-3H9V0Z" fill="#FFDA44" />
    </FlagRoot>
  );
};
