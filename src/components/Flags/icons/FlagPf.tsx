import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagPf = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 0H0v5.333h24V0ZM24 10.667H0V16h24v-5.333ZM10.5 7.5 12 6.496 13.5 7.5v1.002h-3V7.5Z" fill="#D80027" />
      <path
        clipRule="evenodd"
        d="M12 9.558c.983 0 1.78-.574 1.78-1.558a1.78 1.78 0 1 0-3.561 0c0 .984.797 1.558 1.78 1.558Zm-.223-2.67h.445v1.557h-.445V6.887Zm-.445.667h-.445v.89h.445v-.89Zm1.78 0h-.445v.89h.446v-.89Z"
        fill="#FFDA44"
        fillRule="evenodd"
      />
      <path
        d="M11.777 8v.445h.445V8h.446v.445h.445V8h.668a1.78 1.78 0 1 1-3.562 0h.668v.445h.445V8h.445Z"
        fill="#0052B4"
      />
    </FlagRoot>
  );
};
