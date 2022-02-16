import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagTt = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="m.285 0 9.748 9.968L16.201 16h7.515l-9.748-9.968L7.8 0H.285Z" fill="#F0F0F0" />
      <path d="m2.033 0 16 16h3.935l-16-16H2.033Z" fill="#000" />
    </FlagRoot>
  );
};
