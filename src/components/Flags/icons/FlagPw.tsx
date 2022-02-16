import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagPw = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#338AF3" />
      <path
        d="M10.262 11.456a3.475 3.475 0 0 0 3.478-3.472 3.475 3.475 0 0 0-3.478-3.472 3.475 3.475 0 0 0-3.479 3.472 3.475 3.475 0 0 0 3.479 3.472Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
