import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagCo = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path d="M24 12.082H0V16h24v-3.918Z" fill="#D80027" />
      <path d="M24 8H0v4.083h24V8Z" fill="#0052B4" />
    </FlagRoot>
  );
};
