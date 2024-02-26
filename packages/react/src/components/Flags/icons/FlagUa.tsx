import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagUa = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 .016H0v15.968h24V.016Z" fill="#FFDA44" />
      <path d="M24 .016H0V8h24V.016Z" fill="#338AF3" />
    </FlagRoot>
  );
};
