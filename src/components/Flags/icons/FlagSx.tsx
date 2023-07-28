import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagSx = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="M24 0v8.008H12L0 0h24Z" fill="#0052B4" />
      <path
        clipRule="evenodd"
        d="m0 16 12-8L0 0v16Zm3.643-7.572V5.643H7.5v2.785c0 1.477-1.929 1.929-1.929 1.929s-1.928-.452-1.928-1.929Z"
        fill="#F0F0F0"
        fillRule="evenodd"
      />
      <path
        d="M4.741 5.643h1.66a.858.858 0 0 0-1.66 0ZM3.642 8h-.848a2.786 2.786 0 1 0 5.553 0H7.5v.429c0 1.476-1.929 1.928-1.929 1.928S3.642 9.905 3.642 8.43v-.43Z"
        fill="#FFDA44"
      />
      <path d="M5.572 9.46C5.215 9.331 4.5 9.002 4.5 8.43V6.5h2.143v1.929c0 .575-.715.903-1.07 1.031Z" fill="#338AF3" />
      <path d="M6.001 7.572v-.429l-.429-.214-.428.214v.429l-.214.214v.857h1.285v-.857l-.214-.214Z" fill="#F3F3F3" />
    </FlagRoot>
  );
};
