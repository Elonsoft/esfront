import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagPa = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path
        d="M12 8v8H0V8h12ZM6 1.767l.554 1.706h1.794L6.897 4.527l.554 1.706L6 5.179 4.549 6.233l.554-1.706-1.45-1.054h1.793L6 1.767Z"
        fill="#0052B4"
      />
      <path
        d="M24 0v8H12V0h12ZM18 9.767l.554 1.706h1.794l-1.451 1.054.554 1.706L18 13.179l-1.451 1.054.554-1.706-1.45-1.054h1.793L18 9.767Z"
        fill="#D80027"
      />
    </FlagRoot>
  );
};
