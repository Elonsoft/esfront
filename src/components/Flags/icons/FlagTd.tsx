import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagTd = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path d="M8 0H0v16h8V0Z" fill="#0052B4" />
      <path d="M24 0h-8v16h8V0Z" fill="#D80027" />
    </FlagRoot>
  );
};
