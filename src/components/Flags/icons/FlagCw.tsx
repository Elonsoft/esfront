import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagCw = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#0052B4" />
      <path d="M24 11.25H0v1.5h24v-1.5Z" fill="#FFDA44" />
      <path
        d="m6.834 2.957.432 1.328h1.397l-1.13.822.431 1.328-1.13-.82-1.13.82.431-1.328-1.13-.822h1.397l.432-1.328ZM4.435 1.565l.26.798h.837l-.678.492.26.797-.679-.492-.678.492.259-.797-.678-.492h.838l.26-.798Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
