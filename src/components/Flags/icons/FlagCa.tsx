import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagCa = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path
        d="M8 0H0v16h8V0ZM24 0h-8v16h8V0ZM13.5 9.11l1.5-.749-.75-.375v-.75l-1.5.75.75-1.5h-.75L12 5.361l-.75 1.125h-.75l.75 1.5-1.5-.75v.75L9 8.361l1.5.75-.375.75h1.5v1.125h.75V9.861h1.5l-.375-.75Z"
        fill="#D80027"
      />
    </FlagRoot>
  );
};
