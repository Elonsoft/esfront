import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagGr = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24.002 0H0v16h24.002V0Z" fill="#F0F0F0" />
      <path d="M24.002 0H5.323v3.111H8.87V2h15.132V0ZM8.87 4v.889H5.324V8H8.87V6h15.132V4H8.87Z" fill="#338AF3" />
      <path d="M3.546 8V4.89H0V10h24.002V8H0h3.546ZM0 3.111h3.546V0H0v3.111ZM24.002 12H0v2h24.002v-2Z" fill="#338AF3" />
    </FlagRoot>
  );
};
