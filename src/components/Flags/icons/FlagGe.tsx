import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagGe = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M13.5 0h-3v6.5H0v3h10.5V16h3V9.5H24v-3H13.5V0Z" fill="#D80027" />
      <path
        d="M5.772 2.728V1.685H4.728v1.043H3.685v1.044h1.043v1.043h1.044V3.772h1.043V2.728H5.772ZM19.272 2.728V1.685h-1.044v1.043h-1.043v1.044h1.043v1.043h1.044V3.772h1.043V2.728h-1.043ZM5.772 12.228v-1.044H4.728v1.044H3.685v1.043h1.043v1.044h1.044V13.27h1.043v-1.043H5.772ZM19.272 12.228v-1.044h-1.044v1.044h-1.043v1.043h1.043v1.044h1.044V13.27h1.043v-1.043h-1.043Z"
        fill="#D80027"
      />
    </FlagRoot>
  );
};
