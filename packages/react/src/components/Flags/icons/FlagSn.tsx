import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagSn = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path d="M24 0H15.48v16H24V0Z" fill="#D80027" />
      <path
        d="M8.522 0H0v16h8.522V0ZM12 5.217l.69 2.126h2.236l-1.809 1.314.691 2.126L12 9.469l-1.808 1.314.69-2.126-1.808-1.314h2.235L12 5.217Z"
        fill="#496E2D"
      />
    </FlagRoot>
  );
};
