import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagGh = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path d="M24 0H0v5.333h24V0Z" fill="#D80027" />
      <path d="M24 10.667H0V16h24v-5.333Z" fill="#496E2D" />
      <path
        d="m11.995 5.333.662 2.037 1.892.15-1.733 1.26.912 1.886-1.733-1.259-1.733 1.26.662-2.038L9.191 7.37h2.142l.662-2.037Z"
        fill="#000"
      />
    </FlagRoot>
  );
};
