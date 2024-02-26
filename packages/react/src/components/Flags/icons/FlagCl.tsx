import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagCl = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="M12 0H0v8h12V0Z" fill="#0052B4" />
      <path
        d="M24 0H12v8h12V0ZM6 1.147l.708 2.18H9L7.146 4.673l.708 2.18L6 5.505 4.146 6.853l.708-2.18L3 3.327h2.292L6 1.146Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
