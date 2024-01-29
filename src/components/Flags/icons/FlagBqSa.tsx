import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagBqSa = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#0052B4" />
      <path d="M24 0v7.814L0 8.008V0h24Z" fill="#D80027" />
      <path
        d="M20 8c.002.002-7.993 8.006-8 8-.008.006-8.002-7.998-8-8-.002-.002 7.992-8.005 8-8 .007-.005 8.002 7.998 8 8Z"
        fill="#F0F0F0"
      />
      <path
        d="m12.001 4.174.863 2.657h2.794l-2.26 1.643.863 2.657-2.26-1.642-2.26 1.642.863-2.657-2.26-1.643h2.794L12 4.174Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
