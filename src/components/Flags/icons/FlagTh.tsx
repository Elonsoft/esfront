import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagTh = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 5.096H0v5.807h24V5.096Z" fill="#0052B4" />
      <path d="M24 0H0v2.556h24V0ZM24 13.444H0V16h24v-2.556Z" fill="#D80027" />
    </FlagRoot>
  );
};
