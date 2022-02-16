import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagCd = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#338AF3" />
      <path
        d="M24 3.135V0h-4.703L0 12.865V16h4.703L24 3.135ZM8.263 2.435l.432 1.329h1.397l-1.13.82.432 1.33-1.13-.822-1.13.821.431-1.328-1.13-.821h1.397l.431-1.329Z"
        fill="#FFDA44"
      />
      <path d="M24 0v1.88L2.822 16H0v-1.88L21.178 0H24Z" fill="#D80027" />
    </FlagRoot>
  );
};
