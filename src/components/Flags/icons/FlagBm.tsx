import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagBm = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path
        d="M5.25 0H0l3.75 2.5H2.69L0 .707V3.25h5.25V0ZM0 4.75v2.543L2.69 5.5h1.06L0 8h12L8.25 5.5h1.06L12 7.293V4.75H6.75V8h-1.5V4.75H0ZM12 3.25V.707L9.31 2.5H8.25L12 0H6.75v3.25H12Z"
        fill="#F0F0F0"
      />
      <path
        d="M0 1.061v1.44h2.16L0 1.06ZM4.5 0v2.293L1.06 0H4.5ZM12 1.061v1.44H9.84L12 1.06ZM7.5 0v2.293L10.94 0H7.5ZM0 6.94V5.5h2.16L0 6.94ZM4.5 8V5.707L1.06 8H4.5ZM12 6.94V5.5H9.84L12 6.94ZM7.5 8V5.707L10.94 8H7.5Z"
        fill="#2E52B2"
      />
      <path d="M15.565 4.87v3.826c0 1.863 4.869 1.863 4.869 0V4.87h-4.87Z" fill="#F3F3F3" />
      <path d="M15.565 8.696c0 1.864 2.434 2.434 2.434 2.434s2.435-.57 2.435-2.434h-4.87Z" fill="#6DA544" />
      <path d="m18 7.165-1.13.487v1.043l1.13.696 1.13-.696V7.652L18 7.165Z" fill="#A2001D" />
      <path d="M19.13 6.609h-2.26v1.043h2.26V6.61Z" fill="#338AF3" />
    </FlagRoot>
  );
};
