import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagBh = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H.104v16H24V0Z" fill="#D80027" />
      <path
        d="m9.818 3.244-2.355 1.19 2.355 1.188-2.355 1.19L9.818 8 7.463 9.19l2.355 1.188-2.355 1.19 2.355 1.189-2.355 1.19 2.355 1.19L8.11 16H0V0h8.107l1.711.865-2.355 1.19 2.355 1.189Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
