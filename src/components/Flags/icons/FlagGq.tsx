import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagGq = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 10.666H0V16h24v-5.334Z" fill="#D80027" />
      <path d="M13.115 6.299v2.083c0 1.276 1.667 1.667 1.667 1.667s1.666-.391 1.666-1.667V6.3h-3.333Z" fill="#DEDDE0" />
      <path d="M15.2 8.007h-.833v1.209h.833V8.007Z" fill="#786145" />
      <path
        d="M24 0H0v5.333h24V0ZM15.616 7.549a.833.833 0 0 0-1.667 0 .417.417 0 1 0 0 .833h1.667a.417.417 0 1 0 0-.833Z"
        fill="#6DA544"
      />
      <path d="M12 8 0 16V0l12 8Z" fill="#0052B4" />
    </FlagRoot>
  );
};
