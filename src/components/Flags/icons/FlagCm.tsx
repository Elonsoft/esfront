import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagCm = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="M8 0H0v16h8V0Z" fill="#496E2D" />
      <path
        d="M24 0h-7.999v16h8V0ZM12 5.773l.553 1.7h1.788l-1.446 1.052.552 1.7-1.446-1.05-1.447 1.05.553-1.7L9.66 7.474h1.788l.553-1.7Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
