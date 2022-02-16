import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagNa = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#496E2D" />
      <path d="M0 16V0h24" fill="#0052B4" />
      <path d="M24 3.135V0h-4.703L0 12.865V16h4.703L24 3.135Z" fill="#F0F0F0" />
      <path d="M24 0v1.88L2.822 16H0v-1.88L21.178 0H24Z" fill="#A2001D" />
      <path
        d="m8.8 4.87-1.067.5.568 1.033-1.157-.221-.147 1.169-.806-.86-.807.86-.146-1.17-1.158.222.568-1.032-1.066-.502 1.066-.501-.568-1.032 1.158.221.147-1.17.806.86.806-.86.147 1.17L8.3 3.336l-.567 1.032 1.065.501Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
