import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagGw = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#6DA544" />
      <path d="M24 0H0v8h24V0Z" fill="#FFDA44" />
      <path d="M8.522 0H0v16h8.522V0Z" fill="#D80027" />
      <path
        d="m4.61 5.146.707 2.18H7.61L5.755 8.673l.708 2.18L4.61 9.506l-1.854 1.347.708-2.18L1.61 7.326h2.292l.708-2.18Z"
        fill="#000"
      />
    </FlagRoot>
  );
};
