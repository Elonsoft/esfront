import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagGbEng = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M13.5 0h-3v6.5H0v3h10.5V16h3V9.5H24v-3H13.5V0Z" fill="#D80027" />
    </FlagRoot>
  );
};
