import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagLs = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 0H0v5.333h24V0Z" fill="#0052B4" />
      <path d="M24 10.667H0V16h24v-5.333Z" fill="#6DA544" />
      <path d="M12.523 7.826V5.913h-1.044v1.913l-1.26 1.26a2.085 2.085 0 0 0 3.564 0l-1.26-1.26Z" fill="#000" />
    </FlagRoot>
  );
};
