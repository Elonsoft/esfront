import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagBw = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 11.109H0v4.86h24v-4.86ZM24 0H0v4.89h24V0Z" fill="#338AF3" />
      <path d="M24 5.874H0v4.194h24V5.874Z" fill="#000" />
    </FlagRoot>
  );
};
