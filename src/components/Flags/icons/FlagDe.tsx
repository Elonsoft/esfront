import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagDe = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="M24 0H0v5.333h24V0Z" fill="#000" />
      <path d="M24 10.666H0v5.333h24v-5.333Z" fill="#FFDA44" />
    </FlagRoot>
  );
};
