import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagSr = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 5.217H0v5.566h24V5.217Z" fill="#A2001D" />
      <path d="M24 12.522H0V16h24v-3.478ZM24 0H0v3.478h24V0Z" fill="#6DA544" />
      <path
        d="m12.035 6.219.442 1.36h1.43l-1.157.841.442 1.36-1.157-.84-1.158.84.442-1.36-1.157-.84h1.43l.443-1.361Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
