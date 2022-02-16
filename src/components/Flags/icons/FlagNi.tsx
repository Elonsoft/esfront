import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagNi = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path
        d="M12 6.052a1.948 1.948 0 1 0 0 3.896 1.948 1.948 0 0 0 0-3.896Zm0 3.061a1.113 1.113 0 1 1 0-2.226 1.113 1.113 0 0 1 0 2.226Z"
        fill="#FFDA44"
      />
      <path d="M12.964 8.278 12 8l-.964.278-.321.557h2.57l-.321-.557Z" fill="#0052B4" />
      <path
        d="M24 0H0v5.333h24V0ZM24 10.667H0V16h24v-5.333ZM12 6.609l-.643 1.113L12 8l.643-.278L12 6.609Z"
        fill="#338AF3"
      />
      <path d="M11.035 8.278h1.928l-.321-.556h-1.286l-.32.556Z" fill="#6DA544" />
    </FlagRoot>
  );
};
