import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagEr = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#338AF3" />
      <path d="M24 0H0v8h24V0Z" fill="#6DA544" />
      <path d="m0 16 24-8L0 0v16Z" fill="#D80027" />
      <path
        d="M6.608 5a2.53 2.53 0 0 0-2.526 2.526v.947A2.53 2.53 0 0 0 6.608 11a2.53 2.53 0 0 0 2.527-2.527v-.947A2.53 2.53 0 0 0 6.608 5Zm1.58 3.473c0 .706-.466 1.305-1.106 1.507V8.947l.67-.67-.67-.67V7.052h-.947V8l-.67.67.67.67v.64a1.582 1.582 0 0 1-1.106-1.507v-.947c0-.87.709-1.579 1.58-1.579.87 0 1.578.708 1.578 1.579v.947Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
