import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagGt = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M8 0H0v16h8V0ZM24 0h-8v16h8V0Z" fill="#338AF3" />
      <path
        d="m14.254 9.44-1.458-1.458 1.388-1.388-.063-.733-.398-.398L12 7.187l-1.723-1.724-.398.398-.063.733 1.388 1.388-1.458 1.459.796.795L12 8.778l1.458 1.458.796-.795Z"
        fill="#ACABB1"
      />
      <path d="m14.121 5.86-.795.796a1.875 1.875 0 1 1-2.652 0l-.795-.795a3 3 0 1 0 4.243 0Z" fill="#6DA544" />
    </FlagRoot>
  );
};
