import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagKp = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 0H0v2.68h24V0ZM24 13.32H0V16h24v-2.68Z" fill="#0052B4" />
      <path
        clipRule="evenodd"
        d="M0 3.745h24v8.511H0V3.745ZM12 8a3.078 3.078 0 1 1-6.156 0A3.078 3.078 0 0 1 12 8Z"
        fill="#D80027"
        fillRule="evenodd"
      />
      <path
        d="m8.922 4.922.69 2.125h2.24l-1.813 1.314.696 2.132-1.813-1.32-1.811 1.318.693-2.13-1.81-1.314h2.237l.69-2.125Z"
        fill="#D80027"
      />
    </FlagRoot>
  );
};
