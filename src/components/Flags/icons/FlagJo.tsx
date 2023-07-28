import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagJo = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 0H0v5.334h24V0Z" fill="#000" />
      <path d="M24 10.666H0V16h24v-5.334Z" fill="#6DA544" />
      <path
        clipRule="evenodd"
        d="m0 16 12-8L0 0v16Zm4.021-8.69-.369-.772-.37.772-.833-.193.374.77-.67.532.834.188-.002.855.667-.535.668.535-.003-.855.835-.188-.67-.532.373-.77-.834.193Z"
        fill="#D80027"
        fillRule="evenodd"
      />
    </FlagRoot>
  );
};
