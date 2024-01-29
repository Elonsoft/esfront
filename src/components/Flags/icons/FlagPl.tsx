import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagPl = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v8h24V0Z" fill="#F0F0F0" />
      <path d="M24 8H0v8h24V8Z" fill="#D80027" />
    </FlagRoot>
  );
};
