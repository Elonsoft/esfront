import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagGn = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path d="M24 0H15.48v16H24V0Z" fill="#6DA544" />
      <path d="M8.522 0H0v16h8.522V0Z" fill="#D80027" />
    </FlagRoot>
  );
};
