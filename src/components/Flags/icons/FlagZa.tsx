import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagZa = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M5.345 8 0 2.653v10.695L5.345 8Z" fill="#000" />
      <path d="M7.556 7.999 0 .438v2.214l5.345 5.347L0 13.347v2.21l7.556-7.558Z" fill="#FFDA44" />
      <path
        d="M23.898 9.565c.003-.02.038-.041.102-.062V6.435H10.435L4 0H0v.439l7.556 7.56L0 15.559V16h4l6.434-6.435h13.464Z"
        fill="#6DA544"
      />
      <path d="M23.586 11.13H11.082L6.212 16H24v-4.87h-.414Z" fill="#0052B4" />
      <path d="M23.586 4.87H24V0H6.213l4.87 4.87h12.503Z" fill="#D80027" />
    </FlagRoot>
  );
};
