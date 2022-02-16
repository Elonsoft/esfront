import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagCz = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#0052B4" />
      <path d="M24 8v8H0l10.087-8H24Z" fill="#D80027" />
      <path d="M24 0v8H10.087L0 0h24Z" fill="#F0F0F0" />
    </FlagRoot>
  );
};
