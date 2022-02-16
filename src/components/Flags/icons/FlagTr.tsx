import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagTr = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path
        d="m11.587 6.163.825 1.136 1.336-.433-.826 1.136.824 1.136-1.335-.435-.826 1.136.001-1.404L10.251 8l1.335-.433.001-1.404Z"
        fill="#F0F0F0"
      />
      <path
        d="M9.337 10.841a2.84 2.84 0 1 1 1.351-5.34 3.496 3.496 0 1 0 0 4.999 2.827 2.827 0 0 1-1.351.341Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
