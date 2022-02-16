import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagIt = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M16 0H0v16h24V0h-8Z" fill="#F0F0F0" />
      <path d="M8 0H0v16h8V0Z" fill="#6DA544" />
      <path d="M24 0h-8v16h8V0Z" fill="#D80027" />
    </FlagRoot>
  );
};
