import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagGa = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path d="M24 0H0v5.334h24V0Z" fill="#6DA544" />
      <path d="M24 10.666H0V16h24v-5.334Z" fill="#0052B4" />
    </FlagRoot>
  );
};
