import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagCu = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 .016H0v15.968h24V.016Z" fill="#F0F0F0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 .016H0v3.193h24V.016ZM3.755 6.403H0v3.194h2.715l.36-1.105-1.356-.984h1.676l.36-1.105Zm.316 0 .36 1.105h1.676l-1.356.984.36 1.105H24V6.403H4.071ZM4.6 9.597l-.686-.498-.686.498h1.372ZM0 12.79h24v3.194H0V12.79Z"
        fill="#0052B4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 15.985 12 8 0 .016v15.969Zm4.431-8.477-.518-1.591-.518 1.591H1.719l1.356.984-.518 1.59L3.913 9.1l1.356.984-.518-1.591 1.356-.984H4.431Z"
        fill="#D80027"
      />
    </FlagRoot>
  );
};
