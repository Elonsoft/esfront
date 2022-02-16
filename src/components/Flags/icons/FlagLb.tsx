import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagLb = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 0H0v5.333h24V0ZM24 10.667H0V16h24v-5.333Z" fill="#D80027" />
      <path d="M13.607 9.072 12 6.125l-1.607 2.947h1.205v.804h.803v-.804h1.206Z" fill="#6DA544" />
    </FlagRoot>
  );
};
