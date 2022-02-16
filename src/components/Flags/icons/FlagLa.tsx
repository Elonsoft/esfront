import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagLa = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#0052B4" />
      <path d="M24 0H0v5.333h24V0ZM24 10.666H0V16h24v-5.334Z" fill="#D80027" />
      <path d="M12 10.226a2.226 2.226 0 1 0 0-4.452 2.226 2.226 0 0 0 0 4.452Z" fill="#F0F0F0" />
    </FlagRoot>
  );
};
