import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagMu = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path d="M24 0H0v4h24V0Z" fill="#D80027" />
      <path d="M24 4H0v4h24V4Z" fill="#0052B4" />
      <path d="M24 12H0v4h24v-4Z" fill="#6DA544" />
    </FlagRoot>
  );
};
