import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagGl = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path
        clipRule="evenodd"
        d="M24 8.008V0H0v8.008h5.74a3.826 3.826 0 0 0 7.65 0H24ZM9.565 4.174A3.826 3.826 0 0 0 5.74 8h7.652a3.826 3.826 0 0 0-3.826-3.826Z"
        fill="#F0F0F0"
        fillRule="evenodd"
      />
    </FlagRoot>
  );
};
