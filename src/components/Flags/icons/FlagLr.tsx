import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagLr = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 .298H0V16h24V.298Z" fill="#F0F0F0" />
      <path
        d="M24 0H7.29v1.455H24V0ZM24 7.273H7.29V5.818H24v1.455ZM7.29 4.363H24V2.91H7.29v1.454ZM0 8.727v1.455h24V8.727H0ZM24 13.091v-1.454H0v1.454h24ZM0 14.546V16h24v-1.454H0Z"
        fill="#D80027"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.29 0H0v7.29h7.29V0ZM3.694 1.536 4.212 3.1H5.89l-1.356.967.518 1.565-1.357-.967-1.356.967.518-1.565L1.5 3.1h1.676l.518-1.564Z"
        fill="#0052B4"
      />
    </FlagRoot>
  );
};
